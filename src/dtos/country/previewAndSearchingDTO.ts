export class CountryPreviewAndSearchingDTO {
  constructor(
    public name: string,
    public isIndependent: boolean,
    public isUNMember: boolean,
    public subregion: string,
    public area: number,
    public population: number,
    public flag: string
  ) {}
}
