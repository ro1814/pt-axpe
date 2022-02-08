const servicesTypeToValueMapping = {
    [typeof StreamingService]: 'streamingPrice',
    [typeof DownloadService ]: 'downloadPrice',
    [typeof PremiumContent ]: 'additionalFee',
}

class RegisteredUser {
    #total;

    constructor( services = [] ) {
        this.services = services;
        this.#total = {};
    }

    #addToTotal( service, multimediaContent ) {
        const multimediaContentMapKey = servicesTypeToValueMapping[typeof service];
        this.#total[typeof service] = multimediaContent[multimediaContentMapKey];
    }

    getTotal(){
        this.services.forEach(({ getMultimediaContent }) => {
            const multimediaContent = getMultimediaContent();

            addToTotal(service, multimediaContent);
        });
        return Object.values(this.#total).reduce(( prev, curr ) => prev + curr, 0);
    }
};