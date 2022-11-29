export interface Results {
  githubLink: string,
  image: string,
  launchLink: string,
  longDescription: string,
  shortDescription: string,
  titleApp: string,
  youtubeLink: string
}

export interface DataInterface
    {
      count: number,
    next: string|null,
    previous: string|null,
    results:Results[]

    }