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
      { text: 'BIOS v3.0.0 — KEVAL/CORP SYSTEMS', type: 'dim', delay: 0 },
      { text: 'Copyright (C) 2026 Keval Kankrecha. All Rights Reserved.', type: 'dim', delay: 200 },
      { text: '', type: 'dim', delay: 300 },

      { text: 'Initializing hardware interfaces...', type: 'normal', delay: 500 },
      { text: 'CPU: Intel Core i7-12700K @ 3.60GHz [OK]', type: 'normal', delay: 800 },
      { text: 'RAM: 32768 MB DDR5 [OK]', type: 'normal', delay: 1050 },
      { text: 'GPU: NVIDIA RTX 4070 [OK]', type: 'normal', delay: 1250 },

      { text: '', type: 'dim', delay: 1350 },

      { text: 'Booting core systems...', type: 'normal', delay: 1450 },
      { text: 'Loading kernel modules...', type: 'normal', delay: 1600 },

      { text: '> angular.core         [████████████] LOADED', type: 'accent', delay: 1800 },
      { text: '> nestjs.framework     [████████████] LOADED', type: 'accent', delay: 2000 },
      { text: '> docker.runtime       [████████████] LOADED', type: 'accent', delay: 2200 },
      { text: '> mongodb.driver       [████████████] LOADED', type: 'accent', delay: 2400 },
      { text: '> rabbitmq.service     [████████████] LOADED', type: 'accent', delay: 2600 },

      { text: '', type: 'dim', delay: 2700 },

      { text: 'Initializing AI modules...', type: 'normal', delay: 2850 },
      { text: '> llm.integration      [████████████] READY', type: 'accent', delay: 3050 },
      { text: '> prompt.engine        [████████████] OPTIMIZED', type: 'accent', delay: 3250 },

      { text: '', type: 'dim', delay: 3350 },

      { text: 'Mounting filesystem...', type: 'normal', delay: 3500 },
      { text: 'DETECTED_SYSTEM: [ Linux // Developer Environment ]', type: 'normal', delay: 3700 },
      { text: 'USER: Keval Kankrecha [Software Engineer]', type: 'accent', delay: 3900 },
      { text: `BROWSER_ID: [ *K3VAL-DEV-${this.genId()} ]`, type: 'normal', delay: 4100 },

      { text: '', type: 'dim', delay: 4200 },

      { text: 'Establishing secure connection...', type: 'normal', delay: 4400 },
      { text: 'Connection established.', type: 'success', delay: 4700 },

      { text: 'Enabling developer mode...', type: 'normal', delay: 4900 },
      { text: 'Debugging tools: ACTIVE', type: 'accent', delay: 5100 },

      { text: '', type: 'dim', delay: 5200 },

      { text: 'Loading portfolio modules...', type: 'normal', delay: 5400 },
      { text: '> projects.showcase    [████████████] READY', type: 'accent', delay: 5600 },
      { text: '> experience.timeline  [████████████] READY', type: 'accent', delay: 5800 },

      { text: '', type: 'dim', delay: 6000 },

      { text: 'Access Granted. Welcome to KevalOS.', type: 'success', delay: 6300 },
      { text: 'Crafting code. Solving problems. Building the future.', type: 'success', delay: 6600 },
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
      'LOADING MODULES',
      'MOUNTING FS',
      'CONNECTING',
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