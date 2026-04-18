import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';

interface BootLine {
  text: string;
  type: 'dim' | 'normal' | 'accent' | 'success' | 'error';
  delay: number;
}

@Component({
  selector: 'app-boot-screen',
  standalone: false,
  templateUrl: './boot-screen.component.html',
  styleUrls: ['./boot-screen.component.scss'],
})
export class BootScreenComponent implements OnInit, OnDestroy {
  @Output() bootComplete = new EventEmitter<void>();

  visibleLines: { text: string; type: string }[] = [];
  progress = 0;
  progressLabel = 'INITIALIZING';
  isExiting = false;
  skipped = false;

  private allLines: BootLine[] = [];
  private timers: any[] = [];
  private progressInterval: any;

  private genId(): string {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  }

private buildLines(): BootLine[] {
  return [
    { text: 'KEVAL/CORP SYSTEMS — v3.0.0', type: 'dim', delay: 0 },
    { text: 'Boot sequence initiated...', type: 'normal', delay: 300 },

    { text: '', type: 'dim', delay: 500 },

    { text: 'Initializing core systems...', type: 'normal', delay: 700 },
    { text: 'CPU / RAM / Network  ............. [OK]', type: 'normal', delay: 1000 },

    { text: '', type: 'dim', delay: 1200 },

    { text: `Session ID: ${this.genId()}-${this.genId()}`, type: 'normal', delay: 1600 },
    { text: `Browser ID: ${this.genId()}-${this.genId()}`, type: 'normal', delay: 1600 },

    { text: '', type: 'dim', delay: 1800 },

    { text: 'Access Granted.', type: 'success', delay: 2000 },
    { text: 'Welcome to my portfolio.', type: 'success', delay: 2200 },
  ];
}

  ngOnInit(): void {
    this.allLines = this.buildLines();
    this.startBoot();
  }

  ngOnDestroy(): void {
    this.clearAll();
  }

  @HostListener('click')
  onSkip(): void {
    if (!this.skipped) {
      this.skip();
    }
  }

  private startBoot(): void {
    const totalTime = this.allLines[this.allLines.length - 1].delay + 900;
    const labels = [
      'INITIALIZING',
      'LOADING',
      'PROCESSING',
      'GRANTING ACCESS',
    ];

    const startTime = Date.now();

    this.progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const prog = Math.min((elapsed / totalTime) * 100, 100);
      this.progress = prog;
      this.progressLabel =
        labels[Math.floor((prog / 100) * (labels.length - 1))];
      if (prog >= 100) {
        clearInterval(this.progressInterval);
      }
    }, 60);

    this.allLines.forEach((line) => {
      const t = setTimeout(() => {
        this.visibleLines.push({ text: line.text, type: line.type });
        requestAnimationFrame(() => {
          const el = document.getElementById('boot-log');
          if (el) el.scrollTop = el.scrollHeight;
        });
      }, line.delay);
      this.timers.push(t);
    });

    const doneTimer = setTimeout(() => this.exitBoot(), totalTime);
    this.timers.push(doneTimer);
  }

  private skip(): void {
    this.skipped = true;
    this.clearAll();
    this.progress = 100;
    this.progressLabel = 'ACCESS GRANTED';
    this.visibleLines = this.allLines.map((l) => ({ text: l.text, type: l.type }));
    setTimeout(() => this.exitBoot(), 400);
  }

  private exitBoot(): void {
    this.isExiting = true;
    setTimeout(() => this.bootComplete.emit(), 600);
  }

  private clearAll(): void {
    this.timers.forEach(clearTimeout);
    this.timers = [];
    if (this.progressInterval) clearInterval(this.progressInterval);
  }
}