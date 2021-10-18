export class Repository {
    constructor(
        public name: string,
        public description: string,
        public html_url: string,
        // public languageUsed: string,
        public updated_at: Date) {
    }
}
