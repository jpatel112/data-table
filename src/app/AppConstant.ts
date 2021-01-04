export class AppConstant {
  public static readonly receivedImportHeader = 'Received Imports';
  public static readonly receivedInfoHeader = 'Received Import Info';

  public static readonly adminPortalHeader = 'We Integration admin portal';
  public static readonly successfulImportHeader = 'Successful Imports';
  public static readonly noData = 'No data matching the filter';

  public static readonly webPortalColumns = [
    'id',
    'author_association',
    'number',
    'title',
    'updated_at',
    'state',
  ];
  public static readonly webPortalSecondColumns = [
    'filter-id',
    'filter-description',
    'filter-progress',
    'filter-color',
    'filter-date-failed',
    'filter-state',
  ];

  public static readonly successfulColumns = [
    'id',
    'author_association',
    'number',
    'title',
    'salesOrder',
    'updated_at',
  ];
  public static readonly successfulSecondColumns = [
    'filter-id',
    'filter-description',
    'filter-progress',
    'filter-color',
    'filter-salesOrder',
    'filter-date-failed',
  ];

  public static readonly receivedColumns = [
    'id',
    'created_date',
    'processed_date',
    'failed',
    'imported',
    'web_order',
    'status'
  ];
  public static readonly receivedSecondColumns = [
    'filter-id',
    'filter-created_date',
    'filter-processed_date',
    'filter-failed',
    'filter-imported',
    'filter-web_order',
    'filter-status'
  ];

  public static adminStatus = [
    { value: 'all', viewValue: 'All' },
    { value: 'failed', viewValue: 'Failed' },
    { value: 'unlinked', viewValue: 'Unlinked' },
    { value: 'special_instructions', viewValue: 'Special Instructions' },
    { value: 'deleted', viewValue: 'Deleted' },
    { value: 'manually_entered', viewValue: 'Manually Entered' },
    { value: 'stuck_moved_to_portal', viewValue: 'Stuck - moved to Portal' },
    { value: 'fraud_orders', viewValue: 'Fraud Orders' },
    { value: 'web_orders_already_in_SYSPRO', viewValue: 'Web Orders Already In SYSPRO' },
    { value: 'international_failed', viewValue: 'International Failed' },
    { value: 'international_unlinked', viewValue: 'International Unlinked' },
    { value: 'mirakl_guest', viewValue: 'Mirakl Guest' },
    { value: 'mirakl_unlinked', viewValue: 'Mirakl Unlinked' },
    { value: 'mirakl_seller_ID_missing', viewValue: 'Mirakl Seller ID Missing' }
  ];

  public static receivedStatus = [
    { value: 'pending', viewValue: 'Pending' },
    { value: 'processed', viewValue: 'Processed' },
    { value: 'all', viewValue: 'All' },
    { value: 'stuck_orders  ', viewValue: 'Stuck Orders' },
  ]
}


