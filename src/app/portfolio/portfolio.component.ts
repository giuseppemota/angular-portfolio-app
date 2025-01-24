import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { CardComponent } from "../card/card.component";
import { Card } from "../_models/card";
import { Tag } from "../_models/tags";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [CardComponent],
  templateUrl: "./portfolio.component.html",
  styleUrl: "./portfolio.component.css",
  providers: [],
})
export class PortfolioComponent {
  projects: Card[] = [
    {
      id: 1,
      name: "2D Barcode Backend API",
      summary:
        "Está é um REST API C#, utilizando .NET and PostgreSQL para gerenciar usuarios e gerenciar produtos. Esse projeto utiliza Entity Framework, Indentity Framework e o deploy utiliza Docker.",
      description:
        "O projeto 2D Barcode Backend API foi desenvolvido para fornecer uma solução robusta para gerenciamento de usuários e produtos. Utilizando C# e .NET, a API REST oferece funcionalidades avançadas de CRUD, autenticação e autorização com Identity Framework, e persistência de dados com Entity Framework. O PostgreSQL é utilizado como banco de dados, garantindo alta performance e escalabilidade. O deploy é realizado com Docker, permitindo fácil distribuição e execução em diferentes ambientes.",
      projectLink:
        "https://github.com/giuseppemota/Ingenico.Barcode/tree/development",
      tags: [
        Tag.CSHARP,
        Tag.DOTNET,
        Tag.INDENTITY,
        Tag.ENTITYFRAMEWORK,
        Tag.DOCKER,
        Tag.POSTGRESQL,
        Tag.RESTAPI,
      ],
      pictures: [],
    },
    {
      id: 2,
      name: "2D Barcode Frontend",
      summary:
        "O 2D Barcode Frontend é uma aplicação Angular que consome a API Barcode Backend API para gerenciar produtos e usuários.",
      description:
        "O 2D Barcode Frontend é uma aplicação Angular que consome a API Barcode Backend API para gerenciar produtos, usuários, gerar e consumir QR CODE. Utilizando Angular, HTML5, CSS3 e PrimeNG, a aplicação oferece uma interface intuitiva e funcionalidades avançadas para gerenciamento de produtos e usuários. A combinação dessas tecnologias proporciona uma aplicação eficiente e de fácil manutenção, atendendo às necessidades de gerenciamento diário de produtos e usuários.",
      projectLink:
        "https://github.com/giuseppemota/Ingenico.2D.Barcode/tree/development",
      tags: [
        Tag.ANGULAR,
        Tag.HTML5,
        Tag.CSS3,
        Tag.PRIMENG,
        Tag.TYPESCRIPT,
        Tag.JAVASCRIPT,
      ],
      pictures: [
        "../../assets/Cadastro-Produto.png",
        "../../assets/Detalhar-pt1.png",
        "../../assets/Detalhar-pt2.png",
        "../../assets/Exibir-Modal-Simples.png",
        "../../assets/Gerar-QrCode.png",
        "../../assets/Leitor-QrCode.png",
        "../../assets/Tela-Produtos.jpg",
      ],
    },
  ];

  constructor(private titleService: Title) {
    this.titleService.setTitle("GM | Portfólio");
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }
}
