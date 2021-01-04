export class ReceivedInfo {
    constructor(
        public importId: string,
        public imported: number,
        public webOrder: string,
        public failed: number,
        public status: string,
        public dateProcessed: string,
        public dateCreated: string
    ) { }
}
