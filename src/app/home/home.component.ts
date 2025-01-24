import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css", "/src/styles.css"],
})
export class HomeComponent implements OnInit {
  dynamicText = "";
  phrases: string[] = [
    "Team Player.",
    "Software Developer.",
    "Backend Engineer.",
    "Software Engineer.",
    "Code Enthusiast.",
  ];

  currentPhraseIndex = 0;
  currentCharIndex = 0;
  isDeleting = false;
  typingSpeed = 100;
  deletingSpeed = 100;
  delayBetweenPhrases = 2000;

  constructor(private titleService: Title) {
    this.titleService.setTitle("GM | Início");
  }

  ngOnInit(): void {
    this.type();
  }

  type() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];
    if (this.isDeleting) {
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
    } else {
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
    }

    if (!this.isDeleting && this.currentCharIndex === currentPhrase.length) {
      this.isDeleting = true;
      setTimeout(() => this.type(), this.delayBetweenPhrases);
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentPhraseIndex =
        (this.currentPhraseIndex + 1) % this.phrases.length;
      setTimeout(() => this.type(), 500);
    } else {
      const speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
      setTimeout(() => this.type(), speed);
    }
  }
}
