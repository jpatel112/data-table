
export interface IGithubApi {
    items: IAdminPortal[];
    total_count: number;
    incomplete_results: boolean;
}

export interface IAdminPortal {
    id: number;
    web_order: number;
    customer: number;
    customer_name: string;
    date_failed: string;
    status: string;
}

export interface ISuccessfulPortal {
    id: number;
    web_order: number;
    customer: number;
    customer_name: string;
    sales_order: number;
    date_failed: string;

}


export interface IReceivedPortal {
    id: number;
    updated_at: string;
    processed_date: string;
    failed: number;
    imported: number;
    web_order: number;
    status: string;

}