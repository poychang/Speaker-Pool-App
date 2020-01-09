import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SpeakerService {
  private speakerList: Speaker[] = [
    {
      headPicture: "https://i.imgur.com/PKMnZkz.jpg",
      name: "Edward Kuo",
      subtitle: "Developer",
      domain: [
        { name: "dotnet", isPrimary: true },
        { name: "azure", isPrimary: true }
      ],
      introduction:
        "是 Enterprise IT Manager、 Microsoft Regional Director、Microsoft Azure MVP、Azure DevOps Expert & Speaker 在不同的角色中學習用不同觀點看待軟體開發流程，不僅熱愛技術，也喜愛探索商業 Knowhow，在需求與技術中探尋合適的解決方案，思考適合產業雲端化架構設計，現在主要專注於雲端系統架構設計、工業 4.0 以及製造業的 AI 解決方案架構與設計，並在企業內建置的 DevOps 開發與維運合一的團隊，細節請參閱 https://medium.com/@kuoedward/about-me-f9641a5c4a3c",
      experience: ["Microsoft MVP", "Study4 社群成員"],
      remarks: ""
    },
    {
      headPicture:
        "https://distudio.blob.core.windows.net/study4tw/poy_chang.jpg",
      name: "Poy Chang",
      subtitle: "Developer",
      domain: [
        { name: "dotnet", isPrimary: true },
        { name: "azure", isPrimary: false },
        { name: "angular", isPrimary: false }
      ],
      introduction:
        "目前任職於全美100大私人企業，負責企業內部IT解決方案設計與開發，從前端開發到後端系統建構的過程中累積多元技術經驗，目前專注於 Angular、ASP.NET Core、Azure 技術研究，經常將經驗發表個人部落格，分享各項技術實務。",
      experience: [
        "Microsoft MVP",
        "Study4 社群成員",
        "Angular Taiwan 社群成員",
        "2019 台北 Insider Dev Tour 講師",
        "2019 廣州 Global Azure Bootcamp 講師"
      ],
      remarks: ""
    },
    {
      headPicture: "https://i.imgur.com/PKMnZkz.jpg",
      name: "Edward Kuo",
      subtitle: "Developer",
      domain: [
        { name: "dotnet", isPrimary: true },
        { name: "azure", isPrimary: true }
      ],
      introduction:
        "是 Enterprise IT Manager、 Microsoft Regional Director、Microsoft Azure MVP、Azure DevOps Expert & Speaker 在不同的角色中學習用不同觀點看待軟體開發流程，不僅熱愛技術，也喜愛探索商業 Knowhow，在需求與技術中探尋合適的解決方案，思考適合產業雲端化架構設計，現在主要專注於雲端系統架構設計、工業 4.0 以及製造業的 AI 解決方案架構與設計，並在企業內建置的 DevOps 開發與維運合一的團隊，細節請參閱 https://medium.com/@kuoedward/about-me-f9641a5c4a3c",
      experience: ["Microsoft MVP", "Study4 社群成員"],
      remarks: ""
    },
    {
      headPicture:
        "https://distudio.blob.core.windows.net/study4tw/poy_chang.jpg",
      name: "Poy Chang",
      subtitle: "Developer",
      domain: [
        { name: "dotnet", isPrimary: true },
        { name: "azure", isPrimary: false },
        { name: "angular", isPrimary: false }
      ],
      introduction:
        "目前任職於全美100大私人企業，負責企業內部IT解決方案設計與開發，從前端開發到後端系統建構的過程中累積多元技術經驗，目前專注於 Angular、ASP.NET Core、Azure 技術研究，經常將經驗發表個人部落格，分享各項技術實務。",
      experience: [
        "Microsoft MVP",
        "Study4 社群成員",
        "Angular Taiwan 社群成員",
        "2019 台北 Insider Dev Tour 講師",
        "2019 廣州 Global Azure Bootcamp 講師"
      ],
      remarks: ""
    },
    {
      headPicture: "https://i.imgur.com/PKMnZkz.jpg",
      name: "Edward Kuo",
      subtitle: "Developer",
      domain: [
        { name: "dotnet", isPrimary: true },
        { name: "azure", isPrimary: true }
      ],
      introduction:
        "是 Enterprise IT Manager、 Microsoft Regional Director、Microsoft Azure MVP、Azure DevOps Expert & Speaker 在不同的角色中學習用不同觀點看待軟體開發流程，不僅熱愛技術，也喜愛探索商業 Knowhow，在需求與技術中探尋合適的解決方案，思考適合產業雲端化架構設計，現在主要專注於雲端系統架構設計、工業 4.0 以及製造業的 AI 解決方案架構與設計，並在企業內建置的 DevOps 開發與維運合一的團隊，細節請參閱 https://medium.com/@kuoedward/about-me-f9641a5c4a3c",
      experience: ["Microsoft MVP", "Study4 社群成員"],
      remarks: ""
    },
    {
      headPicture:
        "https://distudio.blob.core.windows.net/study4tw/poy_chang.jpg",
      name: "Poy Chang",
      subtitle: "Developer",
      domain: [
        { name: "dotnet", isPrimary: true },
        { name: "azure", isPrimary: false },
        { name: "angular", isPrimary: false }
      ],
      introduction:
        "目前任職於全美100大私人企業，負責企業內部IT解決方案設計與開發，從前端開發到後端系統建構的過程中累積多元技術經驗，目前專注於 Angular、ASP.NET Core、Azure 技術研究，經常將經驗發表個人部落格，分享各項技術實務。",
      experience: [
        "Microsoft MVP",
        "Study4 社群成員",
        "Angular Taiwan 社群成員",
        "2019 台北 Insider Dev Tour 講師",
        "2019 廣州 Global Azure Bootcamp 講師"
      ],
      remarks: ""
    }
  ];

  constructor() {}

  public getSpeakers = () => this.speakerList;
}
