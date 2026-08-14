import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';

interface BioField {
  label: string;
  /** An array renders one line per entry. */
  value: string | string[];
}

interface BioSection {
  heading: string;
  fields: BioField[];
}

/*
 * NOTE: this gate is a speed bump, not security. Angular compiles this file
 * into the JavaScript bundle the browser downloads, so both the passphrase
 * below and every field of the sheet are readable by anyone who opens
 * DevTools. It keeps the page away from casual visitors and search engines'
 * users; it does not protect the data. Real protection needs the check to run
 * on a server that only sends the content back once it passes.
 */
/*
 * The passphrase is padded with six random characters on each side and base64
 * encoded, so the literal string does not appear in the source or survive a
 * grep of the shipped bundle. This is obfuscation, not encryption — anyone who
 * opens the bundle can decode it in seconds, and the sheet's contents sit in
 * that same bundle in plain text regardless.
 */
const TOKEN = 'SHNsQkxrS2V2YWxAQmlvRGF0YTJEZVhRaWg=';
const PAD = 6;

@Component({
  selector: 'app-bio-data',
  standalone: false,
  templateUrl: './bio-data.component.html',
  styleUrl: './bio-data.component.scss',
})
export class BioDataComponent implements OnInit, OnDestroy {
  readonly fullName = 'Keval Jitendrabhai Kankrecha';
  readonly tagline = 'Software Engineer';
  readonly site = 'kevalkankrecha.is-a.dev';
  /** Shared with the About section rather than duplicated. */
  readonly portrait = 'assets/keval.jpg';

  /** Any photo that fails to load drops out; an empty strip hides the page. */
  photos = ['assets/bio-data/photo-1.jpg', 'assets/bio-data/photo-2.jpg'];

  readonly sections: BioSection[] = [
    {
      heading: 'Personal Details',
      fields: [
        { label: 'Date of Birth', value: '20 December 2002' },
        { label: 'Height', value: '5\'8" (5.8 ft)' },
        { label: 'Weight', value: '72 kg' },
        { label: 'Blood Group', value: 'O+' },
        { label: 'Caste', value: 'Kadiya' },
      ],
    },
    {
      heading: 'Education & Career',
      fields: [
        { label: 'Education', value: 'B.E. in Computer Engineering' },
        { label: 'Designation', value: 'Software Engineer' },
        { label: 'Company', value: 'Kevit Technologies, Rajkot' },
      ],
    },
    {
      heading: 'Family Details',
      fields: [
        { label: 'Father', value: 'Jitendrabhai Raghubhai Kankrecha' },
        { label: "Father's Occupation", value: 'Gurukul Bus Conductor' },
        { label: 'Mother', value: 'Vilashben Jitendrabhai Kankrecha' },
        {
          label: 'Maternal Uncle',
          value: ['Manojbhai Devashibhai Tank', 'Tramboda, Rajkot'],
        },
      ],
    },
    {
      heading: 'Contact & Residence',
      fields: [
        {
          label: 'Contact Number',
          value: ['+91 78743 63609', '+91 90165 04960'],
        },
        {
          label: 'Address',
          value: [
            'Khodiyar Krupa,',
            'Opposite to Ashapura Party Plot,',
            'Ashapura Society, Gondal.',
          ],
        },
      ],
    },
    {
      heading: 'Property',
      fields: [
        {
          label: 'Holdings',
          value: ['Own house in Gondal', '5 Vigha of land in Rampara (Navagam)'],
        },
      ],
    },
  ];

  unlocked = false;
  toastMessage = '';

  private toastTimer?: ReturnType<typeof setTimeout>;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Deliberately not persisted: every visit and every reload re-prompts.

    // The global stylesheet paints the body black for the dark portfolio; this
    // sheet needs the cream ground to run past the pages on overscroll. Set it
    // here rather than in styles.scss so the portfolio's CSS stays untouched.
    this.renderer.setStyle(document.body, 'background', '#fbf3e4');
  }

  ngOnDestroy(): void {
    this.renderer.removeStyle(document.body, 'background');
    clearTimeout(this.toastTimer);
  }

  unlock(event: Event, entered: string): void {
    event.preventDefault();

    // Strip the random padding back off before comparing.
    if (entered === atob(TOKEN).slice(PAD, -PAD)) {
      this.unlocked = true;
      return;
    }

    this.showToast('Sorry — you are not able to visit this page.');
  }

  private showToast(message: string): void {
    clearTimeout(this.toastTimer);
    this.toastMessage = message;
    this.toastTimer = setTimeout(() => (this.toastMessage = ''), 3500);
  }

  lines(value: string | string[]): string[] {
    return Array.isArray(value) ? value : [value];
  }

  onPhotoError(src: string): void {
    this.photos = this.photos.filter((photo) => photo !== src);
  }
}
