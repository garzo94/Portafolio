export interface DataInterface
    {
      count: number,
    next: string|null,
    previous: string|null,
    results:{
      githubLink: string,
      image: string,
      launchLink: string,
      longDescription: string,
      shortDescription: string,
      titleApp: string,
      youtubeLink: string
    }

    }