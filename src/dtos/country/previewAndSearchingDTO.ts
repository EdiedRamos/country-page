export class CountryPreviewAndSearchingDTO {
  constructor(
    public name: string,
    public isIndependent: boolean,
    public isUNMember: boolean,
    public region: string,
    public subregion: string,
    public area: number,
    public population: number,
    public flag: string
  ) {}
}
