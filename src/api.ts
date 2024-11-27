/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Accident insurance policies. Occupational accident insurance. */
export interface AccidentInsurancePolicy {
  /**
   * Unique identifier of accident insurance policy.
   * @format int64
   */
  id?: number;
  /** Insurance provider name. */
  providerName?: string;
  /** Insurance provider code. */
  providerCode?: string;
  /** Policy number. */
  number?: string;
  /** Is policy active. */
  active?: boolean;
  /** Label. */
  label?: string;
  /**
   * Version.
   * @format date-time
   */
  version?: string;
}

/** Generated accounting report data. */
export interface AccountingReportData {
  /** List of accounting report periods. */
  periods?: AccountingReportPeriod[];
}

/** List of accounting report periods. */
export interface AccountingReportPeriod {
  /**
   * Start date of the accounting report period.
   * @format date
   */
  startDate?: string;
  /**
   * End date of the accounting report period.
   * @format date
   */
  endDate?: string;
  /**
   * Accounting report period rows.
   * @uniqueItems true
   */
  rows?: AccountingReportRow[];
}

/** Report parameters that were used to generate the accounting report. */
export interface AccountingReportRequest {
  /**
   * Report start date. Optional, if missing, starting date of the tracking period 'endDate' is in will be used. (financial year if not available)
   * @format date
   */
  startDate?: string;
  /**
   * Report end date.
   * @format date
   */
  endDate: string;
  /**
   * List of receipt statuses for report. Default value depends on company rights.
   * @example ["APPROVED","SENT","PAID","UNFINISHED"]
   */
  receiptStatus?: (
    | "APPROVED"
    | "SENT"
    | "NOT_SENT"
    | "PAYMENT_SENT_TO_BANK"
    | "PAID"
    | "PARTLY_PAID,"
    | "MARKED_PAID"
    | "PAYMENT_QUEUED"
    | "PAYMENT_DENIED"
    | "UNFINISHED"
    | "VERIFIED"
    | "RECEIVED"
  )[];
  /** Report type. */
  type: "INCOME_STATEMENT, CASH_FLOW, BALANCE_SHEET";
  /** Accounting report request options. */
  options?: AccountingReportRequestOptions;
}

/** Accounting report request options. */
export interface AccountingReportRequestOptions {
  /**
   * Receipt types that will be included in the report.
   * @default ["SALES_INVOICE","PURCHASE_INVOICE","TRAVEL_INVOICE","BILL_OF_CHARGES","JOURNAL","SALARY","VAT_FORM","EMPLOYER_CONTRIBUTION","PERIODIC_TAX_RETURN","VAT_SUMMARY","SALES_ORDER","PURCHASE_ORDER","REFERENCE_PAYMENT","BANK_STATEMENT_AS_RECEIPT","RECEIPT_FOR_OPENING_ACCOUNTS"]
   * @example ["SALES_INVOICE","PURCHASE_INVOICE","TRAVEL_INVOICE"]
   */
  receiptType?: (
    | "SALES_INVOICE"
    | "PURCHASE_INVOICE"
    | "TRAVEL_INVOICE"
    | "BILL_OF_CHARGES"
    | "JOURNAL"
    | "SALARY"
    | "VAT_FORM"
    | "EMPLOYER_CONTRIBUTION"
    | "PERIODIC_TAX_RETURN"
    | "VAT_SUMMARY"
    | "SALES_ORDER"
    | "PURCHASE_ORDER"
    | "REFERENCE_PAYMENT"
    | "BANK_STATEMENT_AS_RECEIPT"
    | "RECEIPT_FOR_OPENING_ACCOUNTS"
  )[];
  /**
   * Currency for the receipt in ISO 4217 format.
   * @example "EUR"
   */
  receiptCurrency?:
    | "AED"
    | "AFN"
    | "ALL"
    | "AMD"
    | "ANG"
    | "AOA"
    | "ARS"
    | "ATS"
    | "AUD"
    | "AWG"
    | "AZN"
    | "BAM"
    | "BBD"
    | "BDT"
    | "BEF"
    | "BGN"
    | "BHD"
    | "BIF"
    | "BMD"
    | "BND"
    | "BOB"
    | "BOV"
    | "BRL"
    | "BSD"
    | "BTN"
    | "BWP"
    | "BYN"
    | "BZD"
    | "CAD"
    | "CDF"
    | "CHE"
    | "CHF"
    | "CHW"
    | "CLF"
    | "CLP"
    | "CNH"
    | "CNT"
    | "CNY"
    | "COP"
    | "COU"
    | "CRC"
    | "CUC"
    | "CUP"
    | "CVE"
    | "CYP"
    | "CZK"
    | "DEM"
    | "DJF"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EEK"
    | "EGP"
    | "ERN"
    | "ESP"
    | "ETB"
    | "EUR"
    | "FIM"
    | "FJD"
    | "FKP"
    | "FRF"
    | "GBP"
    | "GEL"
    | "GGP"
    | "GHS"
    | "GIP"
    | "GMD"
    | "GNF"
    | "GRD"
    | "GTQ"
    | "GYD"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HTG"
    | "HUF"
    | "IDR"
    | "IEP"
    | "ILS"
    | "IMP"
    | "INR"
    | "IQD"
    | "IRR"
    | "ISK"
    | "ITL"
    | "JEP"
    | "JMD"
    | "JOD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KHR"
    | "KID"
    | "KMF"
    | "KPW"
    | "KRW"
    | "KWD"
    | "KYD"
    | "KZT"
    | "LAK"
    | "LBP"
    | "LKR"
    | "LRD"
    | "LSL"
    | "LTL"
    | "LUF"
    | "LVL"
    | "LYD"
    | "MAD"
    | "MDL"
    | "MGA"
    | "MKD"
    | "MMK"
    | "MNT"
    | "MOP"
    | "MRO"
    | "MTL"
    | "MUR"
    | "MVR"
    | "MWK"
    | "MXN"
    | "MXV"
    | "MYR"
    | "MZN"
    | "NAD"
    | "NGN"
    | "NIO"
    | "NIS"
    | "NLG"
    | "NOK"
    | "NPR"
    | "NTD"
    | "NZD"
    | "OMR"
    | "PAB"
    | "PEN"
    | "PGK"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PRB"
    | "PTE"
    | "PYG"
    | "QAR"
    | "RMB"
    | "RON"
    | "RSD"
    | "RUB"
    | "RWF"
    | "SAR"
    | "SBD"
    | "SCR"
    | "SDG"
    | "SEK"
    | "SGD"
    | "SHP"
    | "SIT"
    | "SKK"
    | "SLL"
    | "SLS"
    | "SOS"
    | "SRD"
    | "SSP"
    | "STN"
    | "SVC"
    | "SYP"
    | "SZL"
    | "THB"
    | "TJS"
    | "TMT"
    | "TND"
    | "TOP"
    | "TRY"
    | "TTD"
    | "TVD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "USN"
    | "UYI"
    | "UYU"
    | "UYW"
    | "UZS"
    | "VES"
    | "VND"
    | "VUV"
    | "WST"
    | "XAF"
    | "XAG"
    | "XAU"
    | "XBA"
    | "XBB"
    | "XBC"
    | "XBD"
    | "XCD"
    | "XDR"
    | "XOF"
    | "XPD"
    | "XPF"
    | "XPT"
    | "XSU"
    | "XTS"
    | "XUA"
    | "XXX"
    | "YER"
    | "ZAR"
    | "ZMW"
    | "ZWB"
    | "ZWL";
  /** Receipt name that will be used in the report. */
  receiptName?: string;
  /**
   * Entry period start date that will be used in the report. Date will be rounded down to start of the month.
   * @format date
   */
  entryPeriodStart?: string;
  /**
   * Entry period end date that will be used in the report. Date will be rounded up to end of the month.
   * @format date
   */
  entryPeriodEnd?: string;
  /** Transaction value that will be used in the report. */
  transactionValue?: string;
  /**
   * Transaction currency that will be used in the report. Not considered if transaction value is not given.
   * @default "EUR"
   */
  transactionCurrency?:
    | "AED"
    | "AFN"
    | "ALL"
    | "AMD"
    | "ANG"
    | "AOA"
    | "ARS"
    | "ATS"
    | "AUD"
    | "AWG"
    | "AZN"
    | "BAM"
    | "BBD"
    | "BDT"
    | "BEF"
    | "BGN"
    | "BHD"
    | "BIF"
    | "BMD"
    | "BND"
    | "BOB"
    | "BOV"
    | "BRL"
    | "BSD"
    | "BTN"
    | "BWP"
    | "BYN"
    | "BZD"
    | "CAD"
    | "CDF"
    | "CHE"
    | "CHF"
    | "CHW"
    | "CLF"
    | "CLP"
    | "CNH"
    | "CNT"
    | "CNY"
    | "COP"
    | "COU"
    | "CRC"
    | "CUC"
    | "CUP"
    | "CVE"
    | "CYP"
    | "CZK"
    | "DEM"
    | "DJF"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EEK"
    | "EGP"
    | "ERN"
    | "ESP"
    | "ETB"
    | "EUR"
    | "FIM"
    | "FJD"
    | "FKP"
    | "FRF"
    | "GBP"
    | "GEL"
    | "GGP"
    | "GHS"
    | "GIP"
    | "GMD"
    | "GNF"
    | "GRD"
    | "GTQ"
    | "GYD"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HTG"
    | "HUF"
    | "IDR"
    | "IEP"
    | "ILS"
    | "IMP"
    | "INR"
    | "IQD"
    | "IRR"
    | "ISK"
    | "ITL"
    | "JEP"
    | "JMD"
    | "JOD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KHR"
    | "KID"
    | "KMF"
    | "KPW"
    | "KRW"
    | "KWD"
    | "KYD"
    | "KZT"
    | "LAK"
    | "LBP"
    | "LKR"
    | "LRD"
    | "LSL"
    | "LTL"
    | "LUF"
    | "LVL"
    | "LYD"
    | "MAD"
    | "MDL"
    | "MGA"
    | "MKD"
    | "MMK"
    | "MNT"
    | "MOP"
    | "MRO"
    | "MTL"
    | "MUR"
    | "MVR"
    | "MWK"
    | "MXN"
    | "MXV"
    | "MYR"
    | "MZN"
    | "NAD"
    | "NGN"
    | "NIO"
    | "NIS"
    | "NLG"
    | "NOK"
    | "NPR"
    | "NTD"
    | "NZD"
    | "OMR"
    | "PAB"
    | "PEN"
    | "PGK"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PRB"
    | "PTE"
    | "PYG"
    | "QAR"
    | "RMB"
    | "RON"
    | "RSD"
    | "RUB"
    | "RWF"
    | "SAR"
    | "SBD"
    | "SCR"
    | "SDG"
    | "SEK"
    | "SGD"
    | "SHP"
    | "SIT"
    | "SKK"
    | "SLL"
    | "SLS"
    | "SOS"
    | "SRD"
    | "SSP"
    | "STN"
    | "SVC"
    | "SYP"
    | "SZL"
    | "THB"
    | "TJS"
    | "TMT"
    | "TND"
    | "TOP"
    | "TRY"
    | "TTD"
    | "TVD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "USN"
    | "UYI"
    | "UYU"
    | "UYW"
    | "UZS"
    | "VES"
    | "VND"
    | "VUV"
    | "WST"
    | "XAF"
    | "XAG"
    | "XAU"
    | "XBA"
    | "XBB"
    | "XBC"
    | "XBD"
    | "XCD"
    | "XDR"
    | "XOF"
    | "XPD"
    | "XPF"
    | "XPT"
    | "XSU"
    | "XTS"
    | "XUA"
    | "XXX"
    | "YER"
    | "ZAR"
    | "ZMW"
    | "ZWB"
    | "ZWL";
  /** Language that will be used in the report. */
  reportLanguage?: string;
  /** Customer company ID that will be used in the accounting report. */
  customerCompanyId?: string;
}

export interface AccountingReportResponse {
  /** Report parameters that were used to generate the accounting report. */
  reportParameters?: AccountingReportRequest;
  /** Generated accounting report data. */
  reportData?: AccountingReportData;
}

/** Accounting report period rows. */
export interface AccountingReportRow {
  /**
   * Id of the accounting report row.
   * @format int32
   */
  rowId?: number;
  /** Type of the accounting report row. */
  type?: "BALANCE" | "ROW_FUNCTION";
  /** Name of the accounting row. */
  name?: string;
  /** Value of the accounting row. */
  value?: number;
  /** Accounting row function formula. */
  formula?: string;
}

/** Ledger receipt transactions. */
export interface AccountingReportTransaction {
  /**
   * Ledger transaction ID.
   * @format int32
   */
  id?: number;
  /** Ledger receipt name. */
  name?: string;
  /**
   * Ledger receipt number.
   * @format int32
   */
  receiptNumber?: number;
  /**
   * Ledger receipt date.
   * @format date
   */
  receiptDate?: string;
  /**
   * Ledger invoice date.
   * @format date
   */
  invoiceDate?: string;
  /** Ledger receipt type. */
  type?:
    | "ACCRUAL"
    | "BANK_STATEMENT_AS_RECEIPT"
    | "BILL_OF_CHARGES"
    | "EMPLOYER_CONTRIBUTION"
    | "JOURNAL"
    | "JOURNAL_BYPASSING_INVOICE_PAGE"
    | "JOURNAL_MOVING_STRAIGHT_TO_ACCOUNTING_PAGE"
    | "OFFER"
    | "PAYMENT_CORRECTION"
    | "PERIODIC_TAX_RETURN"
    | "PURCHASE_INVOICE"
    | "PURCHASE_ORDER"
    | "RECEIPT_FOR_OPENING_ACCOUNTS"
    | "REFERENCE_PAYMENT"
    | "SALARY"
    | "SALES_INVOICE"
    | "SALES_ORDER"
    | "TRACKING_PERIOD_OPENING_RECEIPT"
    | "TRAVEL_INVOICE"
    | "TRAVEL_PLAN"
    | "UNKNOWN_RECEIPT_TYPE_F"
    | "UNKNOWN_RECEIPT_TYPE_G"
    | "VAT_FORM"
    | "VAT_SUMMARY";
  /** Ledger transaction accounting value. */
  accountingValue?: number;
  /** Receipt status. */
  status?:
    | "APPROVED"
    | "DELETED"
    | "EMPTY"
    | "INVALIDATED"
    | "INVOICED"
    | "MARKED_PAID"
    | "NOT_SENT"
    | "OVERRIDDEN"
    | "PAID"
    | "PARTLY_PAID"
    | "PAYMENT_DENIED"
    | "PAYMENT_QUEUED"
    | "PAYMENT_SENT_TO_BANK"
    | "PAYMENT_TRANSACTION_REMOVED"
    | "RECEIVED"
    | "SENT"
    | "STARTED"
    | "UNFINISHED"
    | "UNSAVED"
    | "VERIFIED";
  /** Vat percent. */
  vatPercent?: number;
  /** Vat amount. */
  vatAmount?: number;
  /** Vat deduction percent. */
  vatDeductionPercent?: number;
  /** Vat deduction. */
  vatDeduction?: number;
  /**
   * Vat status.
   * @format int32
   */
  vatStatus?: number;
  /** Ledger Transaction Description. */
  transactionDescription?: string;
  /**
   * Start date of the transaction.
   * @format date
   */
  startDate?: string;
  /**
   * End date of the transaction.
   * @format date
   */
  endDate?: string;
}

/** Contains rights for accounting functionalities. */
export interface AccountingRights {
  /** Access level to journal receipts functionality. */
  journalReceipts?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to journal receipt search functionality. */
  journalReceiptSearch?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Is personal journal receipts only limitation enabled. */
  personalJournalReceiptsOnly?: boolean;
  /** Access level to closing of account tools functionality. */
  closingOfAccountTools?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Is prevent creating/editing invoices limitation enabled. */
  preventCreatingEditingInvoices?: boolean;
  /** Is prevent editing accounting page limitation enabled. */
  preventEditingAccountingPage?: boolean;
  /** Access level to accounting reports functionality. */
  accountingReports?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to archive functionality. */
  archive?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
}

export interface AllocationMetadata {
  /** Metadata allocations for the target resource. */
  allocationMetadataRows?: AllocationMetadataRow[];
}

/** Metadata allocations for the target resource. */
export interface AllocationMetadataRow {
  /**
   * Unique identifier of the metadata. Generated by Procountor and present in the object returned.
   * @format int32
   */
  id?: number;
  /** The VAT percentage breakdown of the VAT amount payable by VAT rate or exemption. For Reference Payment metadata, this VAT percentage must be allowed for sales. For Bank Statement Event metadata, both purchase and sales percentages are allowed. */
  vatPercentage: number;
  /** Sum of the allocation metadata in the currency of the Reference Payment or Bank Statement Event that the metadata is for. */
  sum: number;
  /**
   * Event VAT status. Use here the numeric parts of VAT status codes listed in "VAT defaults" in Procountor. For example, for VAT status code "vat_12", use value 12. For Reference Payment metadata, the VAT status must be allowed for use in sales. For Bank Statement Event metadata, both purchase and sales VAT statuses are allowed.
   * @format int32
   */
  vatStatus?: number;
  /** Ledger account code used for the accounting. Must be valid for the current Procountor environment. Use GET /coa to obtain the chart of accounts. */
  ledgerAccountCode?: string;
}

/** Metadata allocations for the bank statement event. */
export interface AllocationMetadataWithFullLedgerAccountDataRow {
  /**
   * Unique identifier of the metadata. Generated by Procountor and present in the object returned.
   * @format int32
   */
  id?: number;
  /** The VAT percentage breakdown of the VAT amount payable by VAT rate or exemption. For Reference Payment metadata, this VAT percentage must be allowed for sales. For Bank Statement Event metadata, both purchase and sales percentages are allowed. */
  vatPercentage: number;
  /** Sum of the allocation metadata in the currency of the Reference Payment or Bank Statement Event that the metadata is for. */
  sum: number;
  /**
   * Event VAT status. Use here the numeric parts of VAT status codes listed in "VAT defaults" in Procountor. For example, for VAT status code "vat_12", use value 12. For Reference Payment metadata, the VAT status must be allowed for use in sales. For Bank Statement Event metadata, both purchase and sales VAT statuses are allowed.
   * @format int32
   */
  vatStatus?: number;
  /** Ledger account used for the accounting. Must be valid for the current Procountor environment. Use GET /coa to obtain the chart of accounts. */
  ledgerAccount?: LedgerAccount;
}

export interface Attachment {
  /**
   * Unique identifier of the attachment. Generated by Procountor and present in the object returned.
   * @format int32
   */
  id?: number;
  /**
   * Attachment name. Include a correct file extension to the value.
   * @example "Picture.jpg"
   */
  name: string;
  /** Reference type of the attachment. Indicates what object is the owner of the attachment. Exception: for JOURNAL type ledger receipts, use type INVOICE. */
  referenceType:
    | "BANKSTATEMENTEVENT"
    | "COST_RECEIPT"
    | "CUSTOMER_BUSINESS_PARTNER_REGISTER"
    | "EMPLOYEE_INFO"
    | "ENVIRONMENT"
    | "FINANCIAL_STATEMENT"
    | "INVOICE"
    | "INVOICEDRAFT_ITEM"
    | "LEDGERRECEIPT"
    | "NETS_COLLECTION"
    | "PERSON_BUSINESS_PARTNER_REGISTER"
    | "PURCHASE_PRODUCT_REGISTER"
    | "REFERENCE_PAYMENT"
    | "SALES_PRODUCT_REGISTER"
    | "SUPPLIER_BUSINESS_PARTNER_REGISTER";
  /**
   * Unique identifier of the referenced object. Exception: for JOURNAL type ledger receipts, use the value of invoiceId referring to the associated invoice.
   * @format int32
   */
  referenceId: number;
  /** Mime type of the attachment. Determined from the file extension. */
  mimeType?: string;
  /** Indicator if attachment has to be send with the invoice. 'sendWithInvoice' can be set only for receipt types: SALES_INVOICE, SALES_ORDER, PURCHASE_ORDER */
  sendWithInvoice: boolean;
}

export interface AttachmentRename {
  /**
   * Attachment name. Include a correct file extension to the value.
   * @example "Picture.jpg"
   */
  name: string;
}

export interface AttachmentSearchResult {
  /** Search results. */
  results?: Document[];
  /** Search result metadata. */
  meta?: SearchResultMetaData;
}

/** Bank account number. */
export interface BankAccount {
  /** Bank account IBAN. If using a financing agreement, the account number must match the account of the specified financing agreement. The account number must be valid for the specified country, include country code and exclude any spaces. */
  accountNumber?: string;
  /** Bank account BIC/SWIFT. Not supported for SALES_INVOICE and SALES_ORDER. */
  bic?: string;
}

/** Aliases for the bank account if any exists in the given environment. Used on Swedish and Danish environments. */
export interface BankAccountAlias {
  /** Type of associated account number. */
  type: "BANKGIRO" | "KREDITOR" | "PLUSGIRO";
  /** Associated account number. */
  accountNumber: string;
}

/** Search results. */
export interface BankStatement {
  /**
   * Unique identifier of the bank statement.
   * @format int64
   */
  id?: number;
  /** Account number for which the statement is generated. */
  accountNumber?: string;
  /**
   * Start date of the bank statement.
   * @format date
   */
  startDate?: string;
  /**
   * End date of the bank statement.
   * @format date
   */
  endDate?: string;
  /**
   * Currency of the bank statement in ISO 4217 format.
   * @example "EUR"
   */
  currency?:
    | "AED"
    | "AFN"
    | "ALL"
    | "AMD"
    | "ANG"
    | "AOA"
    | "ARS"
    | "ATS"
    | "AUD"
    | "AWG"
    | "AZN"
    | "BAM"
    | "BBD"
    | "BDT"
    | "BEF"
    | "BGN"
    | "BHD"
    | "BIF"
    | "BMD"
    | "BND"
    | "BOB"
    | "BOV"
    | "BRL"
    | "BSD"
    | "BTN"
    | "BWP"
    | "BYN"
    | "BZD"
    | "CAD"
    | "CDF"
    | "CHE"
    | "CHF"
    | "CHW"
    | "CLF"
    | "CLP"
    | "CNH"
    | "CNT"
    | "CNY"
    | "COP"
    | "COU"
    | "CRC"
    | "CUC"
    | "CUP"
    | "CVE"
    | "CYP"
    | "CZK"
    | "DEM"
    | "DJF"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EEK"
    | "EGP"
    | "ERN"
    | "ESP"
    | "ETB"
    | "EUR"
    | "FIM"
    | "FJD"
    | "FKP"
    | "FRF"
    | "GBP"
    | "GEL"
    | "GGP"
    | "GHS"
    | "GIP"
    | "GMD"
    | "GNF"
    | "GRD"
    | "GTQ"
    | "GYD"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HTG"
    | "HUF"
    | "IDR"
    | "IEP"
    | "ILS"
    | "IMP"
    | "INR"
    | "IQD"
    | "IRR"
    | "ISK"
    | "ITL"
    | "JEP"
    | "JMD"
    | "JOD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KHR"
    | "KID"
    | "KMF"
    | "KPW"
    | "KRW"
    | "KWD"
    | "KYD"
    | "KZT"
    | "LAK"
    | "LBP"
    | "LKR"
    | "LRD"
    | "LSL"
    | "LTL"
    | "LUF"
    | "LVL"
    | "LYD"
    | "MAD"
    | "MDL"
    | "MGA"
    | "MKD"
    | "MMK"
    | "MNT"
    | "MOP"
    | "MRO"
    | "MTL"
    | "MUR"
    | "MVR"
    | "MWK"
    | "MXN"
    | "MXV"
    | "MYR"
    | "MZN"
    | "NAD"
    | "NGN"
    | "NIO"
    | "NIS"
    | "NLG"
    | "NOK"
    | "NPR"
    | "NTD"
    | "NZD"
    | "OMR"
    | "PAB"
    | "PEN"
    | "PGK"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PRB"
    | "PTE"
    | "PYG"
    | "QAR"
    | "RMB"
    | "RON"
    | "RSD"
    | "RUB"
    | "RWF"
    | "SAR"
    | "SBD"
    | "SCR"
    | "SDG"
    | "SEK"
    | "SGD"
    | "SHP"
    | "SIT"
    | "SKK"
    | "SLL"
    | "SLS"
    | "SOS"
    | "SRD"
    | "SSP"
    | "STN"
    | "SVC"
    | "SYP"
    | "SZL"
    | "THB"
    | "TJS"
    | "TMT"
    | "TND"
    | "TOP"
    | "TRY"
    | "TTD"
    | "TVD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "USN"
    | "UYI"
    | "UYU"
    | "UYW"
    | "UZS"
    | "VES"
    | "VND"
    | "VUV"
    | "WST"
    | "XAF"
    | "XAG"
    | "XAU"
    | "XBA"
    | "XBB"
    | "XBC"
    | "XBD"
    | "XCD"
    | "XDR"
    | "XOF"
    | "XPD"
    | "XPF"
    | "XPT"
    | "XSU"
    | "XTS"
    | "XUA"
    | "XXX"
    | "YER"
    | "ZAR"
    | "ZMW"
    | "ZWB"
    | "ZWL";
  /**
   * Number of deposits during the bank statement period.
   * @format int32
   */
  numberOfDeposits?: number;
  /** Sum of the deposits. */
  depositSum?: number;
  /**
   * Number of withdrawals during the bank statement period.
   * @format int32
   */
  numberOfWithdrawals?: number;
  /** Sum of the withdrawals. */
  withdrawalSum?: number;
  /** Start balance of the account before this bank statement. */
  startBalance?: number;
  /** End balance of the account after this bank statement. */
  endBalance?: number;
  /**
   * Number of bank statement.
   * @format int32
   */
  statementNumber?: number;
  /** List of bank statement events. Events can be nested. */
  events?: BankStatementEvent[];
}

/** List of bank statement events. Events can be nested. */
export interface BankStatementEvent {
  /**
   * Unique identifier of the bank statement event.
   * @format int32
   */
  id?: number;
  /**
   * Date when the payment was paid by the payer in his/her own bank.
   * @format date
   */
  payDate?: string;
  /**
   * Date when the event was registered in the counterpart bank.
   * @format date
   */
  valueDate?: string;
  /** Sum of the bank statement event in the currency of the bank statement this event belongs to. */
  sum?: number;
  /** Account number of the counterparty. */
  accountNumber?: string;
  /** Name of the counterparty. */
  name?: string;
  /**
   * Explanation code of the event. Explanation code describes the type of the event.
   * @format int32
   */
  explanationCode?: number;
  /** Archive code of the event. Archive codes are unique in one bank but two events from different banks can share the same archive code. */
  archiveCode?: string;
  /** Message of the event. */
  message?: string;
  /** Reference of the event. */
  reference?: string;
  /** Is the event allocated to an invoice. If it is, the event must also have an invoice ID. */
  allocated?: boolean;
  /**
   * Unique identifier of the invoice linked to the event.
   * @format int32
   */
  invoiceId?: number;
  /**
   * ID of the product allocated to the bank statement event.
   * @format int64
   */
  productId?: number;
  /**
   * Unique identifier of the payment.
   * @format int32
   */
  endToEndId?: number;
  /** List of attachments added to the event. */
  attachments?: Attachment[];
  /** Metadata allocations for the bank statement event. */
  allocationMetadataRows?: AllocationMetadataWithFullLedgerAccountDataRow[];
}

export interface BankStatementsSearchResult {
  /** Search results. */
  results?: BankStatement[];
  /** Search result metadata. */
  meta?: SearchResultMetaData;
}

/** Basic invoicing information. */
export interface BasicInvoicingInfo {
  /** Customer number of the partner. */
  customerNumber?: string;
  /** Identifier of the partner. */
  identifier?: string;
  /** Identifier type of the partner. */
  identifierType?: string;
}

/** Search results. */
export interface BasicPaymentTransactionData {
  /**
   * Unique payment identifier.
   * @format int32
   */
  id?: number;
  /**
   * Unique invoice identifier.
   * @format int32
   */
  invoiceId?: number;
  /**
   * Date specifying when the payment transaction has to be performed.
   * @format date
   */
  paymentDate?: string;
  /** The amount of the payment in the given currency. Currency is defined within the invoice. */
  amount?: number;
  /** Recipient name. */
  receiverName?: string;
  /** Payment status. */
  status?:
    | "APPROVED"
    | "DELETED"
    | "EMPTY"
    | "INVALIDATED"
    | "INVOICED"
    | "MARKED_PAID"
    | "NOT_SENT"
    | "OVERRIDDEN"
    | "PAID"
    | "PARTLY_PAID"
    | "PAYMENT_DENIED"
    | "PAYMENT_QUEUED"
    | "PAYMENT_SENT_TO_BANK"
    | "PAYMENT_TRANSACTION_REMOVED"
    | "RECEIVED"
    | "SENT"
    | "STARTED"
    | "UNFINISHED"
    | "UNSAVED"
    | "VERIFIED";
  /** If not provided, for Finnish foreign payment it will be automatically set to BOTH_PAY_OWN_FEES. */
  serviceCharge?: "BOTH_PAY_OWN_FEES" | "PAYER_PAY_BOTH_FEES";
}

/** Registry info data of the partner. */
export interface BasicRegistryInfo {
  /** Status of the partner. */
  active?: boolean;
}

/** Company identifier of current company. */
export interface BusinessIdentifier {
  /**
   * Business Registration Number (BRN) type of current company identifier. (example values: HETU, SSN, FI, NO,...)
   * @example "HETU"
   */
  brnType?: "ASSN" | "DK" | "FI" | "HETU" | "NO" | "PN" | "SE" | "SSN" | "YHD";
  /**
   * Business Registration Number (BRN) code (Example value: '1234567-8', basically BRN without type prefix).
   * @minLength 0
   * @maxLength 25
   * @example "1234567-8"
   */
  code?: string;
}

export interface BusinessPartner {
  /**
   * Unique identifier of the partner.
   * @format int32
   */
  id?: number;
  /**
   * Name of the partner.
   * @minLength 1
   * @maxLength 80
   */
  name: string;
  /** Type of the partner. */
  type: "CUSTOMER" | "SUPPLIER" | "PERSON";
  /** Address of the partner. Required for customer */
  address?: BusinessPartnerAddress;
  /** Billing address of the partner. */
  billingAddress?: BusinessPartnerBillingAddress;
  /** Delivery address of the partner. */
  deliveryAddress?: BusinessPartnerDeliveryAddress;
  /** Invoicing info data of the partner. */
  invoicingInfo?: InvoicingInfo;
  /** List of attachments added to the business partner. */
  attachments?: Attachment[];
  /** Contact persons of the partner. */
  contactPersons?: BusinessPartnerContactPerson[];
  /** Additional info of the partner. */
  additionalInfo?: BusinessPartnerAdditionalInfo;
  /** Payment info of the partner. */
  paymentInfo: BusinessPartnerPaymentInfo;
  /** Registry info data of the partner. */
  registryInfo?: RegistryInfo;
  /**
   * Business partner version timestamp. Automatically generated by Procountor and updated every time the partner is modified. When using PATCH /businesspartners, it is required to include the latest version timestamp of the partner to the request. This prevents conflicts if the partner is being modified from several sources.It is not required for POST and will be omitted
   * @format date-time
   */
  version?: string;
}

/** Default account of the given type. */
export interface BusinessPartnerAccount {
  /** Code of the account. */
  code?: string;
  /** Name of the account. */
  name?: string;
}

/** Default accounts for the given invoice type. */
export interface BusinessPartnerAccountsInfo {
  /** Default account of the given type. */
  debitAccount?: BusinessPartnerAccount;
  /** Default account of the given type. */
  creditAccount?: BusinessPartnerAccount;
  /** Default account of the given type. */
  reconciliationAccount?: BusinessPartnerAccount;
}

/** Additional info of the partner. */
export interface BusinessPartnerAdditionalInfo {
  /**
   * Default additional information of the partner.
   * @minLength 0
   * @maxLength 500
   */
  defaultAdditionalInformation?: string;
  /** Default reference of the partner. */
  defaultReference?: string;
  /**
   * Group.
   * @minLength 0
   * @maxLength 80
   */
  group?: string;
  /** Company ID of the partner. If provided partnerCompanyId will be validated according to the type. */
  parentCompanyIdType?:
    | ""
    | "HETU"
    | "YHD"
    | "PN"
    | "NO"
    | "AT"
    | "BE"
    | "BG"
    | "CY"
    | "HR"
    | "CZ"
    | "DK"
    | "EE"
    | "FI"
    | "FR"
    | "DE"
    | "GB"
    | "EL"
    | "HU"
    | "IE"
    | "IT"
    | "LV"
    | "LT"
    | "LU"
    | "MT"
    | "NL"
    | "PL"
    | "PT"
    | "RO"
    | "SK"
    | "SI"
    | "ES"
    | "SE";
  /**
   * Parent company ID of the partner.
   * @minLength 0
   * @maxLength 20
   */
  parentCompanyId?: string;
  /**
   * Auxiliary company name.
   * @minLength 0
   * @maxLength 80
   */
  auxiliaryCompanyName?: string;
  /**
   * Former company name of the partner.
   * @minLength 0
   * @maxLength 80
   */
  formerCompanyName?: string;
  /**
   * Sector of the partner.
   * @minLength 0
   * @maxLength 80
   */
  sector?: string;
  /**
   * Web address of the partner.
   * @minLength 0
   * @maxLength 100
   */
  webAddress?: string;
  /**
   * First comment
   * @minLength 0
   * @maxLength 100
   */
  comments1?: string;
  /**
   * Second comment
   * @minLength 0
   * @maxLength 100
   */
  comments2?: string;
  /**
   * Invoice period of the partner.
   * @minLength 0
   * @maxLength 40
   */
  invoicePeriod?: string;
  /**
   * Withholding register marking of the partner.
   * @minLength 0
   * @maxLength 20
   */
  withholdingRegisterMarking?: string;
  /**
   * Invoice ledger of the partner. If not provided, it will be automatically set to INVOICE_LEDGER.
   * @default "INVOICE_LEDGER"
   */
  invoiceLedger?: "CLEARING" | "INVOICE_LEDGER";
}

/** Address of the partner. Required for customer */
export interface BusinessPartnerAddress {
  /**
   * Name ("first line") in the address.
   * @minLength 0
   * @maxLength 80
   */
  name: string;
  /**
   * Specifier, such as c/o address.
   * @minLength 0
   * @maxLength 80
   */
  specifier?: string;
  /**
   * Street. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 80
   */
  street?: string;
  /**
   * Zip code. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 20
   */
  zip?: string;
  /**
   * City. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 40
   */
  city?: string;
  /**
   * Country.
   * @example "SWEDEN"
   */
  country?:
    | "AFGHANISTAN"
    | "ALAND_ISLANDS"
    | "ALBANIA"
    | "ALGERIA"
    | "AMERICAN_SAMOA"
    | "ANDORRA"
    | "ANGOLA"
    | "ANGUILLA"
    | "ANTARCTICA"
    | "ANTIGUA_AND_BARBUDA"
    | "ARGENTINA"
    | "ARMENIA"
    | "ARUBA"
    | "ASCENSION_AND_TRISTAN_DA_CUNHA_SAINT_HELENA"
    | "AUSTRALIA"
    | "AUSTRIA"
    | "AZERBAIJAN"
    | "BAHAMAS"
    | "BAHRAIN"
    | "BANGLADESH"
    | "BARBADOS"
    | "BELARUS"
    | "BELGIUM"
    | "BELIZE"
    | "BENIN"
    | "BERMUDA"
    | "BHUTAN"
    | "BOLIVARIAN_REPUBLIC_OF_VENEZUELA"
    | "BOSNIA_AND_HERZEGOVINA"
    | "BOTSWANA"
    | "BOUVET_ISLAND"
    | "BRAZIL"
    | "BRITISH_INDIAN_OCEAN_TERRITORY"
    | "BRITISH_VIRGIN_ISLANDS"
    | "BRUNEI_DARUSSALAM"
    | "BULGARIA"
    | "BURKINA_FASO"
    | "BURUNDI"
    | "CABO_VERDE"
    | "CAMBODIA"
    | "CAMEROON"
    | "CANADA"
    | "CAYMAN_ISLANDS"
    | "CENTRAL_AFRICAN_REPUBLIC"
    | "CHAD"
    | "CHILE"
    | "CHINA"
    | "CHRISTMAS_ISLAND"
    | "COCOS_KEELING_ISLANDS"
    | "COLOMBIA"
    | "COMOROS"
    | "CONGO"
    | "COOK_ISLANDS"
    | "COSTA_RICA"
    | "COTE_D_IVOIRE"
    | "CROATIA"
    | "CUBA"
    | "CURACAO"
    | "CYPRUS"
    | "CZECH_REPUBLIC"
    | "DEMOCRATIC_PEOPLE_S_REPUBLIC_OF_KOREA"
    | "DENMARK"
    | "DJIBOUTI"
    | "DOMINICA"
    | "DOMINICAN_REPUBLIC"
    | "ECUADOR"
    | "EGYPT"
    | "EL_SALVADOR"
    | "EQUATORIAL_GUINEA"
    | "ERITREA"
    | "ESTONIA"
    | "ETHIOPIA"
    | "FALKLAND_ISLANDS_MALVINAS"
    | "FAROE_ISLANDS"
    | "FEDERATED_STATES_OF_MICRONESIA"
    | "FIJI"
    | "FINLAND"
    | "FRANCE"
    | "FRENCH_GUIANA"
    | "FRENCH_POLYNESIA"
    | "FRENCH_SOUTHERN_TERRITORIES"
    | "GABON"
    | "GAMBIA"
    | "GEORGIA"
    | "GERMANY"
    | "GHANA"
    | "GIBRALTAR"
    | "GREECE"
    | "GREENLAND"
    | "GRENADA"
    | "GUADELOUPE"
    | "GUAM"
    | "GUATEMALA"
    | "GUERNSEY"
    | "GUINEA"
    | "GUINEA_BISSAU"
    | "GUYANA"
    | "HAITI"
    | "HEARD_ISLAND_AND_MCDONALD_ISLANDS"
    | "HOLY_SEE_VATICAN_CITY_STATE"
    | "HONDURAS"
    | "HONG_KONG"
    | "HUNGARY"
    | "ICELAND"
    | "INDIA"
    | "INDONESIA"
    | "IRAQ"
    | "IRELAND"
    | "ISLAMIC_REPUBLIC_OF_IRAN"
    | "ISLE_OF_MAN"
    | "ISRAEL"
    | "ITALY"
    | "JAMAICA"
    | "JAPAN"
    | "JERSEY"
    | "JORDAN"
    | "KAZAKHSTAN"
    | "KENYA"
    | "KIRIBATI"
    | "KOSOVO_TEMPORARY"
    | "KUWAIT"
    | "KYRGYZSTAN"
    | "LAO_PEOPLE_S_DEMOCRATIC_REPUBLIC"
    | "LATVIA"
    | "LEBANON"
    | "LESOTHO"
    | "LIBERIA"
    | "LIBYA"
    | "LIECHTENSTEIN"
    | "LITHUANIA"
    | "LUXEMBOURG"
    | "MACAO"
    | "MADAGASCAR"
    | "MALAWI"
    | "MALAYSIA"
    | "MALDIVES"
    | "MALI"
    | "MALTA"
    | "MARSHALL_ISLANDS"
    | "MARTINIQUE"
    | "MAURITANIA"
    | "MAURITIUS"
    | "MAYOTTE"
    | "MEXICO"
    | "MONACO"
    | "MONGOLIA"
    | "MONTENEGRO"
    | "MONTSERRAT"
    | "MOROCCO"
    | "MOZAMBIQUE"
    | "MYANMAR"
    | "NAMIBIA"
    | "NAURU"
    | "NEPAL"
    | "NETHERLANDS"
    | "NEW_CALEDONIA"
    | "NEW_ZEALAND"
    | "NICARAGUA"
    | "NIGER"
    | "NIGERIA"
    | "NIUE"
    | "NORFOLK_ISLAND"
    | "NORTHERN_IRELAND_TEMPORARY"
    | "NORTHERN_MARIANA_ISLANDS"
    | "NORWAY"
    | "OMAN"
    | "PAKISTAN"
    | "PALAU"
    | "PANAMA"
    | "PAPUA_NEW_GUINEA"
    | "PARAGUAY"
    | "PERU"
    | "PHILIPPINES"
    | "PITCAIRN"
    | "PLURINATIONAL_STATE_OF_BOLIVIA"
    | "POLAND"
    | "PORTUGAL"
    | "PROVINCE_OF_CHINA_TAIWAN"
    | "PUERTO_RICO"
    | "QATAR"
    | "REPUBLIC_OF_KOREA"
    | "REPUBLIC_OF_MOLDOVA"
    | "REUNION"
    | "ROMANIA"
    | "RUSSIAN_FEDERATION"
    | "RWANDA"
    | "SAINT_BARTHELEMY"
    | "SAINT_KITTS_AND_NEVIS"
    | "SAINT_LUCIA"
    | "SAINT_MARTIN_FRENCH_PART"
    | "SAINT_PIERRE_AND_MIQUELON"
    | "SAINT_VINCENT_AND_THE_GRENADINES"
    | "SAMOA"
    | "SAN_MARINO"
    | "SAO_TOME_AND_PRINCIPE"
    | "SAUDI_ARABIA"
    | "SENEGAL"
    | "SERBIA"
    | "SEYCHELLES"
    | "SIERRA_LEONE"
    | "SINGAPORE"
    | "SINT_EUSTATIUS_AND_SABA_BONAIRE"
    | "SINT_MAARTEN_DUTCH_PART"
    | "SLOVAKIA"
    | "SLOVENIA"
    | "SOLOMON_ISLANDS"
    | "SOMALIA"
    | "SOUTH_AFRICA"
    | "SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS"
    | "SOUTH_SUDAN"
    | "SPAIN"
    | "SRI_LANKA"
    | "STATE_OF_PALESTINE"
    | "SUDAN"
    | "SURINAME"
    | "SVALBARD_AND_JAN_MAYEN"
    | "SWAZILAND"
    | "SWEDEN"
    | "SWITZERLAND"
    | "SYRIAN_ARAB_REPUBLIC"
    | "TAJIKISTAN"
    | "THAILAND"
    | "THE_DEMOCRATIC_REPUBLIC_OF_THE_CONGO"
    | "THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA"
    | "TIMOR_LESTE"
    | "TOGO"
    | "TOKELAU"
    | "TONGA"
    | "TRINIDAD_AND_TOBAGO"
    | "TUNISIA"
    | "TURKEY"
    | "TURKMENISTAN"
    | "TURKS_AND_CAICOS_ISLANDS"
    | "TUVALU"
    | "UGANDA"
    | "UKRAINE"
    | "UNITED_ARAB_EMIRATES"
    | "UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND"
    | "UNITED_REPUBLIC_OF_TANZANIA"
    | "UNITED_STATES_MINOR_OUTLYING_ISLANDS"
    | "UNITED_STATES_OF_AMERICA"
    | "URUGUAY"
    | "UZBEKISTAN"
    | "U_S_VIRGIN_ISLANDS"
    | "VANUATU"
    | "VIET_NAM"
    | "WALLIS_AND_FUTUNA"
    | "WESTERN_SAHARA"
    | "YEMEN"
    | "ZAMBIA"
    | "ZIMBABWE";
  /**
   * Subdivision of the city
   * @minLength 0
   * @maxLength 35
   */
  subdivision?: string;
}

/** Search results. */
export interface BusinessPartnerBasicInfo {
  /**
   * Unique identifier for the partner.
   * @format int32
   */
  id?: number;
  /** Name of the partner */
  name?: string;
  /** Billing address of the partner. */
  billingAddress?: BusinessPartnerBillingAddress;
  /** Basic invoicing information. */
  invoicingInfo?: BasicInvoicingInfo;
  /** Registry info data of the partner. */
  registryInfo?: BasicRegistryInfo;
  /** Type of the partner. */
  type?: "CUSTOMER" | "SUPPLIER" | "PERSON";
  /**
   * Business partner version timestamp. Automatically generated by Procountor and updated every time the partner is modified. When using PATCH /businesspartners, it is required to include the latest version timestamp of the partner to the request. This prevents conflicts if the partner is being modified from several sources.It is not required for POST and will be omitted
   * @format date-time
   */
  version?: string;
}

/** Billing address of the partner. */
export interface BusinessPartnerBillingAddress {
  /**
   * Name ("first line") in the address.
   * @minLength 0
   * @maxLength 80
   */
  name: string;
  /**
   * Specifier, such as c/o address.
   * @minLength 0
   * @maxLength 80
   */
  specifier?: string;
  /**
   * Street. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 80
   */
  street?: string;
  /**
   * Zip code. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 20
   */
  zip?: string;
  /**
   * City. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 40
   */
  city?: string;
  /**
   * Country.
   * @example "SWEDEN"
   */
  country?:
    | "AFGHANISTAN"
    | "ALAND_ISLANDS"
    | "ALBANIA"
    | "ALGERIA"
    | "AMERICAN_SAMOA"
    | "ANDORRA"
    | "ANGOLA"
    | "ANGUILLA"
    | "ANTARCTICA"
    | "ANTIGUA_AND_BARBUDA"
    | "ARGENTINA"
    | "ARMENIA"
    | "ARUBA"
    | "ASCENSION_AND_TRISTAN_DA_CUNHA_SAINT_HELENA"
    | "AUSTRALIA"
    | "AUSTRIA"
    | "AZERBAIJAN"
    | "BAHAMAS"
    | "BAHRAIN"
    | "BANGLADESH"
    | "BARBADOS"
    | "BELARUS"
    | "BELGIUM"
    | "BELIZE"
    | "BENIN"
    | "BERMUDA"
    | "BHUTAN"
    | "BOLIVARIAN_REPUBLIC_OF_VENEZUELA"
    | "BOSNIA_AND_HERZEGOVINA"
    | "BOTSWANA"
    | "BOUVET_ISLAND"
    | "BRAZIL"
    | "BRITISH_INDIAN_OCEAN_TERRITORY"
    | "BRITISH_VIRGIN_ISLANDS"
    | "BRUNEI_DARUSSALAM"
    | "BULGARIA"
    | "BURKINA_FASO"
    | "BURUNDI"
    | "CABO_VERDE"
    | "CAMBODIA"
    | "CAMEROON"
    | "CANADA"
    | "CAYMAN_ISLANDS"
    | "CENTRAL_AFRICAN_REPUBLIC"
    | "CHAD"
    | "CHILE"
    | "CHINA"
    | "CHRISTMAS_ISLAND"
    | "COCOS_KEELING_ISLANDS"
    | "COLOMBIA"
    | "COMOROS"
    | "CONGO"
    | "COOK_ISLANDS"
    | "COSTA_RICA"
    | "COTE_D_IVOIRE"
    | "CROATIA"
    | "CUBA"
    | "CURACAO"
    | "CYPRUS"
    | "CZECH_REPUBLIC"
    | "DEMOCRATIC_PEOPLE_S_REPUBLIC_OF_KOREA"
    | "DENMARK"
    | "DJIBOUTI"
    | "DOMINICA"
    | "DOMINICAN_REPUBLIC"
    | "ECUADOR"
    | "EGYPT"
    | "EL_SALVADOR"
    | "EQUATORIAL_GUINEA"
    | "ERITREA"
    | "ESTONIA"
    | "ETHIOPIA"
    | "FALKLAND_ISLANDS_MALVINAS"
    | "FAROE_ISLANDS"
    | "FEDERATED_STATES_OF_MICRONESIA"
    | "FIJI"
    | "FINLAND"
    | "FRANCE"
    | "FRENCH_GUIANA"
    | "FRENCH_POLYNESIA"
    | "FRENCH_SOUTHERN_TERRITORIES"
    | "GABON"
    | "GAMBIA"
    | "GEORGIA"
    | "GERMANY"
    | "GHANA"
    | "GIBRALTAR"
    | "GREECE"
    | "GREENLAND"
    | "GRENADA"
    | "GUADELOUPE"
    | "GUAM"
    | "GUATEMALA"
    | "GUERNSEY"
    | "GUINEA"
    | "GUINEA_BISSAU"
    | "GUYANA"
    | "HAITI"
    | "HEARD_ISLAND_AND_MCDONALD_ISLANDS"
    | "HOLY_SEE_VATICAN_CITY_STATE"
    | "HONDURAS"
    | "HONG_KONG"
    | "HUNGARY"
    | "ICELAND"
    | "INDIA"
    | "INDONESIA"
    | "IRAQ"
    | "IRELAND"
    | "ISLAMIC_REPUBLIC_OF_IRAN"
    | "ISLE_OF_MAN"
    | "ISRAEL"
    | "ITALY"
    | "JAMAICA"
    | "JAPAN"
    | "JERSEY"
    | "JORDAN"
    | "KAZAKHSTAN"
    | "KENYA"
    | "KIRIBATI"
    | "KOSOVO_TEMPORARY"
    | "KUWAIT"
    | "KYRGYZSTAN"
    | "LAO_PEOPLE_S_DEMOCRATIC_REPUBLIC"
    | "LATVIA"
    | "LEBANON"
    | "LESOTHO"
    | "LIBERIA"
    | "LIBYA"
    | "LIECHTENSTEIN"
    | "LITHUANIA"
    | "LUXEMBOURG"
    | "MACAO"
    | "MADAGASCAR"
    | "MALAWI"
    | "MALAYSIA"
    | "MALDIVES"
    | "MALI"
    | "MALTA"
    | "MARSHALL_ISLANDS"
    | "MARTINIQUE"
    | "MAURITANIA"
    | "MAURITIUS"
    | "MAYOTTE"
    | "MEXICO"
    | "MONACO"
    | "MONGOLIA"
    | "MONTENEGRO"
    | "MONTSERRAT"
    | "MOROCCO"
    | "MOZAMBIQUE"
    | "MYANMAR"
    | "NAMIBIA"
    | "NAURU"
    | "NEPAL"
    | "NETHERLANDS"
    | "NEW_CALEDONIA"
    | "NEW_ZEALAND"
    | "NICARAGUA"
    | "NIGER"
    | "NIGERIA"
    | "NIUE"
    | "NORFOLK_ISLAND"
    | "NORTHERN_IRELAND_TEMPORARY"
    | "NORTHERN_MARIANA_ISLANDS"
    | "NORWAY"
    | "OMAN"
    | "PAKISTAN"
    | "PALAU"
    | "PANAMA"
    | "PAPUA_NEW_GUINEA"
    | "PARAGUAY"
    | "PERU"
    | "PHILIPPINES"
    | "PITCAIRN"
    | "PLURINATIONAL_STATE_OF_BOLIVIA"
    | "POLAND"
    | "PORTUGAL"
    | "PROVINCE_OF_CHINA_TAIWAN"
    | "PUERTO_RICO"
    | "QATAR"
    | "REPUBLIC_OF_KOREA"
    | "REPUBLIC_OF_MOLDOVA"
    | "REUNION"
    | "ROMANIA"
    | "RUSSIAN_FEDERATION"
    | "RWANDA"
    | "SAINT_BARTHELEMY"
    | "SAINT_KITTS_AND_NEVIS"
    | "SAINT_LUCIA"
    | "SAINT_MARTIN_FRENCH_PART"
    | "SAINT_PIERRE_AND_MIQUELON"
    | "SAINT_VINCENT_AND_THE_GRENADINES"
    | "SAMOA"
    | "SAN_MARINO"
    | "SAO_TOME_AND_PRINCIPE"
    | "SAUDI_ARABIA"
    | "SENEGAL"
    | "SERBIA"
    | "SEYCHELLES"
    | "SIERRA_LEONE"
    | "SINGAPORE"
    | "SINT_EUSTATIUS_AND_SABA_BONAIRE"
    | "SINT_MAARTEN_DUTCH_PART"
    | "SLOVAKIA"
    | "SLOVENIA"
    | "SOLOMON_ISLANDS"
    | "SOMALIA"
    | "SOUTH_AFRICA"
    | "SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS"
    | "SOUTH_SUDAN"
    | "SPAIN"
    | "SRI_LANKA"
    | "STATE_OF_PALESTINE"
    | "SUDAN"
    | "SURINAME"
    | "SVALBARD_AND_JAN_MAYEN"
    | "SWAZILAND"
    | "SWEDEN"
    | "SWITZERLAND"
    | "SYRIAN_ARAB_REPUBLIC"
    | "TAJIKISTAN"
    | "THAILAND"
    | "THE_DEMOCRATIC_REPUBLIC_OF_THE_CONGO"
    | "THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA"
    | "TIMOR_LESTE"
    | "TOGO"
    | "TOKELAU"
    | "TONGA"
    | "TRINIDAD_AND_TOBAGO"
    | "TUNISIA"
    | "TURKEY"
    | "TURKMENISTAN"
    | "TURKS_AND_CAICOS_ISLANDS"
    | "TUVALU"
    | "UGANDA"
    | "UKRAINE"
    | "UNITED_ARAB_EMIRATES"
    | "UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND"
    | "UNITED_REPUBLIC_OF_TANZANIA"
    | "UNITED_STATES_MINOR_OUTLYING_ISLANDS"
    | "UNITED_STATES_OF_AMERICA"
    | "URUGUAY"
    | "UZBEKISTAN"
    | "U_S_VIRGIN_ISLANDS"
    | "VANUATU"
    | "VIET_NAM"
    | "WALLIS_AND_FUTUNA"
    | "WESTERN_SAHARA"
    | "YEMEN"
    | "ZAMBIA"
    | "ZIMBABWE";
  /**
   * Subdivision of the city
   * @minLength 0
   * @maxLength 35
   */
  subdivision?: string;
}

/** Contact persons of the partner. */
export interface BusinessPartnerContactPerson {
  /**
   * Contact person ID.
   * @format int32
   */
  id?: number;
  /**
   * Name of contact person.
   * @minLength 0
   * @maxLength 80
   */
  name?: string;
  /**
   * Email of contact person.
   * @format email
   * @minLength 0
   * @maxLength 80
   */
  email?: string;
  /**
   * Phone of contact person.
   * @minLength 0
   * @maxLength 40
   */
  phone?: string;
}

export interface BusinessPartnerDefaultAccounts {
  /** Default VAT %. */
  vatPercent?: number;
  /** Default VAT deduction %. */
  vatDeduction?: number;
  /**
   * VAT status.
   * @format int32
   */
  vatStatus?: number;
  /** VAT processing. */
  vatProcessing?: string;
  /** Incoming invoice parsing. If true always combine the invoice rows of an incoming invoice into one summary row using product 'Invoicing according to attachment'. */
  combineInvoiceRows?: boolean;
  /** Default accounts for the given invoice type. */
  salesInvoiceAccounts?: BusinessPartnerAccountsInfo;
  /** Default accounts for the given invoice type. */
  purchaseInvoiceAccounts?: BusinessPartnerAccountsInfo;
  /** Default accounts for the given invoice type. */
  travelInvoiceAccounts?: BusinessPartnerAccountsInfo;
  /** Default accounts for the given invoice type. */
  expenseClaimAccounts?: BusinessPartnerAccountsInfo;
  /** Default accounts for the given invoice type. */
  journalAccounts?: BusinessPartnerAccountsInfo;
}

/** Delivery address of the partner. */
export interface BusinessPartnerDeliveryAddress {
  /**
   * Name ("first line") in the address.
   * @minLength 0
   * @maxLength 80
   */
  name: string;
  /**
   * Specifier, such as c/o address.
   * @minLength 0
   * @maxLength 80
   */
  specifier?: string;
  /**
   * Street. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 80
   */
  street?: string;
  /**
   * Zip code. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 20
   */
  zip?: string;
  /**
   * City. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 40
   */
  city?: string;
  /**
   * Country.
   * @example "SWEDEN"
   */
  country?:
    | "AFGHANISTAN"
    | "ALAND_ISLANDS"
    | "ALBANIA"
    | "ALGERIA"
    | "AMERICAN_SAMOA"
    | "ANDORRA"
    | "ANGOLA"
    | "ANGUILLA"
    | "ANTARCTICA"
    | "ANTIGUA_AND_BARBUDA"
    | "ARGENTINA"
    | "ARMENIA"
    | "ARUBA"
    | "ASCENSION_AND_TRISTAN_DA_CUNHA_SAINT_HELENA"
    | "AUSTRALIA"
    | "AUSTRIA"
    | "AZERBAIJAN"
    | "BAHAMAS"
    | "BAHRAIN"
    | "BANGLADESH"
    | "BARBADOS"
    | "BELARUS"
    | "BELGIUM"
    | "BELIZE"
    | "BENIN"
    | "BERMUDA"
    | "BHUTAN"
    | "BOLIVARIAN_REPUBLIC_OF_VENEZUELA"
    | "BOSNIA_AND_HERZEGOVINA"
    | "BOTSWANA"
    | "BOUVET_ISLAND"
    | "BRAZIL"
    | "BRITISH_INDIAN_OCEAN_TERRITORY"
    | "BRITISH_VIRGIN_ISLANDS"
    | "BRUNEI_DARUSSALAM"
    | "BULGARIA"
    | "BURKINA_FASO"
    | "BURUNDI"
    | "CABO_VERDE"
    | "CAMBODIA"
    | "CAMEROON"
    | "CANADA"
    | "CAYMAN_ISLANDS"
    | "CENTRAL_AFRICAN_REPUBLIC"
    | "CHAD"
    | "CHILE"
    | "CHINA"
    | "CHRISTMAS_ISLAND"
    | "COCOS_KEELING_ISLANDS"
    | "COLOMBIA"
    | "COMOROS"
    | "CONGO"
    | "COOK_ISLANDS"
    | "COSTA_RICA"
    | "COTE_D_IVOIRE"
    | "CROATIA"
    | "CUBA"
    | "CURACAO"
    | "CYPRUS"
    | "CZECH_REPUBLIC"
    | "DEMOCRATIC_PEOPLE_S_REPUBLIC_OF_KOREA"
    | "DENMARK"
    | "DJIBOUTI"
    | "DOMINICA"
    | "DOMINICAN_REPUBLIC"
    | "ECUADOR"
    | "EGYPT"
    | "EL_SALVADOR"
    | "EQUATORIAL_GUINEA"
    | "ERITREA"
    | "ESTONIA"
    | "ETHIOPIA"
    | "FALKLAND_ISLANDS_MALVINAS"
    | "FAROE_ISLANDS"
    | "FEDERATED_STATES_OF_MICRONESIA"
    | "FIJI"
    | "FINLAND"
    | "FRANCE"
    | "FRENCH_GUIANA"
    | "FRENCH_POLYNESIA"
    | "FRENCH_SOUTHERN_TERRITORIES"
    | "GABON"
    | "GAMBIA"
    | "GEORGIA"
    | "GERMANY"
    | "GHANA"
    | "GIBRALTAR"
    | "GREECE"
    | "GREENLAND"
    | "GRENADA"
    | "GUADELOUPE"
    | "GUAM"
    | "GUATEMALA"
    | "GUERNSEY"
    | "GUINEA"
    | "GUINEA_BISSAU"
    | "GUYANA"
    | "HAITI"
    | "HEARD_ISLAND_AND_MCDONALD_ISLANDS"
    | "HOLY_SEE_VATICAN_CITY_STATE"
    | "HONDURAS"
    | "HONG_KONG"
    | "HUNGARY"
    | "ICELAND"
    | "INDIA"
    | "INDONESIA"
    | "IRAQ"
    | "IRELAND"
    | "ISLAMIC_REPUBLIC_OF_IRAN"
    | "ISLE_OF_MAN"
    | "ISRAEL"
    | "ITALY"
    | "JAMAICA"
    | "JAPAN"
    | "JERSEY"
    | "JORDAN"
    | "KAZAKHSTAN"
    | "KENYA"
    | "KIRIBATI"
    | "KOSOVO_TEMPORARY"
    | "KUWAIT"
    | "KYRGYZSTAN"
    | "LAO_PEOPLE_S_DEMOCRATIC_REPUBLIC"
    | "LATVIA"
    | "LEBANON"
    | "LESOTHO"
    | "LIBERIA"
    | "LIBYA"
    | "LIECHTENSTEIN"
    | "LITHUANIA"
    | "LUXEMBOURG"
    | "MACAO"
    | "MADAGASCAR"
    | "MALAWI"
    | "MALAYSIA"
    | "MALDIVES"
    | "MALI"
    | "MALTA"
    | "MARSHALL_ISLANDS"
    | "MARTINIQUE"
    | "MAURITANIA"
    | "MAURITIUS"
    | "MAYOTTE"
    | "MEXICO"
    | "MONACO"
    | "MONGOLIA"
    | "MONTENEGRO"
    | "MONTSERRAT"
    | "MOROCCO"
    | "MOZAMBIQUE"
    | "MYANMAR"
    | "NAMIBIA"
    | "NAURU"
    | "NEPAL"
    | "NETHERLANDS"
    | "NEW_CALEDONIA"
    | "NEW_ZEALAND"
    | "NICARAGUA"
    | "NIGER"
    | "NIGERIA"
    | "NIUE"
    | "NORFOLK_ISLAND"
    | "NORTHERN_IRELAND_TEMPORARY"
    | "NORTHERN_MARIANA_ISLANDS"
    | "NORWAY"
    | "OMAN"
    | "PAKISTAN"
    | "PALAU"
    | "PANAMA"
    | "PAPUA_NEW_GUINEA"
    | "PARAGUAY"
    | "PERU"
    | "PHILIPPINES"
    | "PITCAIRN"
    | "PLURINATIONAL_STATE_OF_BOLIVIA"
    | "POLAND"
    | "PORTUGAL"
    | "PROVINCE_OF_CHINA_TAIWAN"
    | "PUERTO_RICO"
    | "QATAR"
    | "REPUBLIC_OF_KOREA"
    | "REPUBLIC_OF_MOLDOVA"
    | "REUNION"
    | "ROMANIA"
    | "RUSSIAN_FEDERATION"
    | "RWANDA"
    | "SAINT_BARTHELEMY"
    | "SAINT_KITTS_AND_NEVIS"
    | "SAINT_LUCIA"
    | "SAINT_MARTIN_FRENCH_PART"
    | "SAINT_PIERRE_AND_MIQUELON"
    | "SAINT_VINCENT_AND_THE_GRENADINES"
    | "SAMOA"
    | "SAN_MARINO"
    | "SAO_TOME_AND_PRINCIPE"
    | "SAUDI_ARABIA"
    | "SENEGAL"
    | "SERBIA"
    | "SEYCHELLES"
    | "SIERRA_LEONE"
    | "SINGAPORE"
    | "SINT_EUSTATIUS_AND_SABA_BONAIRE"
    | "SINT_MAARTEN_DUTCH_PART"
    | "SLOVAKIA"
    | "SLOVENIA"
    | "SOLOMON_ISLANDS"
    | "SOMALIA"
    | "SOUTH_AFRICA"
    | "SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS"
    | "SOUTH_SUDAN"
    | "SPAIN"
    | "SRI_LANKA"
    | "STATE_OF_PALESTINE"
    | "SUDAN"
    | "SURINAME"
    | "SVALBARD_AND_JAN_MAYEN"
    | "SWAZILAND"
    | "SWEDEN"
    | "SWITZERLAND"
    | "SYRIAN_ARAB_REPUBLIC"
    | "TAJIKISTAN"
    | "THAILAND"
    | "THE_DEMOCRATIC_REPUBLIC_OF_THE_CONGO"
    | "THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA"
    | "TIMOR_LESTE"
    | "TOGO"
    | "TOKELAU"
    | "TONGA"
    | "TRINIDAD_AND_TOBAGO"
    | "TUNISIA"
    | "TURKEY"
    | "TURKMENISTAN"
    | "TURKS_AND_CAICOS_ISLANDS"
    | "TUVALU"
    | "UGANDA"
    | "UKRAINE"
    | "UNITED_ARAB_EMIRATES"
    | "UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND"
    | "UNITED_REPUBLIC_OF_TANZANIA"
    | "UNITED_STATES_MINOR_OUTLYING_ISLANDS"
    | "UNITED_STATES_OF_AMERICA"
    | "URUGUAY"
    | "UZBEKISTAN"
    | "U_S_VIRGIN_ISLANDS"
    | "VANUATU"
    | "VIET_NAM"
    | "WALLIS_AND_FUTUNA"
    | "WESTERN_SAHARA"
    | "YEMEN"
    | "ZAMBIA"
    | "ZIMBABWE";
  /**
   * Subdivision of the city
   * @minLength 0
   * @maxLength 35
   */
  subdivision?: string;
}

export interface BusinessPartnerGroup {
  /**
   * Id of the partner group.
   * @format int32
   */
  id?: number;
  /**
   * Name of the partner group.
   * @minLength 1
   * @maxLength 80
   */
  name: string;
  /** Type of the partner group. */
  type: "CUSTOMER" | "SUPPLIER" | "PERSON";
  /** Is partner group active? NOTE: If the business partner group is in use in the debt collection settings for the Maksuvahti service, then it can't be set to inactive */
  active?: boolean;
}

export interface BusinessPartnerGroupSearchResult {
  /** Search results. */
  results?: BusinessPartnerGroup[];
  /** Search result metadata. */
  meta?: SearchResultMetaData;
}

/** Payment information for the person. */
export interface BusinessPartnerPaymentDetails {
  /** Payment method. */
  paymentMethod?:
    | "BANK_TRANSFER"
    | "CASH"
    | "CLEARING"
    | "CREDIT_CARD_CHARGE"
    | "DIRECT_DEBIT"
    | "DIRECT_PAYMENT"
    | "DKLMPKRE"
    | "DOMESTIC_PAYMENT_BANKGIRO"
    | "DOMESTIC_PAYMENT_CREDITOR"
    | "DOMESTIC_PAYMENT_PLUSGIRO"
    | "FOREIGN_PAYMENT"
    | "NETS"
    | "OTHER";
  /** Default currency. */
  currency?:
    | "AED"
    | "AFN"
    | "ALL"
    | "AMD"
    | "ANG"
    | "AOA"
    | "ARS"
    | "ATS"
    | "AUD"
    | "AWG"
    | "AZN"
    | "BAM"
    | "BBD"
    | "BDT"
    | "BEF"
    | "BGN"
    | "BHD"
    | "BIF"
    | "BMD"
    | "BND"
    | "BOB"
    | "BOV"
    | "BRL"
    | "BSD"
    | "BTN"
    | "BWP"
    | "BYN"
    | "BZD"
    | "CAD"
    | "CDF"
    | "CHE"
    | "CHF"
    | "CHW"
    | "CLF"
    | "CLP"
    | "CNH"
    | "CNT"
    | "CNY"
    | "COP"
    | "COU"
    | "CRC"
    | "CUC"
    | "CUP"
    | "CVE"
    | "CYP"
    | "CZK"
    | "DEM"
    | "DJF"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EEK"
    | "EGP"
    | "ERN"
    | "ESP"
    | "ETB"
    | "EUR"
    | "FIM"
    | "FJD"
    | "FKP"
    | "FRF"
    | "GBP"
    | "GEL"
    | "GGP"
    | "GHS"
    | "GIP"
    | "GMD"
    | "GNF"
    | "GRD"
    | "GTQ"
    | "GYD"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HTG"
    | "HUF"
    | "IDR"
    | "IEP"
    | "ILS"
    | "IMP"
    | "INR"
    | "IQD"
    | "IRR"
    | "ISK"
    | "ITL"
    | "JEP"
    | "JMD"
    | "JOD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KHR"
    | "KID"
    | "KMF"
    | "KPW"
    | "KRW"
    | "KWD"
    | "KYD"
    | "KZT"
    | "LAK"
    | "LBP"
    | "LKR"
    | "LRD"
    | "LSL"
    | "LTL"
    | "LUF"
    | "LVL"
    | "LYD"
    | "MAD"
    | "MDL"
    | "MGA"
    | "MKD"
    | "MMK"
    | "MNT"
    | "MOP"
    | "MRO"
    | "MTL"
    | "MUR"
    | "MVR"
    | "MWK"
    | "MXN"
    | "MXV"
    | "MYR"
    | "MZN"
    | "NAD"
    | "NGN"
    | "NIO"
    | "NIS"
    | "NLG"
    | "NOK"
    | "NPR"
    | "NTD"
    | "NZD"
    | "OMR"
    | "PAB"
    | "PEN"
    | "PGK"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PRB"
    | "PTE"
    | "PYG"
    | "QAR"
    | "RMB"
    | "RON"
    | "RSD"
    | "RUB"
    | "RWF"
    | "SAR"
    | "SBD"
    | "SCR"
    | "SDG"
    | "SEK"
    | "SGD"
    | "SHP"
    | "SIT"
    | "SKK"
    | "SLL"
    | "SLS"
    | "SOS"
    | "SRD"
    | "SSP"
    | "STN"
    | "SVC"
    | "SYP"
    | "SZL"
    | "THB"
    | "TJS"
    | "TMT"
    | "TND"
    | "TOP"
    | "TRY"
    | "TTD"
    | "TVD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "USN"
    | "UYI"
    | "UYU"
    | "UYW"
    | "UZS"
    | "VES"
    | "VND"
    | "VUV"
    | "WST"
    | "XAF"
    | "XAG"
    | "XAU"
    | "XBA"
    | "XBB"
    | "XBC"
    | "XBD"
    | "XCD"
    | "XDR"
    | "XOF"
    | "XPD"
    | "XPF"
    | "XPT"
    | "XSU"
    | "XTS"
    | "XUA"
    | "XXX"
    | "YER"
    | "ZAR"
    | "ZMW"
    | "ZWB"
    | "ZWL";
  /** Bank account number. */
  bankAccount?: BankAccount;
  /** Payment term days. */
  paymentTermDays?: string;
  /** Payment term percentage. */
  paymentTermPercentage?: number;
  /** Penal interest rate. */
  penalInterestRate?: number;
  /** Discount percentage. */
  discountPercentage?: number;
  /** Clearing code */
  clearingCode?: string;
}

/** Payment info of the partner. */
export interface BusinessPartnerPaymentInfo {
  /**
   * Factoring contract ID of the partner.
   * @format int32
   */
  factoringContractId?: number;
  /** Payment method of the partner. The DKLMPKRE method is deprecated and read only, DOMESTIC_PAYMENT_CREDITOR should be used instead. */
  paymentMethod:
    | "BANK_TRANSFER"
    | "DIRECT_DEBIT"
    | "DIRECT_PAYMENT"
    | "CLEARING"
    | "CREDIT_CARD_CHARGE"
    | "FOREIGN_PAYMENT"
    | "OTHER"
    | "CASH"
    | "DOMESTIC_PAYMENT_PLUSGIRO"
    | "DOMESTIC_PAYMENT_BANKGIRO"
    | "DOMESTIC_PAYMENT_CREDITOR"
    | "DKLMPKRE"
    | "NETS";
  /** Bank account ID of the partner. */
  bankAccount?: string;
  /** Payment term days of the partner. */
  paymentTermDays?: string;
  /** Payment term percentage of the partner. */
  paymentTermPercentage?: number;
  /** Penal interest rate of the partner. */
  penalInterestRate?: number;
  /** Discount percentage of the partner. */
  discountPercentage?: number;
  /** Only SALES_INVOICE, SALES_ORDER, PURCHASE_INVOICE and PURCHASE_ORDER. Cash discount set on the invoice. */
  cashDiscount?: CashDiscount;
  /** Currency of the partner. */
  currency?:
    | "AED"
    | "AFN"
    | "ALL"
    | "AMD"
    | "ANG"
    | "AOA"
    | "ARS"
    | "ATS"
    | "AUD"
    | "AWG"
    | "AZN"
    | "BAM"
    | "BBD"
    | "BDT"
    | "BEF"
    | "BGN"
    | "BHD"
    | "BIF"
    | "BMD"
    | "BND"
    | "BOB"
    | "BOV"
    | "BRL"
    | "BSD"
    | "BTN"
    | "BWP"
    | "BYN"
    | "BZD"
    | "CAD"
    | "CDF"
    | "CHE"
    | "CHF"
    | "CHW"
    | "CLF"
    | "CLP"
    | "CNH"
    | "CNT"
    | "CNY"
    | "COP"
    | "COU"
    | "CRC"
    | "CUC"
    | "CUP"
    | "CVE"
    | "CYP"
    | "CZK"
    | "DEM"
    | "DJF"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EEK"
    | "EGP"
    | "ERN"
    | "ESP"
    | "ETB"
    | "EUR"
    | "FIM"
    | "FJD"
    | "FKP"
    | "FRF"
    | "GBP"
    | "GEL"
    | "GGP"
    | "GHS"
    | "GIP"
    | "GMD"
    | "GNF"
    | "GRD"
    | "GTQ"
    | "GYD"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HTG"
    | "HUF"
    | "IDR"
    | "IEP"
    | "ILS"
    | "IMP"
    | "INR"
    | "IQD"
    | "IRR"
    | "ISK"
    | "ITL"
    | "JEP"
    | "JMD"
    | "JOD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KHR"
    | "KID"
    | "KMF"
    | "KPW"
    | "KRW"
    | "KWD"
    | "KYD"
    | "KZT"
    | "LAK"
    | "LBP"
    | "LKR"
    | "LRD"
    | "LSL"
    | "LTL"
    | "LUF"
    | "LVL"
    | "LYD"
    | "MAD"
    | "MDL"
    | "MGA"
    | "MKD"
    | "MMK"
    | "MNT"
    | "MOP"
    | "MRO"
    | "MTL"
    | "MUR"
    | "MVR"
    | "MWK"
    | "MXN"
    | "MXV"
    | "MYR"
    | "MZN"
    | "NAD"
    | "NGN"
    | "NIO"
    | "NIS"
    | "NLG"
    | "NOK"
    | "NPR"
    | "NTD"
    | "NZD"
    | "OMR"
    | "PAB"
    | "PEN"
    | "PGK"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PRB"
    | "PTE"
    | "PYG"
    | "QAR"
    | "RMB"
    | "RON"
    | "RSD"
    | "RUB"
    | "RWF"
    | "SAR"
    | "SBD"
    | "SCR"
    | "SDG"
    | "SEK"
    | "SGD"
    | "SHP"
    | "SIT"
    | "SKK"
    | "SLL"
    | "SLS"
    | "SOS"
    | "SRD"
    | "SSP"
    | "STN"
    | "SVC"
    | "SYP"
    | "SZL"
    | "THB"
    | "TJS"
    | "TMT"
    | "TND"
    | "TOP"
    | "TRY"
    | "TTD"
    | "TVD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "USN"
    | "UYI"
    | "UYU"
    | "UYW"
    | "UZS"
    | "VES"
    | "VND"
    | "VUV"
    | "WST"
    | "XAF"
    | "XAG"
    | "XAU"
    | "XBA"
    | "XBB"
    | "XBC"
    | "XBD"
    | "XCD"
    | "XDR"
    | "XOF"
    | "XPD"
    | "XPF"
    | "XPT"
    | "XSU"
    | "XTS"
    | "XUA"
    | "XXX"
    | "YER"
    | "ZAR"
    | "ZMW"
    | "ZWB"
    | "ZWL";
  /** Delivery method of the partner. */
  deliveryMethod?: string;
  /** Clearing code of the bank account. */
  clearingCode?: string;
  /** BIC of the bank account. */
  bic?: string;
  /** Customer account number used only for NETS payments */
  customerAccountNumber?: string;
}

export interface BusinessPartnerSearchResult {
  /** Search results. */
  results?: BusinessPartnerBasicInfo[];
  /** Search result metadata. */
  meta?: SearchResultMetaData;
}

/** Only SALES_INVOICE, SALES_ORDER, PURCHASE_INVOICE and PURCHASE_ORDER. Cash discount set on the invoice. */
export interface CashDiscount {
  /** Up to three cash discount options can be provided. Any additional values enteredwill be ignored. Provided cash discount options will be saved in ascending order by numberOfDays. */
  optionList?: CashDiscountOption[];
  /** The payment term type indicates the start point for payment due date calculation.On Danish environment, may select between two options: FROM_INV_DATE or FROM_END_OF_MONTH.For other environments, the only selectable term type is FROM_INV_DATE,which is also the default value across all environments. */
  cashDiscountsTermType?: "FROM_END_OF_MONTH" | "FROM_INV_DATE";
}

/** Up to three cash discount options can be provided. Any additional values enteredwill be ignored. Provided cash discount options will be saved in ascending order by numberOfDays. */
export interface CashDiscountOption {
  /**
   * Days specified in cash discount
   * @format int32
   * @max 999
   */
  numberOfDays?: number;
  /**
   * Discount percentage specified in cash discount
   * @max 99.99
   * @exclusiveMax false
   */
  discountPercentage?: number;
}

export interface CheckingEvent {
  /**
   * Comment for verification or approval event.
   * @max 100
   * @minLength 0
   * @maxLength 100
   */
  comment?: string;
}

export interface CirculationSettings {
  /** Indicates if approval circulation is enabled for purchase invoices. */
  useForPurchaseInvoices?: boolean;
  /** Indicates if approval circulation is enabled for travel and expense invoices. */
  useForTravelAndExpenseInvoices?: boolean;
  /** Represents the amount of time in which circulation notification will be sent. */
  reminderInterval?: "EVERY_SECOND_DAY" | "EVERY_THIRD_DAY" | "ONCE_A_DAY" | "ONCE_A_WEEK" | "ONLY_ONCE";
  /** Indicates whether forced notifications are enabled. */
  forceNotifications?: boolean;
  /** Indicates if determined order is enabled for verification and approval. */
  useDeterminedOrder?: boolean;
  /** Indicates whether payment is allowed only after approval. */
  allowPaymentOnlyWhenApproved?: boolean;
  /** Indicates whether payee information change is not allowed. */
  preventPayeeInformationChange?: boolean;
  /** Indicates whether specific discussion for invoice is allowed. */
  allowInvoiceSpecificDiscussion?: boolean;
  /** Indicates whether extended tagging in discussion is allowed. */
  allowExtendedTaggingInDiscussion?: boolean;
  /** Indicates whether purchase orders and invoices in invoice checking are allocated. */
  allocatePurchaseOrdersAndInvoicesInChecking?: boolean;
  /**
   * Maximum number of verifiers.
   * @format int32
   */
  maxVerifiers?: number;
  /**
   * Maximum number of acceptors.
   * @format int32
   */
  maxAcceptors?: number;
  /** List of verifiers. */
  verifiers?: Verifier[];
  /** List of acceptors. */
  acceptors?: Verifier[];
  /** Indicate whether setting personal substitutions is allowed. */
  allowPersonalSubstitution?: boolean;
  /** List of substitutions. */
  substitutions?: Substitution[];
}

export interface CollectionsAndPenalExpenses {
  /** Indicates if automatic handling of collection and penal costs is enabled. */
  useAutomaticHandling?: boolean;
  /** Penal expense product. */
  collectionCostsProduct?: ProductBasicInfo;
  /** Penal expense product. */
  penalExpenseProduct?: ProductBasicInfo;
  /**
   * Penal expense date margin.
   * @format int32
   */
  penalInterestDateMargin?: number;
  /** The minimum sum of penal interest to be calculated. */
  minimumPenalInterestSum?: number;
  /** Default sales invoice interest rate. */
  defaultSalesInvoiceInterest?: number;
  /**
   * Default terms of payment for sales invoices.
   * @format int32
   */
  defaultSalesInvoicePaymentTerms?: number;
  /** Collection partner. */
  collectionPartner?: string;
}

/** List of comments. */
export interface Comment {
  /**
   * Identifier for the comment.
   * @format int32
   */
  id?: number;
  /** Display name for comment author. */
  author?: string;
  /**
   * Comment date.
   * @format date-time
   */
  dateTime?: string;
  /** Comment on the related item. */
  comment: string;
  /** Information about tagged users. */
  taggedUsersInfo?: TaggedUsersInfo;
}

export interface CommentWithTaggedUsers {
  /**
   * Identifier for the comment.
   * @format int32
   */
  id?: number;
  /** Display name for comment author. */
  author?: string;
  /**
   * Comment date.
   * @format date-time
   */
  dateTime?: string;
  /** Comment on the related item. */
  comment: string;
  /** Information about tagged users. */
  taggedUsersInfo?: TaggedUsersInfo;
  /** List of tagged users. */
  taggedUsers?: TaggedUser[];
}

export interface Comments {
  /** List of comments. */
  comments?: Comment[];
}

export interface Company {
  /**
   * ID of current company.
   * @format int32
   */
  id: number;
  /** Name of current company. */
  name: string;
  /** Country of current company. */
  country?:
    | "AFGHANISTAN"
    | "ALAND_ISLANDS"
    | "ALBANIA"
    | "ALGERIA"
    | "AMERICAN_SAMOA"
    | "ANDORRA"
    | "ANGOLA"
    | "ANGUILLA"
    | "ANTARCTICA"
    | "ANTIGUA_AND_BARBUDA"
    | "ARGENTINA"
    | "ARMENIA"
    | "ARUBA"
    | "ASCENSION_AND_TRISTAN_DA_CUNHA_SAINT_HELENA"
    | "AUSTRALIA"
    | "AUSTRIA"
    | "AZERBAIJAN"
    | "BAHAMAS"
    | "BAHRAIN"
    | "BANGLADESH"
    | "BARBADOS"
    | "BELARUS"
    | "BELGIUM"
    | "BELIZE"
    | "BENIN"
    | "BERMUDA"
    | "BHUTAN"
    | "BOLIVARIAN_REPUBLIC_OF_VENEZUELA"
    | "BOSNIA_AND_HERZEGOVINA"
    | "BOTSWANA"
    | "BOUVET_ISLAND"
    | "BRAZIL"
    | "BRITISH_INDIAN_OCEAN_TERRITORY"
    | "BRITISH_VIRGIN_ISLANDS"
    | "BRUNEI_DARUSSALAM"
    | "BULGARIA"
    | "BURKINA_FASO"
    | "BURUNDI"
    | "CABO_VERDE"
    | "CAMBODIA"
    | "CAMEROON"
    | "CANADA"
    | "CAYMAN_ISLANDS"
    | "CENTRAL_AFRICAN_REPUBLIC"
    | "CHAD"
    | "CHILE"
    | "CHINA"
    | "CHRISTMAS_ISLAND"
    | "COCOS_KEELING_ISLANDS"
    | "COLOMBIA"
    | "COMOROS"
    | "CONGO"
    | "COOK_ISLANDS"
    | "COSTA_RICA"
    | "COTE_D_IVOIRE"
    | "CROATIA"
    | "CUBA"
    | "CURACAO"
    | "CYPRUS"
    | "CZECH_REPUBLIC"
    | "DEMOCRATIC_PEOPLE_S_REPUBLIC_OF_KOREA"
    | "DENMARK"
    | "DJIBOUTI"
    | "DOMINICA"
    | "DOMINICAN_REPUBLIC"
    | "ECUADOR"
    | "EGYPT"
    | "EL_SALVADOR"
    | "EQUATORIAL_GUINEA"
    | "ERITREA"
    | "ESTONIA"
    | "ETHIOPIA"
    | "FALKLAND_ISLANDS_MALVINAS"
    | "FAROE_ISLANDS"
    | "FEDERATED_STATES_OF_MICRONESIA"
    | "FIJI"
    | "FINLAND"
    | "FRANCE"
    | "FRENCH_GUIANA"
    | "FRENCH_POLYNESIA"
    | "FRENCH_SOUTHERN_TERRITORIES"
    | "GABON"
    | "GAMBIA"
    | "GEORGIA"
    | "GERMANY"
    | "GHANA"
    | "GIBRALTAR"
    | "GREECE"
    | "GREENLAND"
    | "GRENADA"
    | "GUADELOUPE"
    | "GUAM"
    | "GUATEMALA"
    | "GUERNSEY"
    | "GUINEA"
    | "GUINEA_BISSAU"
    | "GUYANA"
    | "HAITI"
    | "HEARD_ISLAND_AND_MCDONALD_ISLANDS"
    | "HOLY_SEE_VATICAN_CITY_STATE"
    | "HONDURAS"
    | "HONG_KONG"
    | "HUNGARY"
    | "ICELAND"
    | "INDIA"
    | "INDONESIA"
    | "IRAQ"
    | "IRELAND"
    | "ISLAMIC_REPUBLIC_OF_IRAN"
    | "ISLE_OF_MAN"
    | "ISRAEL"
    | "ITALY"
    | "JAMAICA"
    | "JAPAN"
    | "JERSEY"
    | "JORDAN"
    | "KAZAKHSTAN"
    | "KENYA"
    | "KIRIBATI"
    | "KOSOVO_TEMPORARY"
    | "KUWAIT"
    | "KYRGYZSTAN"
    | "LAO_PEOPLE_S_DEMOCRATIC_REPUBLIC"
    | "LATVIA"
    | "LEBANON"
    | "LESOTHO"
    | "LIBERIA"
    | "LIBYA"
    | "LIECHTENSTEIN"
    | "LITHUANIA"
    | "LUXEMBOURG"
    | "MACAO"
    | "MADAGASCAR"
    | "MALAWI"
    | "MALAYSIA"
    | "MALDIVES"
    | "MALI"
    | "MALTA"
    | "MARSHALL_ISLANDS"
    | "MARTINIQUE"
    | "MAURITANIA"
    | "MAURITIUS"
    | "MAYOTTE"
    | "MEXICO"
    | "MONACO"
    | "MONGOLIA"
    | "MONTENEGRO"
    | "MONTSERRAT"
    | "MOROCCO"
    | "MOZAMBIQUE"
    | "MYANMAR"
    | "NAMIBIA"
    | "NAURU"
    | "NEPAL"
    | "NETHERLANDS"
    | "NEW_CALEDONIA"
    | "NEW_ZEALAND"
    | "NICARAGUA"
    | "NIGER"
    | "NIGERIA"
    | "NIUE"
    | "NORFOLK_ISLAND"
    | "NORTHERN_IRELAND_TEMPORARY"
    | "NORTHERN_MARIANA_ISLANDS"
    | "NORWAY"
    | "OMAN"
    | "PAKISTAN"
    | "PALAU"
    | "PANAMA"
    | "PAPUA_NEW_GUINEA"
    | "PARAGUAY"
    | "PERU"
    | "PHILIPPINES"
    | "PITCAIRN"
    | "PLURINATIONAL_STATE_OF_BOLIVIA"
    | "POLAND"
    | "PORTUGAL"
    | "PROVINCE_OF_CHINA_TAIWAN"
    | "PUERTO_RICO"
    | "QATAR"
    | "REPUBLIC_OF_KOREA"
    | "REPUBLIC_OF_MOLDOVA"
    | "REUNION"
    | "ROMANIA"
    | "RUSSIAN_FEDERATION"
    | "RWANDA"
    | "SAINT_BARTHELEMY"
    | "SAINT_KITTS_AND_NEVIS"
    | "SAINT_LUCIA"
    | "SAINT_MARTIN_FRENCH_PART"
    | "SAINT_PIERRE_AND_MIQUELON"
    | "SAINT_VINCENT_AND_THE_GRENADINES"
    | "SAMOA"
    | "SAN_MARINO"
    | "SAO_TOME_AND_PRINCIPE"
    | "SAUDI_ARABIA"
    | "SENEGAL"
    | "SERBIA"
    | "SEYCHELLES"
    | "SIERRA_LEONE"
    | "SINGAPORE"
    | "SINT_EUSTATIUS_AND_SABA_BONAIRE"
    | "SINT_MAARTEN_DUTCH_PART"
    | "SLOVAKIA"
    | "SLOVENIA"
    | "SOLOMON_ISLANDS"
    | "SOMALIA"
    | "SOUTH_AFRICA"
    | "SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS"
    | "SOUTH_SUDAN"
    | "SPAIN"
    | "SRI_LANKA"
    | "STATE_OF_PALESTINE"
    | "SUDAN"
    | "SURINAME"
    | "SVALBARD_AND_JAN_MAYEN"
    | "SWAZILAND"
    | "SWEDEN"
    | "SWITZERLAND"
    | "SYRIAN_ARAB_REPUBLIC"
    | "TAJIKISTAN"
    | "THAILAND"
    | "THE_DEMOCRATIC_REPUBLIC_OF_THE_CONGO"
    | "THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA"
    | "TIMOR_LESTE"
    | "TOGO"
    | "TOKELAU"
    | "TONGA"
    | "TRINIDAD_AND_TOBAGO"
    | "TUNISIA"
    | "TURKEY"
    | "TURKMENISTAN"
    | "TURKS_AND_CAICOS_ISLANDS"
    | "TUVALU"
    | "UGANDA"
    | "UKRAINE"
    | "UNITED_ARAB_EMIRATES"
    | "UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND"
    | "UNITED_REPUBLIC_OF_TANZANIA"
    | "UNITED_STATES_MINOR_OUTLYING_ISLANDS"
    | "UNITED_STATES_OF_AMERICA"
    | "URUGUAY"
    | "UZBEKISTAN"
    | "U_S_VIRGIN_ISLANDS"
    | "VANUATU"
    | "VIET_NAM"
    | "WALLIS_AND_FUTUNA"
    | "WESTERN_SAHARA"
    | "YEMEN"
    | "ZAMBIA"
    | "ZIMBABWE";
  /** Product version of current company. */
  productVersion?:
    | "BACKOFFICE"
    | "BACKOFFICE_BASIC"
    | "BACKOFFICE_PLUS"
    | "BACKOFFICE_PREMIUM"
    | "FINAGO_SOLO"
    | "FINANCIALS_ALKU"
    | "FINANCIALS_BASIC"
    | "FINANCIALS_ENTERPRISE"
    | "FINANCIALS_GOLD"
    | "FINANCIALS_LIGHT"
    | "FINANCIALS_MAX"
    | "FINANCIALS_PLATINUM"
    | "FINANCIALS_PLUS"
    | "FINANCIALS_PREMIUM"
    | "FINANCIALS_SILVER"
    | "FINANCIALS_UNLIMITED"
    | "FLEX"
    | "SALES_GOLD"
    | "SALES_PLATINUM"
    | "SALES_SILVER";
  /** Operation type of current company. */
  operationType?:
    | "BROKEN"
    | "CEASED"
    | "CLOSED"
    | "DEMONSTRATION"
    | "EDUCATIONAL"
    | "ELISA_PURCHASE"
    | "PRODUCTION"
    | "SPECIAL"
    | "TRIAL";
  /** Accounting name of current company. */
  accountingOfficeName?: string;
  /**
   * Accounting office identifier of current company.
   * @format int32
   */
  accountingOfficeId?: number;
  /** Address of current company. */
  companyAddress?: CompanyAddress;
  /** Billing address of current company. */
  billingAddress?: CompanyBillingAddress;
  /**
   * MVA of current company.
   * @default false
   */
  mva?: boolean;
  /**
   * Is the current company in trade register.
   * @default false
   */
  inTradeRegister?: boolean;
  /** Company identifier of current company. */
  businessIdentifier?: BusinessIdentifier;
  /** Languages supported in coa for given environment. */
  accountingCoaLanguages?: string[];
}

/** Address of current company. */
export interface CompanyAddress {
  /**
   * Specifier, such as c/o address.
   * @minLength 0
   * @maxLength 80
   */
  specifier?: string;
  /**
   * Post office box for company.
   * @minLength 0
   * @maxLength 255
   */
  poBox?: string;
  /**
   * Street.
   * @minLength 0
   * @maxLength 80
   */
  street?: string;
  /**
   * Zip code
   * @minLength 0
   * @maxLength 20
   */
  zip?: string;
  /**
   * City
   * @minLength 0
   * @maxLength 40
   */
  city?: string;
  /**
   * Country
   * @example "SWEDEN"
   */
  country?:
    | "AFGHANISTAN"
    | "ALAND_ISLANDS"
    | "ALBANIA"
    | "ALGERIA"
    | "AMERICAN_SAMOA"
    | "ANDORRA"
    | "ANGOLA"
    | "ANGUILLA"
    | "ANTARCTICA"
    | "ANTIGUA_AND_BARBUDA"
    | "ARGENTINA"
    | "ARMENIA"
    | "ARUBA"
    | "ASCENSION_AND_TRISTAN_DA_CUNHA_SAINT_HELENA"
    | "AUSTRALIA"
    | "AUSTRIA"
    | "AZERBAIJAN"
    | "BAHAMAS"
    | "BAHRAIN"
    | "BANGLADESH"
    | "BARBADOS"
    | "BELARUS"
    | "BELGIUM"
    | "BELIZE"
    | "BENIN"
    | "BERMUDA"
    | "BHUTAN"
    | "BOLIVARIAN_REPUBLIC_OF_VENEZUELA"
    | "BOSNIA_AND_HERZEGOVINA"
    | "BOTSWANA"
    | "BOUVET_ISLAND"
    | "BRAZIL"
    | "BRITISH_INDIAN_OCEAN_TERRITORY"
    | "BRITISH_VIRGIN_ISLANDS"
    | "BRUNEI_DARUSSALAM"
    | "BULGARIA"
    | "BURKINA_FASO"
    | "BURUNDI"
    | "CABO_VERDE"
    | "CAMBODIA"
    | "CAMEROON"
    | "CANADA"
    | "CAYMAN_ISLANDS"
    | "CENTRAL_AFRICAN_REPUBLIC"
    | "CHAD"
    | "CHILE"
    | "CHINA"
    | "CHRISTMAS_ISLAND"
    | "COCOS_KEELING_ISLANDS"
    | "COLOMBIA"
    | "COMOROS"
    | "CONGO"
    | "COOK_ISLANDS"
    | "COSTA_RICA"
    | "COTE_D_IVOIRE"
    | "CROATIA"
    | "CUBA"
    | "CURACAO"
    | "CYPRUS"
    | "CZECH_REPUBLIC"
    | "DEMOCRATIC_PEOPLE_S_REPUBLIC_OF_KOREA"
    | "DENMARK"
    | "DJIBOUTI"
    | "DOMINICA"
    | "DOMINICAN_REPUBLIC"
    | "ECUADOR"
    | "EGYPT"
    | "EL_SALVADOR"
    | "EQUATORIAL_GUINEA"
    | "ERITREA"
    | "ESTONIA"
    | "ETHIOPIA"
    | "FALKLAND_ISLANDS_MALVINAS"
    | "FAROE_ISLANDS"
    | "FEDERATED_STATES_OF_MICRONESIA"
    | "FIJI"
    | "FINLAND"
    | "FRANCE"
    | "FRENCH_GUIANA"
    | "FRENCH_POLYNESIA"
    | "FRENCH_SOUTHERN_TERRITORIES"
    | "GABON"
    | "GAMBIA"
    | "GEORGIA"
    | "GERMANY"
    | "GHANA"
    | "GIBRALTAR"
    | "GREECE"
    | "GREENLAND"
    | "GRENADA"
    | "GUADELOUPE"
    | "GUAM"
    | "GUATEMALA"
    | "GUERNSEY"
    | "GUINEA"
    | "GUINEA_BISSAU"
    | "GUYANA"
    | "HAITI"
    | "HEARD_ISLAND_AND_MCDONALD_ISLANDS"
    | "HOLY_SEE_VATICAN_CITY_STATE"
    | "HONDURAS"
    | "HONG_KONG"
    | "HUNGARY"
    | "ICELAND"
    | "INDIA"
    | "INDONESIA"
    | "IRAQ"
    | "IRELAND"
    | "ISLAMIC_REPUBLIC_OF_IRAN"
    | "ISLE_OF_MAN"
    | "ISRAEL"
    | "ITALY"
    | "JAMAICA"
    | "JAPAN"
    | "JERSEY"
    | "JORDAN"
    | "KAZAKHSTAN"
    | "KENYA"
    | "KIRIBATI"
    | "KOSOVO_TEMPORARY"
    | "KUWAIT"
    | "KYRGYZSTAN"
    | "LAO_PEOPLE_S_DEMOCRATIC_REPUBLIC"
    | "LATVIA"
    | "LEBANON"
    | "LESOTHO"
    | "LIBERIA"
    | "LIBYA"
    | "LIECHTENSTEIN"
    | "LITHUANIA"
    | "LUXEMBOURG"
    | "MACAO"
    | "MADAGASCAR"
    | "MALAWI"
    | "MALAYSIA"
    | "MALDIVES"
    | "MALI"
    | "MALTA"
    | "MARSHALL_ISLANDS"
    | "MARTINIQUE"
    | "MAURITANIA"
    | "MAURITIUS"
    | "MAYOTTE"
    | "MEXICO"
    | "MONACO"
    | "MONGOLIA"
    | "MONTENEGRO"
    | "MONTSERRAT"
    | "MOROCCO"
    | "MOZAMBIQUE"
    | "MYANMAR"
    | "NAMIBIA"
    | "NAURU"
    | "NEPAL"
    | "NETHERLANDS"
    | "NEW_CALEDONIA"
    | "NEW_ZEALAND"
    | "NICARAGUA"
    | "NIGER"
    | "NIGERIA"
    | "NIUE"
    | "NORFOLK_ISLAND"
    | "NORTHERN_IRELAND_TEMPORARY"
    | "NORTHERN_MARIANA_ISLANDS"
    | "NORWAY"
    | "OMAN"
    | "PAKISTAN"
    | "PALAU"
    | "PANAMA"
    | "PAPUA_NEW_GUINEA"
    | "PARAGUAY"
    | "PERU"
    | "PHILIPPINES"
    | "PITCAIRN"
    | "PLURINATIONAL_STATE_OF_BOLIVIA"
    | "POLAND"
    | "PORTUGAL"
    | "PROVINCE_OF_CHINA_TAIWAN"
    | "PUERTO_RICO"
    | "QATAR"
    | "REPUBLIC_OF_KOREA"
    | "REPUBLIC_OF_MOLDOVA"
    | "REUNION"
    | "ROMANIA"
    | "RUSSIAN_FEDERATION"
    | "RWANDA"
    | "SAINT_BARTHELEMY"
    | "SAINT_KITTS_AND_NEVIS"
    | "SAINT_LUCIA"
    | "SAINT_MARTIN_FRENCH_PART"
    | "SAINT_PIERRE_AND_MIQUELON"
    | "SAINT_VINCENT_AND_THE_GRENADINES"
    | "SAMOA"
    | "SAN_MARINO"
    | "SAO_TOME_AND_PRINCIPE"
    | "SAUDI_ARABIA"
    | "SENEGAL"
    | "SERBIA"
    | "SEYCHELLES"
    | "SIERRA_LEONE"
    | "SINGAPORE"
    | "SINT_EUSTATIUS_AND_SABA_BONAIRE"
    | "SINT_MAARTEN_DUTCH_PART"
    | "SLOVAKIA"
    | "SLOVENIA"
    | "SOLOMON_ISLANDS"
    | "SOMALIA"
    | "SOUTH_AFRICA"
    | "SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS"
    | "SOUTH_SUDAN"
    | "SPAIN"
    | "SRI_LANKA"
    | "STATE_OF_PALESTINE"
    | "SUDAN"
    | "SURINAME"
    | "SVALBARD_AND_JAN_MAYEN"
    | "SWAZILAND"
    | "SWEDEN"
    | "SWITZERLAND"
    | "SYRIAN_ARAB_REPUBLIC"
    | "TAJIKISTAN"
    | "THAILAND"
    | "THE_DEMOCRATIC_REPUBLIC_OF_THE_CONGO"
    | "THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA"
    | "TIMOR_LESTE"
    | "TOGO"
    | "TOKELAU"
    | "TONGA"
    | "TRINIDAD_AND_TOBAGO"
    | "TUNISIA"
    | "TURKEY"
    | "TURKMENISTAN"
    | "TURKS_AND_CAICOS_ISLANDS"
    | "TUVALU"
    | "UGANDA"
    | "UKRAINE"
    | "UNITED_ARAB_EMIRATES"
    | "UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND"
    | "UNITED_REPUBLIC_OF_TANZANIA"
    | "UNITED_STATES_MINOR_OUTLYING_ISLANDS"
    | "UNITED_STATES_OF_AMERICA"
    | "URUGUAY"
    | "UZBEKISTAN"
    | "U_S_VIRGIN_ISLANDS"
    | "VANUATU"
    | "VIET_NAM"
    | "WALLIS_AND_FUTUNA"
    | "WESTERN_SAHARA"
    | "YEMEN"
    | "ZAMBIA"
    | "ZIMBABWE";
}

export interface CompanyBankAccount {
  /**
   * Unique identifier of the bank account.
   * @format int32
   */
  id?: number;
  /** Unique bank account number in BBAN format. Generated from IBAN. */
  accountNumber?: string;
  /** IBAN number for the bank account. Cannot be changed once created. */
  iban: string;
  /**
   * BIC code for the bank account. Not mandatory while creation, can be generated from IBAN.
   * @minLength 0
   * @maxLength 255
   */
  bic?: string;
  /**
   * The name of the bank.
   * @minLength 0
   * @maxLength 255
   */
  bankName?: string;
  /**
   * The currency of the bank account. Cannot be changed once created.
   * @example "EUR"
   */
  currency:
    | "AED"
    | "AFN"
    | "ALL"
    | "AMD"
    | "ANG"
    | "AOA"
    | "ARS"
    | "ATS"
    | "AUD"
    | "AWG"
    | "AZN"
    | "BAM"
    | "BBD"
    | "BDT"
    | "BEF"
    | "BGN"
    | "BHD"
    | "BIF"
    | "BMD"
    | "BND"
    | "BOB"
    | "BOV"
    | "BRL"
    | "BSD"
    | "BTN"
    | "BWP"
    | "BYN"
    | "BZD"
    | "CAD"
    | "CDF"
    | "CHE"
    | "CHF"
    | "CHW"
    | "CLF"
    | "CLP"
    | "CNH"
    | "CNT"
    | "CNY"
    | "COP"
    | "COU"
    | "CRC"
    | "CUC"
    | "CUP"
    | "CVE"
    | "CYP"
    | "CZK"
    | "DEM"
    | "DJF"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EEK"
    | "EGP"
    | "ERN"
    | "ESP"
    | "ETB"
    | "EUR"
    | "FIM"
    | "FJD"
    | "FKP"
    | "FRF"
    | "GBP"
    | "GEL"
    | "GGP"
    | "GHS"
    | "GIP"
    | "GMD"
    | "GNF"
    | "GRD"
    | "GTQ"
    | "GYD"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HTG"
    | "HUF"
    | "IDR"
    | "IEP"
    | "ILS"
    | "IMP"
    | "INR"
    | "IQD"
    | "IRR"
    | "ISK"
    | "ITL"
    | "JEP"
    | "JMD"
    | "JOD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KHR"
    | "KID"
    | "KMF"
    | "KPW"
    | "KRW"
    | "KWD"
    | "KYD"
    | "KZT"
    | "LAK"
    | "LBP"
    | "LKR"
    | "LRD"
    | "LSL"
    | "LTL"
    | "LUF"
    | "LVL"
    | "LYD"
    | "MAD"
    | "MDL"
    | "MGA"
    | "MKD"
    | "MMK"
    | "MNT"
    | "MOP"
    | "MRO"
    | "MTL"
    | "MUR"
    | "MVR"
    | "MWK"
    | "MXN"
    | "MXV"
    | "MYR"
    | "MZN"
    | "NAD"
    | "NGN"
    | "NIO"
    | "NIS"
    | "NLG"
    | "NOK"
    | "NPR"
    | "NTD"
    | "NZD"
    | "OMR"
    | "PAB"
    | "PEN"
    | "PGK"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PRB"
    | "PTE"
    | "PYG"
    | "QAR"
    | "RMB"
    | "RON"
    | "RSD"
    | "RUB"
    | "RWF"
    | "SAR"
    | "SBD"
    | "SCR"
    | "SDG"
    | "SEK"
    | "SGD"
    | "SHP"
    | "SIT"
    | "SKK"
    | "SLL"
    | "SLS"
    | "SOS"
    | "SRD"
    | "SSP"
    | "STN"
    | "SVC"
    | "SYP"
    | "SZL"
    | "THB"
    | "TJS"
    | "TMT"
    | "TND"
    | "TOP"
    | "TRY"
    | "TTD"
    | "TVD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "USN"
    | "UYI"
    | "UYU"
    | "UYW"
    | "UZS"
    | "VES"
    | "VND"
    | "VUV"
    | "WST"
    | "XAF"
    | "XAG"
    | "XAU"
    | "XBA"
    | "XBB"
    | "XBC"
    | "XBD"
    | "XCD"
    | "XDR"
    | "XOF"
    | "XPD"
    | "XPF"
    | "XPT"
    | "XSU"
    | "XTS"
    | "XUA"
    | "XXX"
    | "YER"
    | "ZAR"
    | "ZMW"
    | "ZWB"
    | "ZWL";
  /** Information if the bank account is used as default bank account for invoice in the given environment. */
  defaultForInvoice: boolean;
  /** Information if the bank account is used as default bank account for payment in the given environment. */
  defaultForPayment: boolean;
  /** Information if the bank account is active or not. If set to INACTIVE then all properties will be set to false */
  status: "ACTIVE" | "INACTIVE";
  /**
   * Order number. Can be used for display ordering instead of ID.
   * @format int32
   */
  orderNo?: number;
  /** Aliases for the bank account if any exists in the given environment. Used on Swedish and Danish environments. */
  associatedAccounts?: BankAccountAlias[];
  /**
   * Company bank account version timestamp. Automatically generated by Procountor and updated every time the partner is modified. When using PUT /bankaccounts, it is required to include the latest version timestamp of the partner to the request. This prevents conflicts if the partner is being modified from several sources.
   * @format date-time
   */
  version?: string;
  /**
   * The address of the bank.
   * @minLength 0
   * @maxLength 255
   */
  bankAddress?: string;
  /**
   * The ledger account number.
   * @example "1910"
   */
  ledgerAccount: string;
  /**
   * Banking code. In Sweden - Organisation number. Required if payments allowed.
   * @minLength 0
   * @maxLength 20
   */
  bankingCode?: string;
  /** Generated automatically according to the BIC but it can be also found from the contract made with the bank. */
  serviceNumbers?: string[];
  /** Information if the bank account is used as template on invoice. */
  showAccountOnInvoice: boolean;
  /** Information if account have contract on bank transfers. */
  allowPayments: boolean;
  /** Information if account have contract on foreign payments. */
  allowForeignPayments: boolean;
  /** Information if account have contract on salary payments. Not supported in the Norwegian environment. */
  allowSalaryPayments?: boolean;
  /** Information if account have contract on express payments. Not supported in the Norwegian and Danish environment. */
  allowExpressPayments?: boolean;
  /** Information if withholding tax allowed. This property is used only in Norwegian environment. */
  withholdingTax?: boolean;
  /**
   * Date of creation.
   * @format date-time
   */
  created?: string;
}

/** Search results. */
export interface CompanyBankAccountBasicInfo {
  /**
   * Unique identifier of the bank account.
   * @format int32
   */
  id?: number;
  /** Unique bank account number in BBAN format. Generated from IBAN. */
  accountNumber?: string;
  /** IBAN number for the bank account. Cannot be changed once created. */
  iban: string;
  /**
   * BIC code for the bank account. Not mandatory while creation, can be generated from IBAN.
   * @minLength 0
   * @maxLength 255
   */
  bic?: string;
  /**
   * The name of the bank.
   * @minLength 0
   * @maxLength 255
   */
  bankName?: string;
  /**
   * The currency of the bank account. Cannot be changed once created.
   * @example "EUR"
   */
  currency:
    | "AED"
    | "AFN"
    | "ALL"
    | "AMD"
    | "ANG"
    | "AOA"
    | "ARS"
    | "ATS"
    | "AUD"
    | "AWG"
    | "AZN"
    | "BAM"
    | "BBD"
    | "BDT"
    | "BEF"
    | "BGN"
    | "BHD"
    | "BIF"
    | "BMD"
    | "BND"
    | "BOB"
    | "BOV"
    | "BRL"
    | "BSD"
    | "BTN"
    | "BWP"
    | "BYN"
    | "BZD"
    | "CAD"
    | "CDF"
    | "CHE"
    | "CHF"
    | "CHW"
    | "CLF"
    | "CLP"
    | "CNH"
    | "CNT"
    | "CNY"
    | "COP"
    | "COU"
    | "CRC"
    | "CUC"
    | "CUP"
    | "CVE"
    | "CYP"
    | "CZK"
    | "DEM"
    | "DJF"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EEK"
    | "EGP"
    | "ERN"
    | "ESP"
    | "ETB"
    | "EUR"
    | "FIM"
    | "FJD"
    | "FKP"
    | "FRF"
    | "GBP"
    | "GEL"
    | "GGP"
    | "GHS"
    | "GIP"
    | "GMD"
    | "GNF"
    | "GRD"
    | "GTQ"
    | "GYD"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HTG"
    | "HUF"
    | "IDR"
    | "IEP"
    | "ILS"
    | "IMP"
    | "INR"
    | "IQD"
    | "IRR"
    | "ISK"
    | "ITL"
    | "JEP"
    | "JMD"
    | "JOD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KHR"
    | "KID"
    | "KMF"
    | "KPW"
    | "KRW"
    | "KWD"
    | "KYD"
    | "KZT"
    | "LAK"
    | "LBP"
    | "LKR"
    | "LRD"
    | "LSL"
    | "LTL"
    | "LUF"
    | "LVL"
    | "LYD"
    | "MAD"
    | "MDL"
    | "MGA"
    | "MKD"
    | "MMK"
    | "MNT"
    | "MOP"
    | "MRO"
    | "MTL"
    | "MUR"
    | "MVR"
    | "MWK"
    | "MXN"
    | "MXV"
    | "MYR"
    | "MZN"
    | "NAD"
    | "NGN"
    | "NIO"
    | "NIS"
    | "NLG"
    | "NOK"
    | "NPR"
    | "NTD"
    | "NZD"
    | "OMR"
    | "PAB"
    | "PEN"
    | "PGK"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PRB"
    | "PTE"
    | "PYG"
    | "QAR"
    | "RMB"
    | "RON"
    | "RSD"
    | "RUB"
    | "RWF"
    | "SAR"
    | "SBD"
    | "SCR"
    | "SDG"
    | "SEK"
    | "SGD"
    | "SHP"
    | "SIT"
    | "SKK"
    | "SLL"
    | "SLS"
    | "SOS"
    | "SRD"
    | "SSP"
    | "STN"
    | "SVC"
    | "SYP"
    | "SZL"
    | "THB"
    | "TJS"
    | "TMT"
    | "TND"
    | "TOP"
    | "TRY"
    | "TTD"
    | "TVD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "USN"
    | "UYI"
    | "UYU"
    | "UYW"
    | "UZS"
    | "VES"
    | "VND"
    | "VUV"
    | "WST"
    | "XAF"
    | "XAG"
    | "XAU"
    | "XBA"
    | "XBB"
    | "XBC"
    | "XBD"
    | "XCD"
    | "XDR"
    | "XOF"
    | "XPD"
    | "XPF"
    | "XPT"
    | "XSU"
    | "XTS"
    | "XUA"
    | "XXX"
    | "YER"
    | "ZAR"
    | "ZMW"
    | "ZWB"
    | "ZWL";
  /** Information if the bank account is used as default bank account for invoice in the given environment. */
  defaultForInvoice: boolean;
  /** Information if the bank account is used as default bank account for payment in the given environment. */
  defaultForPayment: boolean;
  /** Information if the bank account is active or not. If set to INACTIVE then all properties will be set to false */
  status: "ACTIVE" | "INACTIVE";
  /**
   * Order number. Can be used for display ordering instead of ID.
   * @format int32
   */
  orderNo?: number;
  /** Aliases for the bank account if any exists in the given environment. Used on Swedish and Danish environments. */
  associatedAccounts?: BankAccountAlias[];
  /**
   * Company bank account version timestamp. Automatically generated by Procountor and updated every time the partner is modified. When using PUT /bankaccounts, it is required to include the latest version timestamp of the partner to the request. This prevents conflicts if the partner is being modified from several sources.
   * @format date-time
   */
  version?: string;
}

export interface CompanyBankAccountSearchResult {
  /** Search results. */
  results?: CompanyBankAccountBasicInfo[];
  /** Search result metadata. */
  meta?: SearchResultMetaData;
}

/** Billing address of current company. */
export interface CompanyBillingAddress {
  /**
   * Street of company billing address.
   * @minLength 0
   * @maxLength 80
   * @example "Main Street 1"
   */
  street?: string;
  /**
   * Postal code of company billing address.
   * @minLength 0
   * @maxLength 20
   * @example "02150"
   */
  zip?: string;
  /**
   * City of company billing address.
   * @minLength 0
   * @maxLength 40
   * @example "Helsinki"
   */
  city?: string;
  /**
   * Country of company billing address.
   * @example "SWEDEN"
   */
  country?:
    | "AFGHANISTAN"
    | "ALAND_ISLANDS"
    | "ALBANIA"
    | "ALGERIA"
    | "AMERICAN_SAMOA"
    | "ANDORRA"
    | "ANGOLA"
    | "ANGUILLA"
    | "ANTARCTICA"
    | "ANTIGUA_AND_BARBUDA"
    | "ARGENTINA"
    | "ARMENIA"
    | "ARUBA"
    | "ASCENSION_AND_TRISTAN_DA_CUNHA_SAINT_HELENA"
    | "AUSTRALIA"
    | "AUSTRIA"
    | "AZERBAIJAN"
    | "BAHAMAS"
    | "BAHRAIN"
    | "BANGLADESH"
    | "BARBADOS"
    | "BELARUS"
    | "BELGIUM"
    | "BELIZE"
    | "BENIN"
    | "BERMUDA"
    | "BHUTAN"
    | "BOLIVARIAN_REPUBLIC_OF_VENEZUELA"
    | "BOSNIA_AND_HERZEGOVINA"
    | "BOTSWANA"
    | "BOUVET_ISLAND"
    | "BRAZIL"
    | "BRITISH_INDIAN_OCEAN_TERRITORY"
    | "BRITISH_VIRGIN_ISLANDS"
    | "BRUNEI_DARUSSALAM"
    | "BULGARIA"
    | "BURKINA_FASO"
    | "BURUNDI"
    | "CABO_VERDE"
    | "CAMBODIA"
    | "CAMEROON"
    | "CANADA"
    | "CAYMAN_ISLANDS"
    | "CENTRAL_AFRICAN_REPUBLIC"
    | "CHAD"
    | "CHILE"
    | "CHINA"
    | "CHRISTMAS_ISLAND"
    | "COCOS_KEELING_ISLANDS"
    | "COLOMBIA"
    | "COMOROS"
    | "CONGO"
    | "COOK_ISLANDS"
    | "COSTA_RICA"
    | "COTE_D_IVOIRE"
    | "CROATIA"
    | "CUBA"
    | "CURACAO"
    | "CYPRUS"
    | "CZECH_REPUBLIC"
    | "DEMOCRATIC_PEOPLE_S_REPUBLIC_OF_KOREA"
    | "DENMARK"
    | "DJIBOUTI"
    | "DOMINICA"
    | "DOMINICAN_REPUBLIC"
    | "ECUADOR"
    | "EGYPT"
    | "EL_SALVADOR"
    | "EQUATORIAL_GUINEA"
    | "ERITREA"
    | "ESTONIA"
    | "ETHIOPIA"
    | "FALKLAND_ISLANDS_MALVINAS"
    | "FAROE_ISLANDS"
    | "FEDERATED_STATES_OF_MICRONESIA"
    | "FIJI"
    | "FINLAND"
    | "FRANCE"
    | "FRENCH_GUIANA"
    | "FRENCH_POLYNESIA"
    | "FRENCH_SOUTHERN_TERRITORIES"
    | "GABON"
    | "GAMBIA"
    | "GEORGIA"
    | "GERMANY"
    | "GHANA"
    | "GIBRALTAR"
    | "GREECE"
    | "GREENLAND"
    | "GRENADA"
    | "GUADELOUPE"
    | "GUAM"
    | "GUATEMALA"
    | "GUERNSEY"
    | "GUINEA"
    | "GUINEA_BISSAU"
    | "GUYANA"
    | "HAITI"
    | "HEARD_ISLAND_AND_MCDONALD_ISLANDS"
    | "HOLY_SEE_VATICAN_CITY_STATE"
    | "HONDURAS"
    | "HONG_KONG"
    | "HUNGARY"
    | "ICELAND"
    | "INDIA"
    | "INDONESIA"
    | "IRAQ"
    | "IRELAND"
    | "ISLAMIC_REPUBLIC_OF_IRAN"
    | "ISLE_OF_MAN"
    | "ISRAEL"
    | "ITALY"
    | "JAMAICA"
    | "JAPAN"
    | "JERSEY"
    | "JORDAN"
    | "KAZAKHSTAN"
    | "KENYA"
    | "KIRIBATI"
    | "KOSOVO_TEMPORARY"
    | "KUWAIT"
    | "KYRGYZSTAN"
    | "LAO_PEOPLE_S_DEMOCRATIC_REPUBLIC"
    | "LATVIA"
    | "LEBANON"
    | "LESOTHO"
    | "LIBERIA"
    | "LIBYA"
    | "LIECHTENSTEIN"
    | "LITHUANIA"
    | "LUXEMBOURG"
    | "MACAO"
    | "MADAGASCAR"
    | "MALAWI"
    | "MALAYSIA"
    | "MALDIVES"
    | "MALI"
    | "MALTA"
    | "MARSHALL_ISLANDS"
    | "MARTINIQUE"
    | "MAURITANIA"
    | "MAURITIUS"
    | "MAYOTTE"
    | "MEXICO"
    | "MONACO"
    | "MONGOLIA"
    | "MONTENEGRO"
    | "MONTSERRAT"
    | "MOROCCO"
    | "MOZAMBIQUE"
    | "MYANMAR"
    | "NAMIBIA"
    | "NAURU"
    | "NEPAL"
    | "NETHERLANDS"
    | "NEW_CALEDONIA"
    | "NEW_ZEALAND"
    | "NICARAGUA"
    | "NIGER"
    | "NIGERIA"
    | "NIUE"
    | "NORFOLK_ISLAND"
    | "NORTHERN_IRELAND_TEMPORARY"
    | "NORTHERN_MARIANA_ISLANDS"
    | "NORWAY"
    | "OMAN"
    | "PAKISTAN"
    | "PALAU"
    | "PANAMA"
    | "PAPUA_NEW_GUINEA"
    | "PARAGUAY"
    | "PERU"
    | "PHILIPPINES"
    | "PITCAIRN"
    | "PLURINATIONAL_STATE_OF_BOLIVIA"
    | "POLAND"
    | "PORTUGAL"
    | "PROVINCE_OF_CHINA_TAIWAN"
    | "PUERTO_RICO"
    | "QATAR"
    | "REPUBLIC_OF_KOREA"
    | "REPUBLIC_OF_MOLDOVA"
    | "REUNION"
    | "ROMANIA"
    | "RUSSIAN_FEDERATION"
    | "RWANDA"
    | "SAINT_BARTHELEMY"
    | "SAINT_KITTS_AND_NEVIS"
    | "SAINT_LUCIA"
    | "SAINT_MARTIN_FRENCH_PART"
    | "SAINT_PIERRE_AND_MIQUELON"
    | "SAINT_VINCENT_AND_THE_GRENADINES"
    | "SAMOA"
    | "SAN_MARINO"
    | "SAO_TOME_AND_PRINCIPE"
    | "SAUDI_ARABIA"
    | "SENEGAL"
    | "SERBIA"
    | "SEYCHELLES"
    | "SIERRA_LEONE"
    | "SINGAPORE"
    | "SINT_EUSTATIUS_AND_SABA_BONAIRE"
    | "SINT_MAARTEN_DUTCH_PART"
    | "SLOVAKIA"
    | "SLOVENIA"
    | "SOLOMON_ISLANDS"
    | "SOMALIA"
    | "SOUTH_AFRICA"
    | "SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS"
    | "SOUTH_SUDAN"
    | "SPAIN"
    | "SRI_LANKA"
    | "STATE_OF_PALESTINE"
    | "SUDAN"
    | "SURINAME"
    | "SVALBARD_AND_JAN_MAYEN"
    | "SWAZILAND"
    | "SWEDEN"
    | "SWITZERLAND"
    | "SYRIAN_ARAB_REPUBLIC"
    | "TAJIKISTAN"
    | "THAILAND"
    | "THE_DEMOCRATIC_REPUBLIC_OF_THE_CONGO"
    | "THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA"
    | "TIMOR_LESTE"
    | "TOGO"
    | "TOKELAU"
    | "TONGA"
    | "TRINIDAD_AND_TOBAGO"
    | "TUNISIA"
    | "TURKEY"
    | "TURKMENISTAN"
    | "TURKS_AND_CAICOS_ISLANDS"
    | "TUVALU"
    | "UGANDA"
    | "UKRAINE"
    | "UNITED_ARAB_EMIRATES"
    | "UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND"
    | "UNITED_REPUBLIC_OF_TANZANIA"
    | "UNITED_STATES_MINOR_OUTLYING_ISLANDS"
    | "UNITED_STATES_OF_AMERICA"
    | "URUGUAY"
    | "UZBEKISTAN"
    | "U_S_VIRGIN_ISLANDS"
    | "VANUATU"
    | "VIET_NAM"
    | "WALLIS_AND_FUTUNA"
    | "WESTERN_SAHARA"
    | "YEMEN"
    | "ZAMBIA"
    | "ZIMBABWE";
}

export interface CompanyCurrency {
  /** Currency of company. */
  companyCurrency?: "DKK" | "EUR" | "NOK" | "SEK";
}

/** Company settings. These are settings for 3rd party client usage to identify what features are usable for current company (in order to avoid requests that are bound to fail) */
export interface CompanySettings {
  /** Is invoice discussion enabled. */
  invoiceDiscussionEnabled?: boolean;
}

/** This object holds information about the counterparty of the invoice. With sales invoices and sales orders, it is the buyer. With purchase invoices and purchase orders it is the seller. With travel and expense invoices, it is the reporter of the expenses */
export interface CounterParty {
  /**
   * Name of the contact person.
   * @minLength 0
   * @maxLength 70
   */
  contactPersonName?: string;
  /** SALES_INVOICE, SALES_ORDER, PURCHASE_INVOICE and PURCHASE_ORDER only. Business ID or national identification number. */
  identifier?: string;
  /** SALES_INVOICE and SALES_ORDER, PURCHASE_INVOICE and PURCHASE_ORDER only. Tax code of the customer. */
  taxCode?: string;
  /** SALES_INVOICE, SALES_ORDER, PURCHASE_INVOICE and PURCHASE_ORDER only. Customer number. */
  customerNumber?: string;
  /** SALES_INVOICE, SALES_ORDER and PURCHASE_ORDER only. Email address of the buyer. Required to be correct if supported. */
  email?: string;
  /** Counterparty address. In the case of a sales invoice this is the buyer's address, and in the case of a purchase invoice and purchase order it is the seller. Even if the invoice is linked to a business partner by partnerId, the counterparty address can be different from the address saved for that business partner in the partner register. */
  counterPartyAddress: InvoiceCounterpartyAddress;
  /** Bank account number. */
  bankAccount?: BankAccount;
  einvoiceAddress?: EInvoiceAddress;
}

export interface CreatedWebhookResponse {
  /**
   * HTTP response status.
   * @format int32
   */
  status?: number;
  /**
   * Generated UUID
   * @format uuid
   */
  uuid?: string;
}

export interface Currencies {
  /** List of available currencies. */
  currencies?: string[];
}

export interface CurrencyExchangeRate {
  /**
   * Day specified in query.
   * @format date
   */
  queryDay?: string;
  /** Currency of exchange rate. */
  currency?:
    | "AED"
    | "AFN"
    | "ALL"
    | "AMD"
    | "ANG"
    | "AOA"
    | "ARS"
    | "ATS"
    | "AUD"
    | "AWG"
    | "AZN"
    | "BAM"
    | "BBD"
    | "BDT"
    | "BEF"
    | "BGN"
    | "BHD"
    | "BIF"
    | "BMD"
    | "BND"
    | "BOB"
    | "BOV"
    | "BRL"
    | "BSD"
    | "BTN"
    | "BWP"
    | "BYN"
    | "BZD"
    | "CAD"
    | "CDF"
    | "CHE"
    | "CHF"
    | "CHW"
    | "CLF"
    | "CLP"
    | "CNH"
    | "CNT"
    | "CNY"
    | "COP"
    | "COU"
    | "CRC"
    | "CUC"
    | "CUP"
    | "CVE"
    | "CYP"
    | "CZK"
    | "DEM"
    | "DJF"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EEK"
    | "EGP"
    | "ERN"
    | "ESP"
    | "ETB"
    | "EUR"
    | "FIM"
    | "FJD"
    | "FKP"
    | "FRF"
    | "GBP"
    | "GEL"
    | "GGP"
    | "GHS"
    | "GIP"
    | "GMD"
    | "GNF"
    | "GRD"
    | "GTQ"
    | "GYD"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HTG"
    | "HUF"
    | "IDR"
    | "IEP"
    | "ILS"
    | "IMP"
    | "INR"
    | "IQD"
    | "IRR"
    | "ISK"
    | "ITL"
    | "JEP"
    | "JMD"
    | "JOD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KHR"
    | "KID"
    | "KMF"
    | "KPW"
    | "KRW"
    | "KWD"
    | "KYD"
    | "KZT"
    | "LAK"
    | "LBP"
    | "LKR"
    | "LRD"
    | "LSL"
    | "LTL"
    | "LUF"
    | "LVL"
    | "LYD"
    | "MAD"
    | "MDL"
    | "MGA"
    | "MKD"
    | "MMK"
    | "MNT"
    | "MOP"
    | "MRO"
    | "MTL"
    | "MUR"
    | "MVR"
    | "MWK"
    | "MXN"
    | "MXV"
    | "MYR"
    | "MZN"
    | "NAD"
    | "NGN"
    | "NIO"
    | "NIS"
    | "NLG"
    | "NOK"
    | "NPR"
    | "NTD"
    | "NZD"
    | "OMR"
    | "PAB"
    | "PEN"
    | "PGK"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PRB"
    | "PTE"
    | "PYG"
    | "QAR"
    | "RMB"
    | "RON"
    | "RSD"
    | "RUB"
    | "RWF"
    | "SAR"
    | "SBD"
    | "SCR"
    | "SDG"
    | "SEK"
    | "SGD"
    | "SHP"
    | "SIT"
    | "SKK"
    | "SLL"
    | "SLS"
    | "SOS"
    | "SRD"
    | "SSP"
    | "STN"
    | "SVC"
    | "SYP"
    | "SZL"
    | "THB"
    | "TJS"
    | "TMT"
    | "TND"
    | "TOP"
    | "TRY"
    | "TTD"
    | "TVD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "USN"
    | "UYI"
    | "UYU"
    | "UYW"
    | "UZS"
    | "VES"
    | "VND"
    | "VUV"
    | "WST"
    | "XAF"
    | "XAG"
    | "XAU"
    | "XBA"
    | "XBB"
    | "XBC"
    | "XBD"
    | "XCD"
    | "XDR"
    | "XOF"
    | "XPD"
    | "XPF"
    | "XPT"
    | "XSU"
    | "XTS"
    | "XUA"
    | "XXX"
    | "YER"
    | "ZAR"
    | "ZMW"
    | "ZWB"
    | "ZWL";
  /**
   * Day of exchange rate.
   * @format date
   */
  day?: string;
  /** Rate of exchange rate. */
  rate?: number;
}

export interface CurrencyGroupRates {
  /** Company base currency. */
  baseCurrency?: string;
  /**
   * Currency date.
   * @format date
   */
  currencyDate?: string;
  /** List of currency rates. */
  rates?: CurrencyRate[];
}

/** List of currency rates. */
export interface CurrencyRate {
  currencyRate?: number;
  currencyCode?: string;
}

/** Data model for which constraint violations occurred. */
export type DataModel = object;

export interface DefaultDimension {
  /**
   * Unique identifier for the dimension.
   * @format int32
   */
  id?: number;
  /** Name of the dimension. */
  name?: string;
  /** Dimension items connected with dimension. */
  items?: DefaultDimensionItem[];
}

export interface DefaultDimensionBasicData {
  /**
   * Unique identifier for the dimension.
   * @format int32
   */
  id?: number;
  /** Name of the dimension. */
  name?: string;
  /** Dimension items connected with dimension. */
  items?: DefaultDimensionItemBasicData[];
}

/** Dimension items connected with dimension. */
export interface DefaultDimensionItem {
  /**
   * Unique identifier for the dimension item.
   * @format int32
   */
  id?: number;
  /** Code name of the dimension item. */
  codeName: string;
  /** Percentage value of the dimension item. */
  percent: number;
  /** Status of the dimension item. */
  status?: boolean;
  /** Description of the dimension item. */
  description?: string;
}

/** Dimension items connected with dimension. */
export interface DefaultDimensionItemBasicData {
  /**
   * Unique identifier for the dimension item.
   * @format int32
   */
  id?: number;
  /** Code name of the dimension item. */
  codeName: string;
  /** Percentage value of the dimension item. */
  percent: number;
}

export interface DefaultProduct {
  /**
   * Identifier of the default product
   * @format int32
   */
  id?: number;
  /** Information about the default product */
  productInfo?: Product;
  /** Default settings of the default product */
  defaultSettings?: DefaultProductSettings;
  /** Validity periods of the default product */
  validityPeriods?: ProductValidityPeriod[];
}

/** Default settings of the default product */
export interface DefaultProductSettings {
  /** Information whether special discount is in use */
  useSpecialDiscount?: boolean;
  /** Percentage special discount */
  specialDiscountPercentage?: number;
  /** Information whether special price is in use */
  useSpecialPrice?: boolean;
  /** Special price of the product */
  specialPrice?: number;
  /** Information whether special vat is in use */
  useSpecialVat?: boolean;
  /** Special vat percentage value */
  specialVatPercentage?: number;
  /** Amount of the product */
  amount?: number;
  /** Comment of the product */
  comment?: string;
}

export interface DeliveryTerms {
  /** List of delivery terms. */
  deliveryTerms?: string[];
}

/** Invoice delivery terms info. */
export interface DeliveryTermsInfo {
  /** Name for terms of delivery. */
  name?: string;
  /** Delivery place */
  municipality?: string;
}

export interface Dimension {
  /**
   * Dimension ID. Required in PUT
   * @format int32
   */
  id?: number;
  /** Dimension name. */
  name: string;
  /** Dimension items. */
  items?: DimensionItem[];
}

/** Dimension items. */
export interface DimensionItem {
  /**
   * Dimension item ID. Required in PUT
   * @format int32
   */
  id?: number;
  /** Dimension item code name. */
  codeName: string;
  /** Dimension item status. If the dimension item is marked as active, this property is not present. If the dimension item is inactive, the value of this is property is "P". */
  status?: string;
  /** Dimension item description. */
  description?: string;
}

/** Values of dimension items associated with this transaction. The number of provided dimension items must be within the dimension max count defined by the purchased Procountor license. Provided dimension pairs (dimension id - item id) must be unique within the list provided. */
export interface DimensionItemValue {
  /**
   * Dimension ID. Must exist in the current environment. For a list of available dimensions, see the GET /dimensions endpoint.
   * @format int32
   */
  dimensionId: number;
  /**
   * Dimension item ID. Must exist in the current environment. For a list of available dimensions, see the GET /dimensions endpoint.
   * @format int32
   */
  itemId: number;
  /** Dimension item value with maximum two decimal places. Use absolute values instead of percentages. The sum of dimension item values on a dimension must equal the accounting value of the parent transaction. */
  value: number;
}

export interface DimensionName {
  /**
   * Dimension name.
   * @minLength 1
   * @maxLength 255
   */
  name: string;
}

/** List containing DirectBankTransfer objects. */
export interface DirectBankTransfer {
  /**
   * The amount of the payment in the given currency. Currency is defined within the invoice, which identifier is set in invoiceId field.
   * @min 0
   * @exclusiveMin true
   */
  amount: number;
  /**
   * Bank reference code.
   * @minLength 0
   * @maxLength 40
   */
  bankReferenceCode?: string;
  /** Reference code generation type. If type not allowed for a user country will be given, then 400 is returned */
  bankReferenceCodeType?: "RF" | "FI" | "OCR" | "KID" | "GIK01" | "GIK04" | "GIK15" | "FIK71" | "FIK73" | "FIK75";
  /**
   * Message for the payment, if reference payment is not used.
   * @minLength 0
   * @maxLength 140
   */
  message?: string;
  /**
   * Bank account number of the recipient.
   * @minLength 0
   * @maxLength 80
   */
  recipientBankAccount: string;
  /**
   * BIC code of recipient bank account number.
   * @minLength 0
   * @maxLength 80
   */
  recipientBicCode?: string;
  /** Payment method type defining what kind of payment has to be made. */
  paymentMethod:
    | "DENMARK_DOMESTIC_PAYMENT"
    | "DENMARK_DOMESTIC_PAYMENT_CREDITOR"
    | "DENMARK_FOREIGN_PAYMENT"
    | "FINNISH_BANK_TRANSFER"
    | "FINNISH_EXPRESS_PAYMENT"
    | "FINNISH_FOREIGN_PAYMENT"
    | "NORWEGIAN_DOMESTIC_PAYMENT"
    | "NORWEGIAN_FOREIGN_PAYMENT"
    | "SWEDISH_DOMESTIC_PAYMENT"
    | "SWEDISH_DOMESTIC_PAYMENT_BANKGIRO"
    | "SWEDISH_DOMESTIC_PAYMENT_PLUSGIRO"
    | "SWEDISH_FOREIGN_PAYMENT";
  /** The payer bank account. It has to be predefined in the environment to be able to use the payment. If not set than default bank account for payment is taken. */
  payerBankAccount?: string;
  /**
   * Date specifying when the payment transaction has to be performed. Payment date should be grater then current date.
   * @format date
   */
  paymentDate: string;
  /** Receiver bank clearing code. */
  receiverBankClearingCode?: string;
  /** Recipient name with address. Recipient name is mandatory and is always in use, other fields are omitted in scenarios different then described below. In case of: foreign payments, Norway NETS payments, Norway SpareBank payments, Sweden Swedbank with missing bank reference payments and Sweden DanskeBank with missing bank reference payments full receiver address is needed. */
  recipientNameAndAddress: PaymentRecipientNameAndAddress;
  /** Recipient bank name and address. Used in foreign payments. */
  receiverBankNameAndAddress?: PaymentReceiverBankNameAndAddress;
  /** Intermediary bank name and address. If filled in, then it have to be filled in full. Used in foreign payments. */
  intermediaryBankNameAndAddress?: PaymentIntermediaryBankNameAndAddress;
  /** Intermediary bank BIC. */
  intermediaryBankBic?: string;
  /** If not provided, for Finnish foreign payment it will be automatically set to BOTH_PAY_OWN_FEES. */
  serviceCharge?: "BOTH_PAY_OWN_FEES" | "PAYER_PAY_BOTH_FEES";
  /** Currency code. */
  currencyCode:
    | "AED"
    | "AFN"
    | "ALL"
    | "AMD"
    | "ANG"
    | "AOA"
    | "ARS"
    | "ATS"
    | "AUD"
    | "AWG"
    | "AZN"
    | "BAM"
    | "BBD"
    | "BDT"
    | "BEF"
    | "BGN"
    | "BHD"
    | "BIF"
    | "BMD"
    | "BND"
    | "BOB"
    | "BOV"
    | "BRL"
    | "BSD"
    | "BTN"
    | "BWP"
    | "BYN"
    | "BZD"
    | "CAD"
    | "CDF"
    | "CHE"
    | "CHF"
    | "CHW"
    | "CLF"
    | "CLP"
    | "CNH"
    | "CNT"
    | "CNY"
    | "COP"
    | "COU"
    | "CRC"
    | "CUC"
    | "CUP"
    | "CVE"
    | "CYP"
    | "CZK"
    | "DEM"
    | "DJF"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EEK"
    | "EGP"
    | "ERN"
    | "ESP"
    | "ETB"
    | "EUR"
    | "FIM"
    | "FJD"
    | "FKP"
    | "FRF"
    | "GBP"
    | "GEL"
    | "GGP"
    | "GHS"
    | "GIP"
    | "GMD"
    | "GNF"
    | "GRD"
    | "GTQ"
    | "GYD"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HTG"
    | "HUF"
    | "IDR"
    | "IEP"
    | "ILS"
    | "IMP"
    | "INR"
    | "IQD"
    | "IRR"
    | "ISK"
    | "ITL"
    | "JEP"
    | "JMD"
    | "JOD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KHR"
    | "KID"
    | "KMF"
    | "KPW"
    | "KRW"
    | "KWD"
    | "KYD"
    | "KZT"
    | "LAK"
    | "LBP"
    | "LKR"
    | "LRD"
    | "LSL"
    | "LTL"
    | "LUF"
    | "LVL"
    | "LYD"
    | "MAD"
    | "MDL"
    | "MGA"
    | "MKD"
    | "MMK"
    | "MNT"
    | "MOP"
    | "MRO"
    | "MTL"
    | "MUR"
    | "MVR"
    | "MWK"
    | "MXN"
    | "MXV"
    | "MYR"
    | "MZN"
    | "NAD"
    | "NGN"
    | "NIO"
    | "NIS"
    | "NLG"
    | "NOK"
    | "NPR"
    | "NTD"
    | "NZD"
    | "OMR"
    | "PAB"
    | "PEN"
    | "PGK"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PRB"
    | "PTE"
    | "PYG"
    | "QAR"
    | "RMB"
    | "RON"
    | "RSD"
    | "RUB"
    | "RWF"
    | "SAR"
    | "SBD"
    | "SCR"
    | "SDG"
    | "SEK"
    | "SGD"
    | "SHP"
    | "SIT"
    | "SKK"
    | "SLL"
    | "SLS"
    | "SOS"
    | "SRD"
    | "SSP"
    | "STN"
    | "SVC"
    | "SYP"
    | "SZL"
    | "THB"
    | "TJS"
    | "TMT"
    | "TND"
    | "TOP"
    | "TRY"
    | "TTD"
    | "TVD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "USN"
    | "UYI"
    | "UYU"
    | "UYW"
    | "UZS"
    | "VES"
    | "VND"
    | "VUV"
    | "WST"
    | "XAF"
    | "XAG"
    | "XAU"
    | "XBA"
    | "XBB"
    | "XBC"
    | "XBD"
    | "XCD"
    | "XDR"
    | "XOF"
    | "XPD"
    | "XPF"
    | "XPT"
    | "XSU"
    | "XTS"
    | "XUA"
    | "XXX"
    | "YER"
    | "ZAR"
    | "ZMW"
    | "ZWB"
    | "ZWL";
  /**
   * Custom identifier of each direct bank transfer with a maximum length of 64. It's externally provided for easierassigning of transactions to payments.
   * @minLength 1
   * @maxLength 64
   */
  customId?: string;
}

export interface DirectBankTransferList {
  /**
   * List containing DirectBankTransfer objects.
   * @maxItems 2147483647
   * @minItems 1
   */
  directBankTransfers: DirectBankTransfer[];
}

/** List containing DirectSalaryPayment objects. */
export interface DirectSalaryPayment {
  /**
   * The amount of the payment in the given currency. Currency is defined within the invoice, which identifier is set in invoiceId field.
   * @min 0
   * @exclusiveMin true
   */
  amount: number;
  /**
   * Bank reference code.
   * @minLength 0
   * @maxLength 40
   */
  bankReferenceCode?: string;
  /** Reference code generation type. If type not allowed for a user country will be given, then 400 is returned */
  bankReferenceCodeType?: "RF" | "FI" | "OCR" | "KID" | "GIK01" | "GIK04" | "GIK15" | "FIK71" | "FIK73" | "FIK75";
  /**
   * Message for the payment, if reference payment is not used.
   * @minLength 0
   * @maxLength 140
   */
  message?: string;
  /**
   * Bank account number of the recipient.
   * @minLength 0
   * @maxLength 80
   */
  recipientBankAccount: string;
  /**
   * BIC code of recipient bank account number.
   * @minLength 0
   * @maxLength 80
   */
  recipientBicCode?: string;
  /**
   * The recipient name.
   * @minLength 1
   * @maxLength 80
   */
  recipientName: string;
  /** Company identifier of current company. */
  recipientCode: BusinessIdentifier;
  /**
   * The code of the currency.
   * @example "EUR"
   */
  currencyCode: "EUR";
  /**
   * Custom id for the payment.
   * @minLength 1
   * @maxLength 64
   */
  customId: string;
}

export interface DirectSalaryPaymentGroup {
  /**
   * Id of the payment list.
   * @format int32
   */
  id?: number;
  /** List name. */
  listName?: string;
  /**
   * List creation time.
   * @format date-time
   */
  created?: string;
  /** Payment status. */
  status?:
    | "PAID"
    | "PAYMENT_QUEUED"
    | "PAYMENT_SENT_TO_BANK"
    | "PAYMENT_TRANSACTION_CANCELLED"
    | "PAYMENT_TRANSACTION_REMOVED";
  /** Payment method. */
  paymentMethod?: "FINNISH_SALARY_TRANSFER";
  /**
   * Date of the payment
   * @format date-time
   */
  paymentDate?: string;
  /** Bank account number of the payer */
  payerBankAccount?: string;
  /** Total sum of the payments */
  totalSum?: number;
  /** Custom identifier of the payment list. */
  customId?: string;
  /** List of the payment IDs */
  payments?: PaymentBasicInfo[];
}

/** Search results. */
export interface DirectSalaryPaymentGroupBaseInfo {
  /**
   * Id of the payment list.
   * @format int32
   */
  id?: number;
  /** List name. */
  listName?: string;
  /**
   * List creation time.
   * @format date-time
   */
  created?: string;
  /** Payment status. */
  status?:
    | "PAID"
    | "PAYMENT_QUEUED"
    | "PAYMENT_SENT_TO_BANK"
    | "PAYMENT_TRANSACTION_CANCELLED"
    | "PAYMENT_TRANSACTION_REMOVED";
  /** Payment method. */
  paymentMethod?: "FINNISH_SALARY_TRANSFER";
  /**
   * Date of the payment
   * @format date-time
   */
  paymentDate?: string;
  /** Bank account number of the payer */
  payerBankAccount?: string;
  /** Total sum of the payments */
  totalSum?: number;
  /** Custom identifier of the payment list. */
  customId?: string;
}

export interface DirectSalaryPaymentGroupBaseInfoSearchResult {
  /** Search results. */
  results?: DirectSalaryPaymentGroupBaseInfo[];
  /** Search result metadata. */
  meta?: SearchResultMetaData;
}

export interface DirectSalaryPayments {
  /**
   * Name of the direct salary payment list. Can be used for list identification.
   * @minLength 1
   * @maxLength 80
   */
  listName: string;
  /** Name of the payment method. Used for all payments. */
  paymentMethod: "FINNISH_SALARY_TRANSFER";
  /**
   * Date specifying when the payment transaction has to be performed. Payment date should be grater then current date. Used for all payments.
   * @format date
   * @example "2019-09-07"
   */
  paymentDate: string;
  /** Bank account number of the person making the payment. The payer bank account has to be predefined in the environment to be able to use the payment. Used for all payments. If not set, then default payment bank account for environment is taken. */
  payerBankAccount?: string;
  /**
   * Optional custom identifier of the list. It can be used later to get list by this id.
   * @minLength 1
   * @maxLength 80
   */
  customId?: string;
  /**
   * List containing DirectSalaryPayment objects.
   * @maxItems 2147483647
   * @minItems 1
   */
  payments: DirectSalaryPayment[];
}

/** These are possible response models */
export interface DirectSalaryPaymentsConfirmationResponseModels {
  PaymentGroup?: DirectSalaryPaymentGroup;
  /** Response information message */
  InfoMessage?: InfoMessage;
}

/** Search results. */
export interface Document {
  /**
   * ID of the attachment.
   * @format int32
   */
  attachmentId?: number;
  /** Name of the attached file. */
  name?: string;
  /**
   * Size of the attached file in bytes.
   * @format int32
   */
  size?: number;
  /** Attachment user. */
  user?: string;
  /**
   * Attachment reference Id
   * @format int32
   */
  referenceId?: number;
  /** Attachment reference type */
  referenceType?:
    | "BANKSTATEMENTEVENT"
    | "COST_RECEIPT"
    | "CUSTOMER_BUSINESS_PARTNER_REGISTER"
    | "EMPLOYEE_INFO"
    | "ENVIRONMENT"
    | "FINANCIAL_STATEMENT"
    | "INVOICE"
    | "INVOICEDRAFT_ITEM"
    | "LEDGERRECEIPT"
    | "NETS_COLLECTION"
    | "PERSON_BUSINESS_PARTNER_REGISTER"
    | "PURCHASE_PRODUCT_REGISTER"
    | "REFERENCE_PAYMENT"
    | "SALES_PRODUCT_REGISTER"
    | "SUPPLIER_BUSINESS_PARTNER_REGISTER";
  /**
   * Attaching time.
   * @format date-time
   */
  attached?: string;
}

export interface EInvoiceAddress {
  /** SALES_INVOICE Only. Operator code. Required if the invoiceChannel is ELECTRONIC_INVOICE and country is FINLAND. */
  operator?: string;
  /** SALES_INVOICE Only. EInvoice Address. Required if the invoiceChannel is ELECTRONIC_INVOICE, format must be valid for the specified country. */
  address?: string;
  /** SALES_INVOICE Only. EDI identifier. Used if the invoiceChannel is ELECTRONIC_INVOICE and country is FINLAND. */
  ediId?: string;
}

export interface EInvoiceData {
  /** Electronic invoice operator name. */
  operator?: string;
  /**
   * Electronic invoice operator ID.
   * @format int32
   */
  operatorId?: number;
  /** Sending address of operator. */
  sendingAddress?: string;
  /** Receiving address of operator */
  receivingAddress?: string;
  /** `true`, if the receiving address is public in Tieke  */
  receivingAddressPublicInTieke?: boolean;
  /** Electronic Data Interchange ID of operator */
  edi?: string;
  /** Latest date when invoicer announcement was created or updated */
  invoicerAnnouncementUpdated?: string;
  /** Date when electronic invoice operator was added */
  created?: string;
  /** User who has added the electronic invoice operator */
  creator?: string;
  /** Web service customer number */
  wsCustomerNumber?: string;
}

/** Search results. */
export interface Employee {
  /**
   * Unique employee identifier.
   * @format int64
   */
  id?: number;
  /** Employee last name. */
  lastName?: string;
  /** Employee first name. */
  firstName?: string;
  /** Employee SSN id, it can be also Finnish business id. */
  ssn?: string;
  /** Address of Person. */
  employeeAddress?: PersonBasicAddress;
  /** Person number. */
  personNumber?: string;
  /** The channel which is used for delivering Salary Slips for the given Employee. */
  salaryChannel?: "EMAIL" | "ESALARY" | "MAIL" | "MOBILE" | "NO_SENDING" | "PAPER";
  /** Automated Tax Card. */
  automatedTaxCard?: boolean;
  /** Status of the Employee. */
  active?: boolean;
}

export interface EmployeeSearchResult {
  /** Search results. */
  results?: Employee[];
  /** Search result metadata. */
  meta?: SearchResultMetaData;
}

/** Information about error handling. Can be empty if message is not handled yet. */
export interface ErrorHandlingInfo {
  /**
   * Date when the error message was handled.
   * @format date
   */
  date?: string;
  /**
   * Unique identifier of the user who handled the error message.
   * @format int32
   */
  userId?: number;
  /** First name of the user who handled the error message. */
  firstName?: string;
  /** Last name of the user who handled the error message. */
  lastName?: string;
  /** Additional comment for handling the error message. */
  comment?: string;
}

/** List of error messages. */
export interface ErrorMessage {
  /**
   * HTTP response status.
   * @format int32
   */
  status?: number;
  /** Field path of violation. */
  field?: string;
  /** Validation error code or description.  */
  message?: string;
  /** Data model for which constraint violations occurred. */
  model?: DataModel;
}

export interface ErrorMessages {
  /** List of error messages. */
  errors?: ErrorMessage[];
}

/** Invoice extra info. */
export interface ExtraInfo {
  /** Indicates if accounting by row is used (true) or not (false). Accounting by row means that a separate ledger transaction is created for each invoice row. */
  accountingByRow: boolean;
  /** Indicates if the unit prices on invoice rows include VAT (true) or not (false). */
  unitPricesIncludeVat: boolean;
}

/** Search results. */
export interface FactoringContract {
  /**
   * Factoring contract identifier.
   * @format int32
   */
  id?: number;
  /** Financing company information. */
  financingCompany: FinancingCompany;
  /** Financing company bank account. */
  financingCompanyBankAccount: string;
  /**
   * Agreegment number.
   * @minLength 1
   * @maxLength 80
   */
  contractNumber: string;
  /**
   * Bank reference code separator.
   * @minLength 0
   * @maxLength 10
   */
  bankReferenceCodeSeparator?: string;
  /** Personal Finvoice address.  */
  personalFinvoiceAddress?: string;
  /** Financing company Finvoice address. */
  financingCompanyFinvoiceAddress?: string;
  /** OP Factoring counter account. */
  factoringCounterAccount?: string;
  /** Transfer notifications. */
  transferNotification?: TransferNotification[];
  /** WS customer number. */
  wsCustomerNumber?: string;
  /** Contract status. */
  status: "ACTIVE" | "INACTIVE";
}

export interface FactoringContractSearchResult {
  /** Search results. */
  results?: FactoringContract[];
  /** Search result metadata. */
  meta?: SearchResultMetaData;
}

/** Financing company information. */
export interface FinancingCompany {
  /** Financing company code */
  id?: string;
  /** Financing company name */
  name?: string;
}

/** List of fiscal years. */
export interface FiscalYear {
  /**
   * Unique identifier of the fiscal year.
   * @format int32
   */
  id?: number;
  /**
   * Start date of the fiscal year.
   * @format date
   */
  startDate?: string;
  /**
   * End date of the fiscal year
   * @format date
   */
  endDate?: string;
  /**
   * Time of last edition of fiscal year.
   * @format date-time
   */
  modified?: string;
  /** List of tracking periods contained in the fiscal year. */
  trackingPeriods?: TrackingPeriod[];
  /** Whether the fiscal year is open (true) or closed (false). */
  isOpen?: boolean;
}

export interface FiscalYears {
  /** List of fiscal years. */
  fiscalYears?: FiscalYear[];
}

/** Report data. */
export interface GeneralLedgerReportData {
  /** Ledger account code. */
  id?: string;
  /** Ledger account name. */
  name?: string;
  /** Sum of accounting value in this ledger account. */
  totalAccountingValue?: number;
  /** Ledger receipt transactions. */
  ledgerReceiptTransactions?: AccountingReportTransaction[];
}

/** Report parameters that were used to generate the report. */
export interface GeneralLedgerReportRequest {
  /**
   * Report start date. Optional, if missing, starting date of the tracking period 'endDate' is in will be used. (financial year if not available)
   * @format date
   */
  startDate?: string;
  /**
   * Report end date.
   * @format date
   */
  endDate: string;
  /**
   * List of receipt statuses for report. Default value depends on company rights.
   * @example ["APPROVED","SENT","PAID","UNFINISHED"]
   */
  receiptStatus?: (
    | "APPROVED"
    | "SENT"
    | "NOT_SENT"
    | "PAYMENT_SENT_TO_BANK"
    | "PAID"
    | "PARTLY_PAID,"
    | "MARKED_PAID"
    | "PAYMENT_QUEUED"
    | "PAYMENT_DENIED"
    | "UNFINISHED"
    | "VERIFIED"
    | "RECEIVED"
  )[];
  /** Report request options. */
  options?: GeneralLedgerReportRequestOptions;
}

/** Report request options. */
export interface GeneralLedgerReportRequestOptions {
  /**
   * Receipt types that will be included in the report.
   * @default ["SALES_INVOICE","PURCHASE_INVOICE","TRAVEL_INVOICE","BILL_OF_CHARGES","JOURNAL","SALARY","VAT_FORM","EMPLOYER_CONTRIBUTION","PERIODIC_TAX_RETURN","VAT_SUMMARY","SALES_ORDER","PURCHASE_ORDER","REFERENCE_PAYMENT","BANK_STATEMENT_AS_RECEIPT","RECEIPT_FOR_OPENING_ACCOUNTS"]
   * @example ["SALES_INVOICE","PURCHASE_INVOICE","TRAVEL_INVOICE"]
   */
  receiptType?: (
    | "SALES_INVOICE"
    | "PURCHASE_INVOICE"
    | "TRAVEL_INVOICE"
    | "BILL_OF_CHARGES"
    | "JOURNAL"
    | "SALARY"
    | "VAT_FORM"
    | "EMPLOYER_CONTRIBUTION"
    | "PERIODIC_TAX_RETURN"
    | "VAT_SUMMARY"
    | "SALES_ORDER"
    | "PURCHASE_ORDER"
    | "REFERENCE_PAYMENT"
    | "BANK_STATEMENT_AS_RECEIPT"
    | "RECEIPT_FOR_OPENING_ACCOUNTS"
  )[];
  /**
   * Currency for the receipt in ISO 4217 format.
   * @example "EUR"
   */
  receiptCurrency?:
    | "AED"
    | "AFN"
    | "ALL"
    | "AMD"
    | "ANG"
    | "AOA"
    | "ARS"
    | "ATS"
    | "AUD"
    | "AWG"
    | "AZN"
    | "BAM"
    | "BBD"
    | "BDT"
    | "BEF"
    | "BGN"
    | "BHD"
    | "BIF"
    | "BMD"
    | "BND"
    | "BOB"
    | "BOV"
    | "BRL"
    | "BSD"
    | "BTN"
    | "BWP"
    | "BYN"
    | "BZD"
    | "CAD"
    | "CDF"
    | "CHE"
    | "CHF"
    | "CHW"
    | "CLF"
    | "CLP"
    | "CNH"
    | "CNT"
    | "CNY"
    | "COP"
    | "COU"
    | "CRC"
    | "CUC"
    | "CUP"
    | "CVE"
    | "CYP"
    | "CZK"
    | "DEM"
    | "DJF"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EEK"
    | "EGP"
    | "ERN"
    | "ESP"
    | "ETB"
    | "EUR"
    | "FIM"
    | "FJD"
    | "FKP"
    | "FRF"
    | "GBP"
    | "GEL"
    | "GGP"
    | "GHS"
    | "GIP"
    | "GMD"
    | "GNF"
    | "GRD"
    | "GTQ"
    | "GYD"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HTG"
    | "HUF"
    | "IDR"
    | "IEP"
    | "ILS"
    | "IMP"
    | "INR"
    | "IQD"
    | "IRR"
    | "ISK"
    | "ITL"
    | "JEP"
    | "JMD"
    | "JOD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KHR"
    | "KID"
    | "KMF"
    | "KPW"
    | "KRW"
    | "KWD"
    | "KYD"
    | "KZT"
    | "LAK"
    | "LBP"
    | "LKR"
    | "LRD"
    | "LSL"
    | "LTL"
    | "LUF"
    | "LVL"
    | "LYD"
    | "MAD"
    | "MDL"
    | "MGA"
    | "MKD"
    | "MMK"
    | "MNT"
    | "MOP"
    | "MRO"
    | "MTL"
    | "MUR"
    | "MVR"
    | "MWK"
    | "MXN"
    | "MXV"
    | "MYR"
    | "MZN"
    | "NAD"
    | "NGN"
    | "NIO"
    | "NIS"
    | "NLG"
    | "NOK"
    | "NPR"
    | "NTD"
    | "NZD"
    | "OMR"
    | "PAB"
    | "PEN"
    | "PGK"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PRB"
    | "PTE"
    | "PYG"
    | "QAR"
    | "RMB"
    | "RON"
    | "RSD"
    | "RUB"
    | "RWF"
    | "SAR"
    | "SBD"
    | "SCR"
    | "SDG"
    | "SEK"
    | "SGD"
    | "SHP"
    | "SIT"
    | "SKK"
    | "SLL"
    | "SLS"
    | "SOS"
    | "SRD"
    | "SSP"
    | "STN"
    | "SVC"
    | "SYP"
    | "SZL"
    | "THB"
    | "TJS"
    | "TMT"
    | "TND"
    | "TOP"
    | "TRY"
    | "TTD"
    | "TVD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "USN"
    | "UYI"
    | "UYU"
    | "UYW"
    | "UZS"
    | "VES"
    | "VND"
    | "VUV"
    | "WST"
    | "XAF"
    | "XAG"
    | "XAU"
    | "XBA"
    | "XBB"
    | "XBC"
    | "XBD"
    | "XCD"
    | "XDR"
    | "XOF"
    | "XPD"
    | "XPF"
    | "XPT"
    | "XSU"
    | "XTS"
    | "XUA"
    | "XXX"
    | "YER"
    | "ZAR"
    | "ZMW"
    | "ZWB"
    | "ZWL";
  /** Receipt name that will be used in the report. */
  receiptName?: string;
  /**
   * Entry period start date that will be used in the report. Date will be rounded down to start of the month.
   * @format date
   */
  entryPeriodStart?: string;
  /**
   * Entry period end date that will be used in the report. Date will be rounded up to end of the month.
   * @format date
   */
  entryPeriodEnd?: string;
  /** Transaction value that will be used in the report. */
  transactionValue?: string;
  /**
   * Transaction currency that will be used in the report. Not considered if transaction value is not given.
   * @default "EUR"
   */
  transactionCurrency?:
    | "AED"
    | "AFN"
    | "ALL"
    | "AMD"
    | "ANG"
    | "AOA"
    | "ARS"
    | "ATS"
    | "AUD"
    | "AWG"
    | "AZN"
    | "BAM"
    | "BBD"
    | "BDT"
    | "BEF"
    | "BGN"
    | "BHD"
    | "BIF"
    | "BMD"
    | "BND"
    | "BOB"
    | "BOV"
    | "BRL"
    | "BSD"
    | "BTN"
    | "BWP"
    | "BYN"
    | "BZD"
    | "CAD"
    | "CDF"
    | "CHE"
    | "CHF"
    | "CHW"
    | "CLF"
    | "CLP"
    | "CNH"
    | "CNT"
    | "CNY"
    | "COP"
    | "COU"
    | "CRC"
    | "CUC"
    | "CUP"
    | "CVE"
    | "CYP"
    | "CZK"
    | "DEM"
    | "DJF"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EEK"
    | "EGP"
    | "ERN"
    | "ESP"
    | "ETB"
    | "EUR"
    | "FIM"
    | "FJD"
    | "FKP"
    | "FRF"
    | "GBP"
    | "GEL"
    | "GGP"
    | "GHS"
    | "GIP"
    | "GMD"
    | "GNF"
    | "GRD"
    | "GTQ"
    | "GYD"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HTG"
    | "HUF"
    | "IDR"
    | "IEP"
    | "ILS"
    | "IMP"
    | "INR"
    | "IQD"
    | "IRR"
    | "ISK"
    | "ITL"
    | "JEP"
    | "JMD"
    | "JOD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KHR"
    | "KID"
    | "KMF"
    | "KPW"
    | "KRW"
    | "KWD"
    | "KYD"
    | "KZT"
    | "LAK"
    | "LBP"
    | "LKR"
    | "LRD"
    | "LSL"
    | "LTL"
    | "LUF"
    | "LVL"
    | "LYD"
    | "MAD"
    | "MDL"
    | "MGA"
    | "MKD"
    | "MMK"
    | "MNT"
    | "MOP"
    | "MRO"
    | "MTL"
    | "MUR"
    | "MVR"
    | "MWK"
    | "MXN"
    | "MXV"
    | "MYR"
    | "MZN"
    | "NAD"
    | "NGN"
    | "NIO"
    | "NIS"
    | "NLG"
    | "NOK"
    | "NPR"
    | "NTD"
    | "NZD"
    | "OMR"
    | "PAB"
    | "PEN"
    | "PGK"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PRB"
    | "PTE"
    | "PYG"
    | "QAR"
    | "RMB"
    | "RON"
    | "RSD"
    | "RUB"
    | "RWF"
    | "SAR"
    | "SBD"
    | "SCR"
    | "SDG"
    | "SEK"
    | "SGD"
    | "SHP"
    | "SIT"
    | "SKK"
    | "SLL"
    | "SLS"
    | "SOS"
    | "SRD"
    | "SSP"
    | "STN"
    | "SVC"
    | "SYP"
    | "SZL"
    | "THB"
    | "TJS"
    | "TMT"
    | "TND"
    | "TOP"
    | "TRY"
    | "TTD"
    | "TVD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "USN"
    | "UYI"
    | "UYU"
    | "UYW"
    | "UZS"
    | "VES"
    | "VND"
    | "VUV"
    | "WST"
    | "XAF"
    | "XAG"
    | "XAU"
    | "XBA"
    | "XBB"
    | "XBC"
    | "XBD"
    | "XCD"
    | "XDR"
    | "XOF"
    | "XPD"
    | "XPF"
    | "XPT"
    | "XSU"
    | "XTS"
    | "XUA"
    | "XXX"
    | "YER"
    | "ZAR"
    | "ZMW"
    | "ZWB"
    | "ZWL";
  /** Language that will be used in the report. */
  reportLanguage?: string;
  /** Receipt Numbers that will be used in the general ledger report. */
  receiptNumbers?: string;
  /** Transaction Description that will be used in the general ledger report. */
  transactionDescription?: string;
}

export interface GeneralLedgerReportResponse {
  /** Report parameters that were used to generate the report. */
  reportParameters?: GeneralLedgerReportRequest;
  /** Report data. */
  ledgerAccount?: GeneralLedgerReportData;
}

/** Incomes register info. */
export interface IncomesRegisterConfiguration {
  /**
   * Unique identifier of incomes register configuration.
   * @format int64
   */
  id?: number;
  /** Keva: Suborganisation ID. */
  kevaSuborganisationId?: string;
  /** Payer types. */
  payerTypes?: (
    | "PUBLIC_SECTOR"
    | "HOUSEHOLD"
    | "FOREIGN_GROUP_COMPANY"
    | "STATE"
    | "UNINCORPORATED_STATE_ENTERPRISE"
    | "TEMPORARY_EMPLOYER"
    | "POOL_OF_HOUSEHOLDS"
  )[];
  /**
   * Version.
   * @format date-time
   */
  version?: string;
}

/** Response information message */
export interface InfoMessage {
  /** Message with detail information about a result of action. */
  message?: string;
}

export interface Invoice {
  /**
   * Unique identifier of the invoice. Generated by Procountor and present in the object returned.
   * @format int32
   */
  id?: number;
  /**
   * Technical ID for the business partner. Used to link the invoice to a customer or supplier in the business partner register. If supplied, the company must have this partner ID in the corresponding register. This field is not editable in PUT /invoices endpoint.
   * @format int32
   */
  partnerId?: number;
  /** Invoice type. Note that this affects validation requirements. PERIODIC_TAX_RETURN is supported only by GET /invoices endpoint. It's not supported by PUT and POST /invoices endpoints. */
  type:
    | "SALES_INVOICE"
    | "SALES_ORDER"
    | "PURCHASE_INVOICE"
    | "PURCHASE_ORDER"
    | "TRAVEL_INVOICE"
    | "BILL_OF_CHARGES"
    | "PERIODIC_TAX_RETURN";
  /**
   * Invoice status. A new invoice created through the API will have its status set as UNFINISHED. Updating invoice is possible when its status is UNFINISHED. Updating expense claim, purchase, purchase order and travel invoice is possible when the status is UNFINISHED or RECEIVED. PUT /invoices endpoint is not able to change invoice status.
   * @example "UNFINISHED"
   */
  status?:
    | "EMPTY"
    | "UNFINISHED"
    | "NOT_SENT"
    | "SENT"
    | "RECEIVED"
    | "PAID"
    | "PAYMENT_DENIED"
    | "VERIFIED"
    | "APPROVED"
    | "INVALIDATED"
    | "PAYMENT_QUEUED"
    | "PARTLY_PAID"
    | "PAYMENT_SENT_TO_BANK"
    | "MARKED_PAID"
    | "STARTED"
    | "INVOICED"
    | "OVERRIDDEN"
    | "DELETED"
    | "UNSAVED"
    | "PAYMENT_TRANSACTION_REMOVED";
  /**
   * Invoice date. This is synonymous to billing date.
   * @format date
   */
  date: string;
  /**
   * Date of the latest payment transaction related to the invoice. Set automatically when payments are made and can't be modified directly.
   * @format date
   */
  paymentDate?: string;
  /** This object holds information about the counterparty of the invoice. With sales invoices and sales orders, it is the buyer. With purchase invoices and purchase orders it is the seller. With travel and expense invoices, it is the reporter of the expenses */
  counterParty: CounterParty;
  /** The address where the invoice should be sent. If omitted for sales invoice, assumed to equal the counter party address. If billing address is not needed for sales invoice, please send an empty value: billingAddress:{}. Note: For purchase invoice and purchase order, this is a billing delivery address and corresponds to the 'Buyer delivery address' section on UI. */
  billingAddress?: InvoiceBillingAddress;
  /** The address where the goods should be delivered. If omitted for a sales or purchase invoice, assumed to equal the counter party address. If delivery address is not needed for sales or purchase invoice, please send an empty value: deliveryAddress:{}. Note: This value has no correspondence on the UI with purchase invoices and purchase orders. For defining a delivery address for a purchase invoice or purchase order, use the billingAddress property instead. */
  deliveryAddress?: InvoiceDeliveryAddress;
  /** Invoice payment info. Includes the bank account to which the invoice should be paid, how it should be paid and when it should be paid. */
  paymentInfo: PaymentInfo;
  /** Invoice delivery terms info. */
  deliveryTermsInfo?: DeliveryTermsInfo;
  /** Invoice extra info. */
  extraInfo: ExtraInfo;
  /**
   * Invoice discount percentage. Scale: 4.
   * @multipleOf 4
   * @max 100
   */
  discountPercent: number;
  /**
   * Order reference of the invoice. This will be copied to the payment as message if no reference code is specified.
   * @minLength 0
   * @maxLength 70
   */
  orderReference?: string;
  /** Invoice rows. An invoice should always have at least one row. The only exception are PERIODIC_TAX_RETURN invoices which do not have any invoice rows. */
  invoiceRows: InvoiceRow[];
  /**
   * Invoice number generated by Procountor. For custom invoice numbers, see the originalInvoiceNumber property.
   * @format int32
   */
  invoiceNumber?: number;
  /**
   * Invoice VAT status. Required for all invoices except travel invoices and expense claims.
   * @format int32
   */
  vatStatus?: number;
  /**
   * Invoice number from the biller in an external system.
   * @minLength 0
   * @maxLength 40
   */
  originalInvoiceNumber?: string;
  /**
   * First day of the delivery period.
   * @format date
   */
  deliveryStartDate?: string;
  /**
   * Last day of the delivery period.
   * @format date
   */
  deliveryEndDate?: string;
  /** Delivery method for the goods. SALES_INVOICE and SALES_ORDER do not support type OTHER. */
  deliveryMethod?: "MAILING" | "ONLINE" | "COURIER" | "VRCARGO" | "BUS" | "FREIGHT" | "RETRIEVABLE" | "OTHER";
  /**
   * Delivery instructions.
   * @minLength 0
   * @maxLength 255
   */
  deliveryInstructions?: string;
  /** Channel of distribution for the invoice. Values EDIFACT and PAPER_INVOICE are not allowed for POST /invoices and PUT /invoices endpoints. */
  invoiceChannel: "EMAIL" | "MAIL" | "ELECTRONIC_INVOICE" | "EDIFACT" | "PAPER_INVOICE" | "NO_SENDING";
  /** Invoice operator related information. It is a read-only property shown only for purchase invoices. */
  invoiceOperatorInfo?: InvoiceOperatorInfo;
  /**
   * Penal interest rate. Scale: 2.
   * @multipleOf 2
   */
  penaltyPercent?: number;
  /** Language of the invoice. Required for sales invoices and sales orders, otherwise ignored. */
  language?: "DANISH" | "ENGLISH" | "ESTONIAN" | "FINNISH" | "NORWEGIAN" | "SWEDISH";
  /**
   * SALES_INVOICE and SALES_ORDER only. ID of invoice template.
   * @format int32
   */
  invoiceTemplateId?: number;
  /**
   * Invoice notes containing additional information. Visible on the invoice. Use \n as line break.
   * @minLength 0
   * @maxLength 10000
   */
  additionalInformation?: string;
  /**
   * Country code describing which country's VAT standards are being used. Usage of foreign VAT settings must be agreed on separately with Procountor. Required if the company uses foreign VATs. Example value: SWEDEN.See Address.country in POST/PUT /invoices for a list of allowable values
   * @example "SWEDEN"
   */
  vatCountry?:
    | "AFGHANISTAN"
    | "ALAND_ISLANDS"
    | "ALBANIA"
    | "ALGERIA"
    | "AMERICAN_SAMOA"
    | "ANDORRA"
    | "ANGOLA"
    | "ANGUILLA"
    | "ANTARCTICA"
    | "ANTIGUA_AND_BARBUDA"
    | "ARGENTINA"
    | "ARMENIA"
    | "ARUBA"
    | "ASCENSION_AND_TRISTAN_DA_CUNHA_SAINT_HELENA"
    | "AUSTRALIA"
    | "AUSTRIA"
    | "AZERBAIJAN"
    | "BAHAMAS"
    | "BAHRAIN"
    | "BANGLADESH"
    | "BARBADOS"
    | "BELARUS"
    | "BELGIUM"
    | "BELIZE"
    | "BENIN"
    | "BERMUDA"
    | "BHUTAN"
    | "BOLIVARIAN_REPUBLIC_OF_VENEZUELA"
    | "BOSNIA_AND_HERZEGOVINA"
    | "BOTSWANA"
    | "BOUVET_ISLAND"
    | "BRAZIL"
    | "BRITISH_INDIAN_OCEAN_TERRITORY"
    | "BRITISH_VIRGIN_ISLANDS"
    | "BRUNEI_DARUSSALAM"
    | "BULGARIA"
    | "BURKINA_FASO"
    | "BURUNDI"
    | "CABO_VERDE"
    | "CAMBODIA"
    | "CAMEROON"
    | "CANADA"
    | "CAYMAN_ISLANDS"
    | "CENTRAL_AFRICAN_REPUBLIC"
    | "CHAD"
    | "CHILE"
    | "CHINA"
    | "CHRISTMAS_ISLAND"
    | "COCOS_KEELING_ISLANDS"
    | "COLOMBIA"
    | "COMOROS"
    | "CONGO"
    | "COOK_ISLANDS"
    | "COSTA_RICA"
    | "COTE_D_IVOIRE"
    | "CROATIA"
    | "CUBA"
    | "CURACAO"
    | "CYPRUS"
    | "CZECH_REPUBLIC"
    | "DEMOCRATIC_PEOPLE_S_REPUBLIC_OF_KOREA"
    | "DENMARK"
    | "DJIBOUTI"
    | "DOMINICA"
    | "DOMINICAN_REPUBLIC"
    | "ECUADOR"
    | "EGYPT"
    | "EL_SALVADOR"
    | "EQUATORIAL_GUINEA"
    | "ERITREA"
    | "ESTONIA"
    | "ETHIOPIA"
    | "FALKLAND_ISLANDS_MALVINAS"
    | "FAROE_ISLANDS"
    | "FEDERATED_STATES_OF_MICRONESIA"
    | "FIJI"
    | "FINLAND"
    | "FRANCE"
    | "FRENCH_GUIANA"
    | "FRENCH_POLYNESIA"
    | "FRENCH_SOUTHERN_TERRITORIES"
    | "GABON"
    | "GAMBIA"
    | "GEORGIA"
    | "GERMANY"
    | "GHANA"
    | "GIBRALTAR"
    | "GREECE"
    | "GREENLAND"
    | "GRENADA"
    | "GUADELOUPE"
    | "GUAM"
    | "GUATEMALA"
    | "GUERNSEY"
    | "GUINEA"
    | "GUINEA_BISSAU"
    | "GUYANA"
    | "HAITI"
    | "HEARD_ISLAND_AND_MCDONALD_ISLANDS"
    | "HOLY_SEE_VATICAN_CITY_STATE"
    | "HONDURAS"
    | "HONG_KONG"
    | "HUNGARY"
    | "ICELAND"
    | "INDIA"
    | "INDONESIA"
    | "IRAQ"
    | "IRELAND"
    | "ISLAMIC_REPUBLIC_OF_IRAN"
    | "ISLE_OF_MAN"
    | "ISRAEL"
    | "ITALY"
    | "JAMAICA"
    | "JAPAN"
    | "JERSEY"
    | "JORDAN"
    | "KAZAKHSTAN"
    | "KENYA"
    | "KIRIBATI"
    | "KOSOVO_TEMPORARY"
    | "KUWAIT"
    | "KYRGYZSTAN"
    | "LAO_PEOPLE_S_DEMOCRATIC_REPUBLIC"
    | "LATVIA"
    | "LEBANON"
    | "LESOTHO"
    | "LIBERIA"
    | "LIBYA"
    | "LIECHTENSTEIN"
    | "LITHUANIA"
    | "LUXEMBOURG"
    | "MACAO"
    | "MADAGASCAR"
    | "MALAWI"
    | "MALAYSIA"
    | "MALDIVES"
    | "MALI"
    | "MALTA"
    | "MARSHALL_ISLANDS"
    | "MARTINIQUE"
    | "MAURITANIA"
    | "MAURITIUS"
    | "MAYOTTE"
    | "MEXICO"
    | "MONACO"
    | "MONGOLIA"
    | "MONTENEGRO"
    | "MONTSERRAT"
    | "MOROCCO"
    | "MOZAMBIQUE"
    | "MYANMAR"
    | "NAMIBIA"
    | "NAURU"
    | "NEPAL"
    | "NETHERLANDS"
    | "NEW_CALEDONIA"
    | "NEW_ZEALAND"
    | "NICARAGUA"
    | "NIGER"
    | "NIGERIA"
    | "NIUE"
    | "NORFOLK_ISLAND"
    | "NORTHERN_IRELAND_TEMPORARY"
    | "NORTHERN_MARIANA_ISLANDS"
    | "NORWAY"
    | "OMAN"
    | "PAKISTAN"
    | "PALAU"
    | "PANAMA"
    | "PAPUA_NEW_GUINEA"
    | "PARAGUAY"
    | "PERU"
    | "PHILIPPINES"
    | "PITCAIRN"
    | "PLURINATIONAL_STATE_OF_BOLIVIA"
    | "POLAND"
    | "PORTUGAL"
    | "PROVINCE_OF_CHINA_TAIWAN"
    | "PUERTO_RICO"
    | "QATAR"
    | "REPUBLIC_OF_KOREA"
    | "REPUBLIC_OF_MOLDOVA"
    | "REUNION"
    | "ROMANIA"
    | "RUSSIAN_FEDERATION"
    | "RWANDA"
    | "SAINT_BARTHELEMY"
    | "SAINT_KITTS_AND_NEVIS"
    | "SAINT_LUCIA"
    | "SAINT_MARTIN_FRENCH_PART"
    | "SAINT_PIERRE_AND_MIQUELON"
    | "SAINT_VINCENT_AND_THE_GRENADINES"
    | "SAMOA"
    | "SAN_MARINO"
    | "SAO_TOME_AND_PRINCIPE"
    | "SAUDI_ARABIA"
    | "SENEGAL"
    | "SERBIA"
    | "SEYCHELLES"
    | "SIERRA_LEONE"
    | "SINGAPORE"
    | "SINT_EUSTATIUS_AND_SABA_BONAIRE"
    | "SINT_MAARTEN_DUTCH_PART"
    | "SLOVAKIA"
    | "SLOVENIA"
    | "SOLOMON_ISLANDS"
    | "SOMALIA"
    | "SOUTH_AFRICA"
    | "SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS"
    | "SOUTH_SUDAN"
    | "SPAIN"
    | "SRI_LANKA"
    | "STATE_OF_PALESTINE"
    | "SUDAN"
    | "SURINAME"
    | "SVALBARD_AND_JAN_MAYEN"
    | "SWAZILAND"
    | "SWEDEN"
    | "SWITZERLAND"
    | "SYRIAN_ARAB_REPUBLIC"
    | "TAJIKISTAN"
    | "THAILAND"
    | "THE_DEMOCRATIC_REPUBLIC_OF_THE_CONGO"
    | "THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA"
    | "TIMOR_LESTE"
    | "TOGO"
    | "TOKELAU"
    | "TONGA"
    | "TRINIDAD_AND_TOBAGO"
    | "TUNISIA"
    | "TURKEY"
    | "TURKMENISTAN"
    | "TURKS_AND_CAICOS_ISLANDS"
    | "TUVALU"
    | "UGANDA"
    | "UKRAINE"
    | "UNITED_ARAB_EMIRATES"
    | "UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND"
    | "UNITED_REPUBLIC_OF_TANZANIA"
    | "UNITED_STATES_MINOR_OUTLYING_ISLANDS"
    | "UNITED_STATES_OF_AMERICA"
    | "URUGUAY"
    | "UZBEKISTAN"
    | "U_S_VIRGIN_ISLANDS"
    | "VANUATU"
    | "VIET_NAM"
    | "WALLIS_AND_FUTUNA"
    | "WESTERN_SAHARA"
    | "YEMEN"
    | "ZAMBIA"
    | "ZIMBABWE";
  /**
   * ID of the ledger receipt linked to this invoice. A ledger receipt is linked to every invoice for holding its accounting information. For defining ledger accounts, dimensions or VAT status regarding the invoice, modify the ledger receipt. See PUT /ledgerreceipts for more info.
   * @format int32
   */
  ledgerReceiptId?: number;
  /**
   * Invoice notes (seller's/buyer's notes). Not visible on the invoice. Use \n as line break.
   * @minLength 0
   * @maxLength 10000
   */
  notes?: string;
  /**
   * SALES_INVOICE and SALES_ORDER only. ID for external financing agreement. The bankAccount.accountNumber specified must match the one used by the specified financing agreement. Financing agreements cannot be used with cash payments.
   * @format int32
   */
  factoringContractId?: number;
  /** SALES_INVOICE and SALES_ORDER only. Additional notes about external financing agreement. */
  factoringText?: string;
  /** Only for invoice type PERIODIC_TAX_RETURN. Ignored for other types. Contains the total sum of invoice. POST and PUT operation cannot assign/modify value of this property. */
  sum?: number;
  /** Travel information items. A travel invoice may have one or more travel information items containing departure date, return date, destinations and travel purpose. */
  travelInformationItems?: TravelInformationItem[];
  /** Invoice circulation related approval information. */
  invoiceApprovalInformation?: InvoiceApprovalInformation;
  /** List of attachments added to this invoice. Use POST and DELETE /attachments to add and delete attachments. */
  attachments?: Attachment[];
  /** Order number. Valid only in Finnish environments for SALES_INVOICE and PURCHASE_INVOICE. */
  orderNumber?: string;
  /** Agreement number. Valid only in Finnish environments for SALES_INVOICE and PURCHASE_INVOICE. */
  agreementNumber?: string;
  /** Accounting code. Valid only in Finnish environments for SALES_INVOICE and PURCHASE_INVOICE. */
  accountingCode?: string;
  /** Delivery site. Valid only in Finnish environments for SALES_INVOICE and PURCHASE_INVOICE. */
  deliverySite?: string;
  /** Tender reference. Valid only in Finnish environments for SALES_INVOICE and PURCHASE_INVOICE. */
  tenderReference?: string;
  /**
   * Invoice version. This field is required in the PUT /invoices/{invoiceId} endpoint.
   * @format date-time
   */
  version?: string;
  /** Invoice sum info. If the invoice has currency other than the one set for the environment, it returns sum for both the accounting and invoice currency. */
  invoiceSumInfo?: InvoiceSumInfo[];
  /** It marks invoice as an offer. It is applicable only to SALES_ORDER type of invoices. */
  isOffer?: boolean;
}

/** Invoice circulation related approval information. */
export interface InvoiceApprovalInformation {
  /** List of invoice acceptors. */
  acceptors?: InvoiceCheckerInformation[];
  /** List of invoice verifiers. */
  verifiers?: InvoiceCheckerInformation[];
}

/** Search results. */
export interface InvoiceBasicInfo {
  /**
   * Unique identifier of the invoice.
   * @format int32
   */
  id?: number;
  /**
   * Business partner id. Used to link the invoice to a customer or supplier in the business partner register.
   * @format int32
   */
  partnerId?: number;
  /**
   * Invoice type.
   * @example "PURCHASE_INVOICE"
   */
  type?:
    | "SALES_INVOICE"
    | "SALES_ORDER"
    | "PURCHASE_INVOICE"
    | "PURCHASE_ORDER"
    | "TRAVEL_INVOICE"
    | "BILL_OF_CHARGES"
    | "PERIODIC_TAX_RETURN";
  /**
   * Invoice status.
   * @example "UNFINISHED"
   */
  status?:
    | "EMPTY"
    | "UNFINISHED"
    | "NOT_SENT"
    | "SENT"
    | "RECEIVED"
    | "PAID"
    | "PAYMENT_DENIED"
    | "VERIFIED"
    | "APPROVED"
    | "INVALIDATED"
    | "PAYMENT_QUEUED"
    | "PARTLY_PAID"
    | "PAYMENT_SENT_TO_BANK"
    | "MARKED_PAID"
    | "STARTED"
    | "INVOICED"
    | "OVERRIDDEN"
    | "DELETED"
    | "UNSAVED"
    | "PAYMENT_TRANSACTION_REMOVED";
  /**
   * Invoice number generated by Procountor.
   * @format int32
   */
  invoiceNumber?: number;
  /** Invoice number from the biller in an external system. */
  originalInvoiceNumber?: string;
  /** Channel of distribution for the invoice. */
  invoiceChannel?: "EMAIL" | "MAIL" | "ELECTRONIC_INVOICE" | "EDIFACT" | "PAPER_INVOICE" | "NO_SENDING";
  /**
   * Invoice date. This is synonymous to billing date.
   * @format date
   */
  date?: string;
  /**
   * Invoice payment due date.
   * @format date
   */
  dueDate?: string;
  /**
   * Creation timestamp of the invoice. Automatically generated by Procountor.
   * @format date-time
   */
  created?: string;
  /**
   * Invoice version timestamp. Automatically generated by Procountor and updated every time the invoice is modified.
   * @format date-time
   */
  version?: string;
  /** Invoice sum info. If the invoice has currency other than the one set for the environment, it returns sum for both the accounting and invoice currency. */
  invoiceSumInfo?: InvoiceSumInfo[];
}

/** The address where the invoice should be sent. If omitted for sales invoice, assumed to equal the counter party address. If billing address is not needed for sales invoice, please send an empty value: billingAddress:{}. Note: For purchase invoice and purchase order, this is a billing delivery address and corresponds to the 'Buyer delivery address' section on UI. */
export interface InvoiceBillingAddress {
  /**
   * Name ("first line") in the address.
   * @minLength 0
   * @maxLength 80
   */
  name: string;
  /**
   * Specifier, such as c/o address.
   * @minLength 0
   * @maxLength 80
   */
  specifier?: string;
  /**
   * Street. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 80
   */
  street?: string;
  /**
   * Zip code. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 20
   */
  zip?: string;
  /**
   * City. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 40
   */
  city?: string;
  /**
   * Country.
   * @example "SWEDEN"
   */
  country?:
    | "AFGHANISTAN"
    | "ALAND_ISLANDS"
    | "ALBANIA"
    | "ALGERIA"
    | "AMERICAN_SAMOA"
    | "ANDORRA"
    | "ANGOLA"
    | "ANGUILLA"
    | "ANTARCTICA"
    | "ANTIGUA_AND_BARBUDA"
    | "ARGENTINA"
    | "ARMENIA"
    | "ARUBA"
    | "ASCENSION_AND_TRISTAN_DA_CUNHA_SAINT_HELENA"
    | "AUSTRALIA"
    | "AUSTRIA"
    | "AZERBAIJAN"
    | "BAHAMAS"
    | "BAHRAIN"
    | "BANGLADESH"
    | "BARBADOS"
    | "BELARUS"
    | "BELGIUM"
    | "BELIZE"
    | "BENIN"
    | "BERMUDA"
    | "BHUTAN"
    | "BOLIVARIAN_REPUBLIC_OF_VENEZUELA"
    | "BOSNIA_AND_HERZEGOVINA"
    | "BOTSWANA"
    | "BOUVET_ISLAND"
    | "BRAZIL"
    | "BRITISH_INDIAN_OCEAN_TERRITORY"
    | "BRITISH_VIRGIN_ISLANDS"
    | "BRUNEI_DARUSSALAM"
    | "BULGARIA"
    | "BURKINA_FASO"
    | "BURUNDI"
    | "CABO_VERDE"
    | "CAMBODIA"
    | "CAMEROON"
    | "CANADA"
    | "CAYMAN_ISLANDS"
    | "CENTRAL_AFRICAN_REPUBLIC"
    | "CHAD"
    | "CHILE"
    | "CHINA"
    | "CHRISTMAS_ISLAND"
    | "COCOS_KEELING_ISLANDS"
    | "COLOMBIA"
    | "COMOROS"
    | "CONGO"
    | "COOK_ISLANDS"
    | "COSTA_RICA"
    | "COTE_D_IVOIRE"
    | "CROATIA"
    | "CUBA"
    | "CURACAO"
    | "CYPRUS"
    | "CZECH_REPUBLIC"
    | "DEMOCRATIC_PEOPLE_S_REPUBLIC_OF_KOREA"
    | "DENMARK"
    | "DJIBOUTI"
    | "DOMINICA"
    | "DOMINICAN_REPUBLIC"
    | "ECUADOR"
    | "EGYPT"
    | "EL_SALVADOR"
    | "EQUATORIAL_GUINEA"
    | "ERITREA"
    | "ESTONIA"
    | "ETHIOPIA"
    | "FALKLAND_ISLANDS_MALVINAS"
    | "FAROE_ISLANDS"
    | "FEDERATED_STATES_OF_MICRONESIA"
    | "FIJI"
    | "FINLAND"
    | "FRANCE"
    | "FRENCH_GUIANA"
    | "FRENCH_POLYNESIA"
    | "FRENCH_SOUTHERN_TERRITORIES"
    | "GABON"
    | "GAMBIA"
    | "GEORGIA"
    | "GERMANY"
    | "GHANA"
    | "GIBRALTAR"
    | "GREECE"
    | "GREENLAND"
    | "GRENADA"
    | "GUADELOUPE"
    | "GUAM"
    | "GUATEMALA"
    | "GUERNSEY"
    | "GUINEA"
    | "GUINEA_BISSAU"
    | "GUYANA"
    | "HAITI"
    | "HEARD_ISLAND_AND_MCDONALD_ISLANDS"
    | "HOLY_SEE_VATICAN_CITY_STATE"
    | "HONDURAS"
    | "HONG_KONG"
    | "HUNGARY"
    | "ICELAND"
    | "INDIA"
    | "INDONESIA"
    | "IRAQ"
    | "IRELAND"
    | "ISLAMIC_REPUBLIC_OF_IRAN"
    | "ISLE_OF_MAN"
    | "ISRAEL"
    | "ITALY"
    | "JAMAICA"
    | "JAPAN"
    | "JERSEY"
    | "JORDAN"
    | "KAZAKHSTAN"
    | "KENYA"
    | "KIRIBATI"
    | "KOSOVO_TEMPORARY"
    | "KUWAIT"
    | "KYRGYZSTAN"
    | "LAO_PEOPLE_S_DEMOCRATIC_REPUBLIC"
    | "LATVIA"
    | "LEBANON"
    | "LESOTHO"
    | "LIBERIA"
    | "LIBYA"
    | "LIECHTENSTEIN"
    | "LITHUANIA"
    | "LUXEMBOURG"
    | "MACAO"
    | "MADAGASCAR"
    | "MALAWI"
    | "MALAYSIA"
    | "MALDIVES"
    | "MALI"
    | "MALTA"
    | "MARSHALL_ISLANDS"
    | "MARTINIQUE"
    | "MAURITANIA"
    | "MAURITIUS"
    | "MAYOTTE"
    | "MEXICO"
    | "MONACO"
    | "MONGOLIA"
    | "MONTENEGRO"
    | "MONTSERRAT"
    | "MOROCCO"
    | "MOZAMBIQUE"
    | "MYANMAR"
    | "NAMIBIA"
    | "NAURU"
    | "NEPAL"
    | "NETHERLANDS"
    | "NEW_CALEDONIA"
    | "NEW_ZEALAND"
    | "NICARAGUA"
    | "NIGER"
    | "NIGERIA"
    | "NIUE"
    | "NORFOLK_ISLAND"
    | "NORTHERN_IRELAND_TEMPORARY"
    | "NORTHERN_MARIANA_ISLANDS"
    | "NORWAY"
    | "OMAN"
    | "PAKISTAN"
    | "PALAU"
    | "PANAMA"
    | "PAPUA_NEW_GUINEA"
    | "PARAGUAY"
    | "PERU"
    | "PHILIPPINES"
    | "PITCAIRN"
    | "PLURINATIONAL_STATE_OF_BOLIVIA"
    | "POLAND"
    | "PORTUGAL"
    | "PROVINCE_OF_CHINA_TAIWAN"
    | "PUERTO_RICO"
    | "QATAR"
    | "REPUBLIC_OF_KOREA"
    | "REPUBLIC_OF_MOLDOVA"
    | "REUNION"
    | "ROMANIA"
    | "RUSSIAN_FEDERATION"
    | "RWANDA"
    | "SAINT_BARTHELEMY"
    | "SAINT_KITTS_AND_NEVIS"
    | "SAINT_LUCIA"
    | "SAINT_MARTIN_FRENCH_PART"
    | "SAINT_PIERRE_AND_MIQUELON"
    | "SAINT_VINCENT_AND_THE_GRENADINES"
    | "SAMOA"
    | "SAN_MARINO"
    | "SAO_TOME_AND_PRINCIPE"
    | "SAUDI_ARABIA"
    | "SENEGAL"
    | "SERBIA"
    | "SEYCHELLES"
    | "SIERRA_LEONE"
    | "SINGAPORE"
    | "SINT_EUSTATIUS_AND_SABA_BONAIRE"
    | "SINT_MAARTEN_DUTCH_PART"
    | "SLOVAKIA"
    | "SLOVENIA"
    | "SOLOMON_ISLANDS"
    | "SOMALIA"
    | "SOUTH_AFRICA"
    | "SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS"
    | "SOUTH_SUDAN"
    | "SPAIN"
    | "SRI_LANKA"
    | "STATE_OF_PALESTINE"
    | "SUDAN"
    | "SURINAME"
    | "SVALBARD_AND_JAN_MAYEN"
    | "SWAZILAND"
    | "SWEDEN"
    | "SWITZERLAND"
    | "SYRIAN_ARAB_REPUBLIC"
    | "TAJIKISTAN"
    | "THAILAND"
    | "THE_DEMOCRATIC_REPUBLIC_OF_THE_CONGO"
    | "THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA"
    | "TIMOR_LESTE"
    | "TOGO"
    | "TOKELAU"
    | "TONGA"
    | "TRINIDAD_AND_TOBAGO"
    | "TUNISIA"
    | "TURKEY"
    | "TURKMENISTAN"
    | "TURKS_AND_CAICOS_ISLANDS"
    | "TUVALU"
    | "UGANDA"
    | "UKRAINE"
    | "UNITED_ARAB_EMIRATES"
    | "UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND"
    | "UNITED_REPUBLIC_OF_TANZANIA"
    | "UNITED_STATES_MINOR_OUTLYING_ISLANDS"
    | "UNITED_STATES_OF_AMERICA"
    | "URUGUAY"
    | "UZBEKISTAN"
    | "U_S_VIRGIN_ISLANDS"
    | "VANUATU"
    | "VIET_NAM"
    | "WALLIS_AND_FUTUNA"
    | "WESTERN_SAHARA"
    | "YEMEN"
    | "ZAMBIA"
    | "ZIMBABWE";
  /**
   * Subdivision of the city
   * @minLength 0
   * @maxLength 35
   */
  subdivision?: string;
}

/** Checkers are supported for PURCHASE_INVOICE, TRAVEL_INVOICE, BILL_OF_CHARGES */
export interface InvoiceCheckerInformation {
  /**
   * User ID of the given checker. If invoice checker is given then this field is required
   * @format int32
   */
  userId: number;
  /**
   * Time when event was performed. Not present if event has not been performed.
   * @format date
   */
  eventPerformed?: string;
}

/** Contains rights for invoice circulation functionalities. */
export interface InvoiceCirculationRights {
  /** Access level to verification functionality. */
  verification?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to approval functionality. */
  approval?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Is personal approvals or verifications only limitation enabled. */
  personalApprovalsOrVerificationsOnly?: boolean;
}

/** Counterparty address. In the case of a sales invoice this is the buyer's address, and in the case of a purchase invoice and purchase order it is the seller. Even if the invoice is linked to a business partner by partnerId, the counterparty address can be different from the address saved for that business partner in the partner register. */
export interface InvoiceCounterpartyAddress {
  /**
   * Name ("first line") in the address.
   * @minLength 0
   * @maxLength 80
   */
  name: string;
  /**
   * Specifier, such as c/o address.
   * @minLength 0
   * @maxLength 80
   */
  specifier?: string;
  /**
   * Street. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 80
   */
  street?: string;
  /**
   * Zip code. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 20
   */
  zip?: string;
  /**
   * City. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 40
   */
  city?: string;
  /**
   * Country.
   * @example "SWEDEN"
   */
  country?:
    | "AFGHANISTAN"
    | "ALAND_ISLANDS"
    | "ALBANIA"
    | "ALGERIA"
    | "AMERICAN_SAMOA"
    | "ANDORRA"
    | "ANGOLA"
    | "ANGUILLA"
    | "ANTARCTICA"
    | "ANTIGUA_AND_BARBUDA"
    | "ARGENTINA"
    | "ARMENIA"
    | "ARUBA"
    | "ASCENSION_AND_TRISTAN_DA_CUNHA_SAINT_HELENA"
    | "AUSTRALIA"
    | "AUSTRIA"
    | "AZERBAIJAN"
    | "BAHAMAS"
    | "BAHRAIN"
    | "BANGLADESH"
    | "BARBADOS"
    | "BELARUS"
    | "BELGIUM"
    | "BELIZE"
    | "BENIN"
    | "BERMUDA"
    | "BHUTAN"
    | "BOLIVARIAN_REPUBLIC_OF_VENEZUELA"
    | "BOSNIA_AND_HERZEGOVINA"
    | "BOTSWANA"
    | "BOUVET_ISLAND"
    | "BRAZIL"
    | "BRITISH_INDIAN_OCEAN_TERRITORY"
    | "BRITISH_VIRGIN_ISLANDS"
    | "BRUNEI_DARUSSALAM"
    | "BULGARIA"
    | "BURKINA_FASO"
    | "BURUNDI"
    | "CABO_VERDE"
    | "CAMBODIA"
    | "CAMEROON"
    | "CANADA"
    | "CAYMAN_ISLANDS"
    | "CENTRAL_AFRICAN_REPUBLIC"
    | "CHAD"
    | "CHILE"
    | "CHINA"
    | "CHRISTMAS_ISLAND"
    | "COCOS_KEELING_ISLANDS"
    | "COLOMBIA"
    | "COMOROS"
    | "CONGO"
    | "COOK_ISLANDS"
    | "COSTA_RICA"
    | "COTE_D_IVOIRE"
    | "CROATIA"
    | "CUBA"
    | "CURACAO"
    | "CYPRUS"
    | "CZECH_REPUBLIC"
    | "DEMOCRATIC_PEOPLE_S_REPUBLIC_OF_KOREA"
    | "DENMARK"
    | "DJIBOUTI"
    | "DOMINICA"
    | "DOMINICAN_REPUBLIC"
    | "ECUADOR"
    | "EGYPT"
    | "EL_SALVADOR"
    | "EQUATORIAL_GUINEA"
    | "ERITREA"
    | "ESTONIA"
    | "ETHIOPIA"
    | "FALKLAND_ISLANDS_MALVINAS"
    | "FAROE_ISLANDS"
    | "FEDERATED_STATES_OF_MICRONESIA"
    | "FIJI"
    | "FINLAND"
    | "FRANCE"
    | "FRENCH_GUIANA"
    | "FRENCH_POLYNESIA"
    | "FRENCH_SOUTHERN_TERRITORIES"
    | "GABON"
    | "GAMBIA"
    | "GEORGIA"
    | "GERMANY"
    | "GHANA"
    | "GIBRALTAR"
    | "GREECE"
    | "GREENLAND"
    | "GRENADA"
    | "GUADELOUPE"
    | "GUAM"
    | "GUATEMALA"
    | "GUERNSEY"
    | "GUINEA"
    | "GUINEA_BISSAU"
    | "GUYANA"
    | "HAITI"
    | "HEARD_ISLAND_AND_MCDONALD_ISLANDS"
    | "HOLY_SEE_VATICAN_CITY_STATE"
    | "HONDURAS"
    | "HONG_KONG"
    | "HUNGARY"
    | "ICELAND"
    | "INDIA"
    | "INDONESIA"
    | "IRAQ"
    | "IRELAND"
    | "ISLAMIC_REPUBLIC_OF_IRAN"
    | "ISLE_OF_MAN"
    | "ISRAEL"
    | "ITALY"
    | "JAMAICA"
    | "JAPAN"
    | "JERSEY"
    | "JORDAN"
    | "KAZAKHSTAN"
    | "KENYA"
    | "KIRIBATI"
    | "KOSOVO_TEMPORARY"
    | "KUWAIT"
    | "KYRGYZSTAN"
    | "LAO_PEOPLE_S_DEMOCRATIC_REPUBLIC"
    | "LATVIA"
    | "LEBANON"
    | "LESOTHO"
    | "LIBERIA"
    | "LIBYA"
    | "LIECHTENSTEIN"
    | "LITHUANIA"
    | "LUXEMBOURG"
    | "MACAO"
    | "MADAGASCAR"
    | "MALAWI"
    | "MALAYSIA"
    | "MALDIVES"
    | "MALI"
    | "MALTA"
    | "MARSHALL_ISLANDS"
    | "MARTINIQUE"
    | "MAURITANIA"
    | "MAURITIUS"
    | "MAYOTTE"
    | "MEXICO"
    | "MONACO"
    | "MONGOLIA"
    | "MONTENEGRO"
    | "MONTSERRAT"
    | "MOROCCO"
    | "MOZAMBIQUE"
    | "MYANMAR"
    | "NAMIBIA"
    | "NAURU"
    | "NEPAL"
    | "NETHERLANDS"
    | "NEW_CALEDONIA"
    | "NEW_ZEALAND"
    | "NICARAGUA"
    | "NIGER"
    | "NIGERIA"
    | "NIUE"
    | "NORFOLK_ISLAND"
    | "NORTHERN_IRELAND_TEMPORARY"
    | "NORTHERN_MARIANA_ISLANDS"
    | "NORWAY"
    | "OMAN"
    | "PAKISTAN"
    | "PALAU"
    | "PANAMA"
    | "PAPUA_NEW_GUINEA"
    | "PARAGUAY"
    | "PERU"
    | "PHILIPPINES"
    | "PITCAIRN"
    | "PLURINATIONAL_STATE_OF_BOLIVIA"
    | "POLAND"
    | "PORTUGAL"
    | "PROVINCE_OF_CHINA_TAIWAN"
    | "PUERTO_RICO"
    | "QATAR"
    | "REPUBLIC_OF_KOREA"
    | "REPUBLIC_OF_MOLDOVA"
    | "REUNION"
    | "ROMANIA"
    | "RUSSIAN_FEDERATION"
    | "RWANDA"
    | "SAINT_BARTHELEMY"
    | "SAINT_KITTS_AND_NEVIS"
    | "SAINT_LUCIA"
    | "SAINT_MARTIN_FRENCH_PART"
    | "SAINT_PIERRE_AND_MIQUELON"
    | "SAINT_VINCENT_AND_THE_GRENADINES"
    | "SAMOA"
    | "SAN_MARINO"
    | "SAO_TOME_AND_PRINCIPE"
    | "SAUDI_ARABIA"
    | "SENEGAL"
    | "SERBIA"
    | "SEYCHELLES"
    | "SIERRA_LEONE"
    | "SINGAPORE"
    | "SINT_EUSTATIUS_AND_SABA_BONAIRE"
    | "SINT_MAARTEN_DUTCH_PART"
    | "SLOVAKIA"
    | "SLOVENIA"
    | "SOLOMON_ISLANDS"
    | "SOMALIA"
    | "SOUTH_AFRICA"
    | "SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS"
    | "SOUTH_SUDAN"
    | "SPAIN"
    | "SRI_LANKA"
    | "STATE_OF_PALESTINE"
    | "SUDAN"
    | "SURINAME"
    | "SVALBARD_AND_JAN_MAYEN"
    | "SWAZILAND"
    | "SWEDEN"
    | "SWITZERLAND"
    | "SYRIAN_ARAB_REPUBLIC"
    | "TAJIKISTAN"
    | "THAILAND"
    | "THE_DEMOCRATIC_REPUBLIC_OF_THE_CONGO"
    | "THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA"
    | "TIMOR_LESTE"
    | "TOGO"
    | "TOKELAU"
    | "TONGA"
    | "TRINIDAD_AND_TOBAGO"
    | "TUNISIA"
    | "TURKEY"
    | "TURKMENISTAN"
    | "TURKS_AND_CAICOS_ISLANDS"
    | "TUVALU"
    | "UGANDA"
    | "UKRAINE"
    | "UNITED_ARAB_EMIRATES"
    | "UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND"
    | "UNITED_REPUBLIC_OF_TANZANIA"
    | "UNITED_STATES_MINOR_OUTLYING_ISLANDS"
    | "UNITED_STATES_OF_AMERICA"
    | "URUGUAY"
    | "UZBEKISTAN"
    | "U_S_VIRGIN_ISLANDS"
    | "VANUATU"
    | "VIET_NAM"
    | "WALLIS_AND_FUTUNA"
    | "WESTERN_SAHARA"
    | "YEMEN"
    | "ZAMBIA"
    | "ZIMBABWE";
  /**
   * Subdivision of the city
   * @minLength 0
   * @maxLength 35
   */
  subdivision?: string;
}

/** The address where the goods should be delivered. If omitted for a sales or purchase invoice, assumed to equal the counter party address. If delivery address is not needed for sales or purchase invoice, please send an empty value: deliveryAddress:{}. Note: This value has no correspondence on the UI with purchase invoices and purchase orders. For defining a delivery address for a purchase invoice or purchase order, use the billingAddress property instead. */
export interface InvoiceDeliveryAddress {
  /**
   * Name ("first line") in the address.
   * @minLength 0
   * @maxLength 80
   */
  name: string;
  /**
   * Specifier, such as c/o address.
   * @minLength 0
   * @maxLength 80
   */
  specifier?: string;
  /**
   * Street. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 80
   */
  street?: string;
  /**
   * Zip code. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 20
   */
  zip?: string;
  /**
   * City. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 40
   */
  city?: string;
  /**
   * Country.
   * @example "SWEDEN"
   */
  country?:
    | "AFGHANISTAN"
    | "ALAND_ISLANDS"
    | "ALBANIA"
    | "ALGERIA"
    | "AMERICAN_SAMOA"
    | "ANDORRA"
    | "ANGOLA"
    | "ANGUILLA"
    | "ANTARCTICA"
    | "ANTIGUA_AND_BARBUDA"
    | "ARGENTINA"
    | "ARMENIA"
    | "ARUBA"
    | "ASCENSION_AND_TRISTAN_DA_CUNHA_SAINT_HELENA"
    | "AUSTRALIA"
    | "AUSTRIA"
    | "AZERBAIJAN"
    | "BAHAMAS"
    | "BAHRAIN"
    | "BANGLADESH"
    | "BARBADOS"
    | "BELARUS"
    | "BELGIUM"
    | "BELIZE"
    | "BENIN"
    | "BERMUDA"
    | "BHUTAN"
    | "BOLIVARIAN_REPUBLIC_OF_VENEZUELA"
    | "BOSNIA_AND_HERZEGOVINA"
    | "BOTSWANA"
    | "BOUVET_ISLAND"
    | "BRAZIL"
    | "BRITISH_INDIAN_OCEAN_TERRITORY"
    | "BRITISH_VIRGIN_ISLANDS"
    | "BRUNEI_DARUSSALAM"
    | "BULGARIA"
    | "BURKINA_FASO"
    | "BURUNDI"
    | "CABO_VERDE"
    | "CAMBODIA"
    | "CAMEROON"
    | "CANADA"
    | "CAYMAN_ISLANDS"
    | "CENTRAL_AFRICAN_REPUBLIC"
    | "CHAD"
    | "CHILE"
    | "CHINA"
    | "CHRISTMAS_ISLAND"
    | "COCOS_KEELING_ISLANDS"
    | "COLOMBIA"
    | "COMOROS"
    | "CONGO"
    | "COOK_ISLANDS"
    | "COSTA_RICA"
    | "COTE_D_IVOIRE"
    | "CROATIA"
    | "CUBA"
    | "CURACAO"
    | "CYPRUS"
    | "CZECH_REPUBLIC"
    | "DEMOCRATIC_PEOPLE_S_REPUBLIC_OF_KOREA"
    | "DENMARK"
    | "DJIBOUTI"
    | "DOMINICA"
    | "DOMINICAN_REPUBLIC"
    | "ECUADOR"
    | "EGYPT"
    | "EL_SALVADOR"
    | "EQUATORIAL_GUINEA"
    | "ERITREA"
    | "ESTONIA"
    | "ETHIOPIA"
    | "FALKLAND_ISLANDS_MALVINAS"
    | "FAROE_ISLANDS"
    | "FEDERATED_STATES_OF_MICRONESIA"
    | "FIJI"
    | "FINLAND"
    | "FRANCE"
    | "FRENCH_GUIANA"
    | "FRENCH_POLYNESIA"
    | "FRENCH_SOUTHERN_TERRITORIES"
    | "GABON"
    | "GAMBIA"
    | "GEORGIA"
    | "GERMANY"
    | "GHANA"
    | "GIBRALTAR"
    | "GREECE"
    | "GREENLAND"
    | "GRENADA"
    | "GUADELOUPE"
    | "GUAM"
    | "GUATEMALA"
    | "GUERNSEY"
    | "GUINEA"
    | "GUINEA_BISSAU"
    | "GUYANA"
    | "HAITI"
    | "HEARD_ISLAND_AND_MCDONALD_ISLANDS"
    | "HOLY_SEE_VATICAN_CITY_STATE"
    | "HONDURAS"
    | "HONG_KONG"
    | "HUNGARY"
    | "ICELAND"
    | "INDIA"
    | "INDONESIA"
    | "IRAQ"
    | "IRELAND"
    | "ISLAMIC_REPUBLIC_OF_IRAN"
    | "ISLE_OF_MAN"
    | "ISRAEL"
    | "ITALY"
    | "JAMAICA"
    | "JAPAN"
    | "JERSEY"
    | "JORDAN"
    | "KAZAKHSTAN"
    | "KENYA"
    | "KIRIBATI"
    | "KOSOVO_TEMPORARY"
    | "KUWAIT"
    | "KYRGYZSTAN"
    | "LAO_PEOPLE_S_DEMOCRATIC_REPUBLIC"
    | "LATVIA"
    | "LEBANON"
    | "LESOTHO"
    | "LIBERIA"
    | "LIBYA"
    | "LIECHTENSTEIN"
    | "LITHUANIA"
    | "LUXEMBOURG"
    | "MACAO"
    | "MADAGASCAR"
    | "MALAWI"
    | "MALAYSIA"
    | "MALDIVES"
    | "MALI"
    | "MALTA"
    | "MARSHALL_ISLANDS"
    | "MARTINIQUE"
    | "MAURITANIA"
    | "MAURITIUS"
    | "MAYOTTE"
    | "MEXICO"
    | "MONACO"
    | "MONGOLIA"
    | "MONTENEGRO"
    | "MONTSERRAT"
    | "MOROCCO"
    | "MOZAMBIQUE"
    | "MYANMAR"
    | "NAMIBIA"
    | "NAURU"
    | "NEPAL"
    | "NETHERLANDS"
    | "NEW_CALEDONIA"
    | "NEW_ZEALAND"
    | "NICARAGUA"
    | "NIGER"
    | "NIGERIA"
    | "NIUE"
    | "NORFOLK_ISLAND"
    | "NORTHERN_IRELAND_TEMPORARY"
    | "NORTHERN_MARIANA_ISLANDS"
    | "NORWAY"
    | "OMAN"
    | "PAKISTAN"
    | "PALAU"
    | "PANAMA"
    | "PAPUA_NEW_GUINEA"
    | "PARAGUAY"
    | "PERU"
    | "PHILIPPINES"
    | "PITCAIRN"
    | "PLURINATIONAL_STATE_OF_BOLIVIA"
    | "POLAND"
    | "PORTUGAL"
    | "PROVINCE_OF_CHINA_TAIWAN"
    | "PUERTO_RICO"
    | "QATAR"
    | "REPUBLIC_OF_KOREA"
    | "REPUBLIC_OF_MOLDOVA"
    | "REUNION"
    | "ROMANIA"
    | "RUSSIAN_FEDERATION"
    | "RWANDA"
    | "SAINT_BARTHELEMY"
    | "SAINT_KITTS_AND_NEVIS"
    | "SAINT_LUCIA"
    | "SAINT_MARTIN_FRENCH_PART"
    | "SAINT_PIERRE_AND_MIQUELON"
    | "SAINT_VINCENT_AND_THE_GRENADINES"
    | "SAMOA"
    | "SAN_MARINO"
    | "SAO_TOME_AND_PRINCIPE"
    | "SAUDI_ARABIA"
    | "SENEGAL"
    | "SERBIA"
    | "SEYCHELLES"
    | "SIERRA_LEONE"
    | "SINGAPORE"
    | "SINT_EUSTATIUS_AND_SABA_BONAIRE"
    | "SINT_MAARTEN_DUTCH_PART"
    | "SLOVAKIA"
    | "SLOVENIA"
    | "SOLOMON_ISLANDS"
    | "SOMALIA"
    | "SOUTH_AFRICA"
    | "SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS"
    | "SOUTH_SUDAN"
    | "SPAIN"
    | "SRI_LANKA"
    | "STATE_OF_PALESTINE"
    | "SUDAN"
    | "SURINAME"
    | "SVALBARD_AND_JAN_MAYEN"
    | "SWAZILAND"
    | "SWEDEN"
    | "SWITZERLAND"
    | "SYRIAN_ARAB_REPUBLIC"
    | "TAJIKISTAN"
    | "THAILAND"
    | "THE_DEMOCRATIC_REPUBLIC_OF_THE_CONGO"
    | "THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA"
    | "TIMOR_LESTE"
    | "TOGO"
    | "TOKELAU"
    | "TONGA"
    | "TRINIDAD_AND_TOBAGO"
    | "TUNISIA"
    | "TURKEY"
    | "TURKMENISTAN"
    | "TURKS_AND_CAICOS_ISLANDS"
    | "TUVALU"
    | "UGANDA"
    | "UKRAINE"
    | "UNITED_ARAB_EMIRATES"
    | "UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND"
    | "UNITED_REPUBLIC_OF_TANZANIA"
    | "UNITED_STATES_MINOR_OUTLYING_ISLANDS"
    | "UNITED_STATES_OF_AMERICA"
    | "URUGUAY"
    | "UZBEKISTAN"
    | "U_S_VIRGIN_ISLANDS"
    | "VANUATU"
    | "VIET_NAM"
    | "WALLIS_AND_FUTUNA"
    | "WESTERN_SAHARA"
    | "YEMEN"
    | "ZAMBIA"
    | "ZIMBABWE";
  /**
   * Subdivision of the city
   * @minLength 0
   * @maxLength 35
   */
  subdivision?: string;
}

export interface InvoiceIds {
  /** List of invoice IDs. */
  invoiceIds?: number[];
}

export interface InvoiceNotes {
  /**
   * Invoice notes. \n can be used as a line break.
   * @minLength 0
   * @maxLength 10000
   */
  notes: string;
}

/** Invoice operator related information. It is a read-only property shown only for purchase invoices. */
export interface InvoiceOperatorInfo {
  /** Invoice operator. */
  operator?: string;
  /** Receiving address of operator. */
  receivingAddress?: string;
}

/** List containing InvoicePayment objects. */
export interface InvoicePayment {
  /**
   * The amount of the payment in the given currency. Currency is defined within the invoice, which identifier is set in invoiceId field.
   * @min 0
   * @exclusiveMin true
   */
  amount: number;
  /**
   * Bank reference code.
   * @minLength 0
   * @maxLength 40
   */
  bankReferenceCode?: string;
  /** Reference code generation type. If type not allowed for a user country will be given, then 400 is returned */
  bankReferenceCodeType?: "RF" | "FI" | "OCR" | "KID" | "GIK01" | "GIK04" | "GIK15" | "FIK71" | "FIK73" | "FIK75";
  /**
   * Message for the payment, if reference payment is not used.
   * @minLength 0
   * @maxLength 140
   */
  message?: string;
  /**
   * Bank account number of the recipient.
   * @minLength 0
   * @maxLength 80
   */
  recipientBankAccount: string;
  /**
   * BIC code of recipient bank account number.
   * @minLength 0
   * @maxLength 80
   */
  recipientBicCode?: string;
  /** Payment method type defining what kind of payment has to be made. */
  paymentMethod:
    | "DENMARK_DOMESTIC_PAYMENT"
    | "DENMARK_DOMESTIC_PAYMENT_CREDITOR"
    | "DENMARK_FOREIGN_PAYMENT"
    | "FINNISH_BANK_TRANSFER"
    | "FINNISH_EXPRESS_PAYMENT"
    | "FINNISH_FOREIGN_PAYMENT"
    | "NORWEGIAN_DOMESTIC_PAYMENT"
    | "NORWEGIAN_FOREIGN_PAYMENT"
    | "SWEDISH_DOMESTIC_PAYMENT"
    | "SWEDISH_DOMESTIC_PAYMENT_BANKGIRO"
    | "SWEDISH_DOMESTIC_PAYMENT_PLUSGIRO"
    | "SWEDISH_FOREIGN_PAYMENT";
  /** The payer bank account. It has to be predefined in the environment to be able to use the payment. If not set than default bank account for payment is taken. */
  payerBankAccount?: string;
  /**
   * Date specifying when the payment transaction has to be performed. Payment date should be grater then current date.
   * @format date
   */
  paymentDate: string;
  /** Receiver bank clearing code. */
  receiverBankClearingCode?: string;
  /** Recipient name with address. Recipient name is mandatory and is always in use, other fields are omitted in scenarios different then described below. In case of: foreign payments, Norway NETS payments, Norway SpareBank payments, Sweden Swedbank with missing bank reference payments and Sweden DanskeBank with missing bank reference payments full receiver address is needed. */
  recipientNameAndAddress: PaymentRecipientNameAndAddress;
  /** Recipient bank name and address. Used in foreign payments. */
  receiverBankNameAndAddress?: PaymentReceiverBankNameAndAddress;
  /** Intermediary bank name and address. If filled in, then it have to be filled in full. Used in foreign payments. */
  intermediaryBankNameAndAddress?: PaymentIntermediaryBankNameAndAddress;
  /** Intermediary bank BIC. */
  intermediaryBankBic?: string;
  /** If not provided, for Finnish foreign payment it will be automatically set to BOTH_PAY_OWN_FEES. */
  serviceCharge?: "BOTH_PAY_OWN_FEES" | "PAYER_PAY_BOTH_FEES";
  /**
   * Unique identifier of the invoice.
   * @format int32
   */
  invoiceId: number;
  /**
   * Invoice version.
   * @format date-time
   */
  invoiceVersion: string;
}

export interface InvoicePaymentList {
  /**
   * List containing InvoicePayment objects.
   * @maxItems 2147483647
   * @minItems 1
   */
  payments: InvoicePayment[];
}

/** Response for paying invoices action (POST /payments) performed successfully */
export interface InvoicePaymentSummaries {
  /** List of identifiers of added payments. */
  transactions?: InvoicePaymentSummary[];
}

/** List of identifiers of added payments. */
export interface InvoicePaymentSummary {
  /**
   * Identifier of created payment, provided by the application.
   * @format int32
   */
  paymentId?: number;
  /**
   * Identifier of invoice associated with the payment.
   * @format int32
   */
  invoiceId?: number;
}

/** Invoice rows. An invoice should always have at least one row. The only exception are PERIODIC_TAX_RETURN invoices which do not have any invoice rows. */
export interface InvoiceRow {
  /**
   * Unique identifier for a invoice row.
   * @format int32
   */
  id?: number;
  /**
   * Unique identifier for a product. Links the invoice row to a product in the product register. Note that all other fields (name, price, ...) of an invoice row can be modified independently of the information in the product register. If one wants to use accounts from product register, accountingByRow must be true.
   * @format int32
   */
  productId?: number;
  /** Product name. */
  product: string;
  /** Product code. */
  productCode?: string;
  /** Product quantity. */
  quantity: number;
  /** Product unit. */
  unit:
    | "CM"
    | "LOT"
    | "GRAM"
    | "HOUR"
    | "PERSON"
    | "LINEAR_METER"
    | "KILOGRAM"
    | "MONTH"
    | "KILOMETER"
    | "PIECE"
    | "KILOWATT_HOUR"
    | "LITER"
    | "BOX"
    | "METER"
    | "SQUARE_METER"
    | "CUBIC_METER"
    | "SALE_UNIT"
    | "MINUTE"
    | "MILLIMETER"
    | "PARCEL"
    | "BOTTLE"
    | "CAN"
    | "BAG"
    | "DAY"
    | "ROLL"
    | "PAGE"
    | "SACK"
    | "SERIES"
    | "TUBE"
    | "TON"
    | "YEAR"
    | "WEEK"
    | "FULL_DAY"
    | "KILOBIT"
    | "MEGABIT"
    | "GIGABIT"
    | "TERABIT"
    | "SQUARE_CENTIMETRE"
    | "CENTILITRE"
    | "CUP"
    | "DECILITRE"
    | "GALLON_UK"
    | "GALLON_US"
    | "MILLILITRE"
    | "PINT_UK"
    | "PINT_US"
    | "AMPERE"
    | "AMPERE_HOUR"
    | "AMPERE_MINUTE"
    | "KILOAMPERE_HOUR"
    | "KILOVOLT"
    | "MILLIVOLT"
    | "MILLIAMPERE_HOUR"
    | "FOOT"
    | "INCH"
    | "MILE"
    | "YARD"
    | "EXAJOULE"
    | "GIGAJOULE"
    | "JOULE"
    | "JOULE_PER_SECOND"
    | "KILOJOULE"
    | "MILLIJOULE"
    | "PETAJOULE"
    | "TERAJOULE"
    | "GRAM_PER_CUBIC_METRE"
    | "GRAM_PER_SQUARE_METRE"
    | "KILOGRAM_PER_CUBIC_METRE"
    | "KILOGRAM_PER_SQUARE_METRE"
    | "MILLIGRAM"
    | "MILLIGRAM_PER_CUBIC_METRE"
    | "OUNCE"
    | "POUND"
    | "STONE_UK"
    | "DOZEN"
    | "DOZEN_PACK"
    | "EIGHT_PACK"
    | "FIVE_PACK"
    | "FOUR_PACK"
    | "HUNDRED"
    | "JAR"
    | "NINE_PACK"
    | "NUMBER_OF_WORDS"
    | "PAIR"
    | "PALLET"
    | "PLATE"
    | "SET"
    | "SEVEN_PACK"
    | "SIX_PACK"
    | "TEN_PACK"
    | "THREE_PACK"
    | "TWO_PACK"
    | "WRAP"
    | "GIGAWATT"
    | "GIGAWATT_HOUR"
    | "KILOWATT"
    | "MEGAWATT_HOUR"
    | "MILLIWATT"
    | "TERAWATT"
    | "TERAWATT_HOUR"
    | "WATT"
    | "WATT_HOUR"
    | "BAR"
    | "KILOPASCAL"
    | "PASCAL"
    | "KILOBYTE"
    | "MEGABYTE"
    | "GIGABYTE"
    | "SECOND"
    | "HECTARE"
    | "NO_UNIT";
  /** Product unit price. This value is affected by the "unit prices include VAT" setting on the invoice. */
  unitPrice: number;
  /** Product discount percentage. */
  discountPercent: number;
  /** Product VAT percentage. Must be a percentage currently in use for the company. */
  vatPercent: number;
  /**
   * Product VAT status.
   * @format int32
   */
  vatStatus?: number;
  /**
   * Invoice row comment. Visible on the invoice. Use \ as line break.
   * @minLength 0
   * @maxLength 512
   */
  comment?: string;
  /**
   * Start date of accrual/delivery periods of invoice row.
   * @format date
   */
  startDate?: string;
  /**
   * End date of accrual/delivery periods of invoice row.
   * @format date
   */
  endDate?: string;
  /**
   * Header text of the content row associated with invoice row. Supported in sales offer, sales order and sales invoice.
   * @minLength 0
   * @maxLength 512
   */
  headerText?: string;
  /**
   * Explanation text of the content row associated with invoice row. Supported in sales offer, sales order and sales invoice.
   * @minLength 0
   * @maxLength 512
   */
  explanationText?: string;
}

export interface InvoiceSearchResult {
  /** Search results. */
  results?: InvoiceBasicInfo[];
  /** Search result metadata. */
  meta?: SearchResultMetaData;
}

/** Invoice sum info. If the invoice has currency other than the one set for the environment, it returns sum for both the accounting and invoice currency. */
export interface InvoiceSumInfo {
  /** Accounting currency set for the environment or some other currency set in the invoice in ISO 4217 format. */
  currency?: string;
  /** True if the sum is in accounting currency. */
  inAccountingCurrency?: boolean;
  /** Total Excluding VAT for all invoice rows. */
  excludingVatTotal?: number;
  /** Total VAT sum for all invoice rows. */
  vatSumTotal?: number;
  /** Sum of excludingVatTotal and vatSumTotal in accounting currency or invoice currency. */
  invoiceSumTotal?: number;
}

export interface InvoiceTemplate {
  /**
   * Invoice template ID.
   * @format int32
   */
  id?: number;
  /** Invoice template name. */
  name?: string;
}

/** List of invoice transactions. */
export interface InvoiceTransaction {
  /** Transaction action. */
  action?:
    | "APPROVAL"
    | "ALLOCATE_PAYMENT_MANUALLY"
    | "ALLOCATE_INVOICE_TO_INVOICE"
    | "ALLOCATE_INVOICE_TO_JOURNAL"
    | "ALLOCATE_INVOICE_TO_BANK_STATEMENT"
    | "ALLOCATE_INVOICE_TO_REFERENCE_PAYMENT"
    | "VERIFICATION"
    | "DIRECTED_TO_ANOTHER_VERIFIER"
    | "DIRECTED_TO_ANOTHER_APPROVER"
    | "COLLECTION_LETTER_DUETTOPRO"
    | "PAYMENT_REMINDER_EMAIL"
    | "CONVERTED_TO_INVOICE"
    | "PAYMENT_REMINDER"
    | "PAYMENT_WARNING"
    | "PAYMENT_REMINDER_DUETTOFORTE"
    | "CANCEL_PAYMENT_TRANSACTION"
    | "RETURNED_PREVIOUS"
    | "PAYMENT_REMINDER_MAIL"
    | "COLLECTION_LETTER_SVEA"
    | "COLLECTION_LETTER_SVEA_SHORT"
    | "PAYMENT_REMINDER_SVEA"
    | "PAYMENT_REMINDER_SVEA_SHORT"
    | "DELETED_PAID_ELSEWHERE_PAYMENT_TRANSACTION"
    | "DELETED_PAYMENT_TRANSACTION"
    | "UNFINISHED"
    | "RESTORED_UNFINISHED"
    | "DENY_PAYMENT"
    | "SENT_FOR_PAYMENT"
    | "MARKED_PAID"
    | "RECEIVED_VIA_AUTOMATIC_TRANSFER"
    | "RECEIVED_AS_EINVOICE"
    | "RECEIVED_AS_SCANNED_INVOICE"
    | "TARGETING_REMOVED"
    | "SEND_TO_CIRCULATION"
    | "SEND"
    | "PRODUCT_INFORMATION_UPDATED_INTO_INVENTORY_MANAGEMENT"
    | "SENDING_CANCELLED"
    | "SEPA_PAYMENT_ERROR"
    | "PAYMENT_ERROR_HANDLED"
    | "COLLECTION_LETTER_ROPO"
    | "PAYMENT_REMINDER_ROPO"
    | "INVOICE_FACTORING_DELETED"
    | "SENDING_ERROR_RECEIVED"
    | "SENDING_ERROR_EMAIL_NOTIFICATION"
    | "SENDING_ERROR_HANDLED"
    | "SENDING_ERROR_MARK_AS_HANDLED"
    | "SENDING_ERROR_REVERTED_TO_NOT_SENT";
  /** Transaction name. */
  name?: string;
  /**
   * Transaction date.
   * @format date-time
   */
  date?: string;
  /** Transaction details. */
  details?: string;
}

export interface InvoiceTransactions {
  /** List of invoice transactions. */
  transactions?: InvoiceTransaction[];
}

/** Invoicing info data of the partner. */
export interface InvoicingInfo {
  /** Customer number of the partner. */
  customerNumber?: string;
  /** Identifier of the partner. */
  identifier?: string;
  /** Identifier type of the partner. */
  identifierType?: string;
  /** OVT of the partner. */
  ovt?: string;
  /** Invoice channel of the partner. */
  invoiceChannel?: "EMAIL" | "MAIL" | "ELECTRONIC_INVOICE" | "EDIFACT" | "PAPER_INVOICE" | "NO_SENDING";
  /** Contact person of the partner. */
  contactPerson?: string;
  /** Language of the partner. */
  language?: "DANISH" | "ENGLISH" | "ESTONIAN" | "FINNISH" | "NORWEGIAN" | "SWEDISH";
  /** Email of the partner. */
  email?: string;
  /** Does the customer deny Procountors sending of payment reminders as e-invoice */
  denyEinvoiceReminders?: boolean;
  einvoiceOperator?: string;
  einvoiceAddress?: string;
}

export interface LaborUnionSettingsBasicData {
  /**
   * Unique identifier of labor union setting.
   * @format int64
   */
  id?: number;
  /** Labor union setting name. */
  name?: string;
}

/** Ledger account used for the accounting. Must be valid for the current Procountor environment. Use GET /coa to obtain the chart of accounts. */
export interface LedgerAccount {
  /** Ledger account code. */
  ledgerAccountCode?: string;
  /** Ledger account name. */
  name?: string;
  /** Indicates whether the ledger account is active or not. */
  active?: boolean;
  /** Ledger account name translations. If there is no translations available for given account, api response body will not contain translations list at all. */
  translations?: LedgerAccountTranslation[];
}

/** Ledger account name translations. If there is no translations available for given account, api response body will not contain translations list at all. */
export interface LedgerAccountTranslation {
  /** Language code in ISO 639-1 format. */
  languageCode?: string;
  /** Ledger account name translation for the given language code. */
  translation?: string;
}

export interface LedgerAccounts {
  /** List of ledger accounts. */
  ledgerAccounts?: LedgerAccount[];
}

/** Report data. */
export interface LedgerAccountsReportData {
  /** List of report periods. */
  periods?: LedgerAccountsReportPeriod[];
}

/** List of report periods. */
export interface LedgerAccountsReportPeriod {
  /**
   * Start date of the report period.
   * @format date
   */
  startDate?: string;
  /**
   * End date of the report period.
   * @format date
   */
  endDate?: string;
  /**
   * Report period rows.
   * @uniqueItems true
   */
  rows?: LedgerAccountsReportRow[];
}

/** Report parameters that were used to generate the report. */
export interface LedgerAccountsReportRequest {
  /**
   * Report start date. Optional, if missing, starting date of the tracking period 'endDate' is in will be used. (financial year if not available)
   * @format date
   */
  startDate?: string;
  /**
   * Report end date.
   * @format date
   */
  endDate: string;
  /**
   * List of receipt statuses for report. Default value depends on company rights.
   * @example ["APPROVED","SENT","PAID","UNFINISHED"]
   */
  receiptStatus?: (
    | "APPROVED"
    | "SENT"
    | "NOT_SENT"
    | "PAYMENT_SENT_TO_BANK"
    | "PAID"
    | "PARTLY_PAID,"
    | "MARKED_PAID"
    | "PAYMENT_QUEUED"
    | "PAYMENT_DENIED"
    | "UNFINISHED"
    | "VERIFIED"
    | "RECEIVED"
  )[];
  /** Report request options. */
  options?: LedgerAccountsReportRequestOptions;
}

/** Report request options. */
export interface LedgerAccountsReportRequestOptions {
  /**
   * Receipt types that will be included in the report.
   * @default ["SALES_INVOICE","PURCHASE_INVOICE","TRAVEL_INVOICE","BILL_OF_CHARGES","JOURNAL","SALARY","VAT_FORM","EMPLOYER_CONTRIBUTION","PERIODIC_TAX_RETURN","VAT_SUMMARY","SALES_ORDER","PURCHASE_ORDER","REFERENCE_PAYMENT","BANK_STATEMENT_AS_RECEIPT","RECEIPT_FOR_OPENING_ACCOUNTS"]
   * @example ["SALES_INVOICE","PURCHASE_INVOICE","TRAVEL_INVOICE"]
   */
  receiptType?: (
    | "SALES_INVOICE"
    | "PURCHASE_INVOICE"
    | "TRAVEL_INVOICE"
    | "BILL_OF_CHARGES"
    | "JOURNAL"
    | "SALARY"
    | "VAT_FORM"
    | "EMPLOYER_CONTRIBUTION"
    | "PERIODIC_TAX_RETURN"
    | "VAT_SUMMARY"
    | "SALES_ORDER"
    | "PURCHASE_ORDER"
    | "REFERENCE_PAYMENT"
    | "BANK_STATEMENT_AS_RECEIPT"
    | "RECEIPT_FOR_OPENING_ACCOUNTS"
  )[];
  /**
   * Currency for the receipt in ISO 4217 format.
   * @example "EUR"
   */
  receiptCurrency?:
    | "AED"
    | "AFN"
    | "ALL"
    | "AMD"
    | "ANG"
    | "AOA"
    | "ARS"
    | "ATS"
    | "AUD"
    | "AWG"
    | "AZN"
    | "BAM"
    | "BBD"
    | "BDT"
    | "BEF"
    | "BGN"
    | "BHD"
    | "BIF"
    | "BMD"
    | "BND"
    | "BOB"
    | "BOV"
    | "BRL"
    | "BSD"
    | "BTN"
    | "BWP"
    | "BYN"
    | "BZD"
    | "CAD"
    | "CDF"
    | "CHE"
    | "CHF"
    | "CHW"
    | "CLF"
    | "CLP"
    | "CNH"
    | "CNT"
    | "CNY"
    | "COP"
    | "COU"
    | "CRC"
    | "CUC"
    | "CUP"
    | "CVE"
    | "CYP"
    | "CZK"
    | "DEM"
    | "DJF"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EEK"
    | "EGP"
    | "ERN"
    | "ESP"
    | "ETB"
    | "EUR"
    | "FIM"
    | "FJD"
    | "FKP"
    | "FRF"
    | "GBP"
    | "GEL"
    | "GGP"
    | "GHS"
    | "GIP"
    | "GMD"
    | "GNF"
    | "GRD"
    | "GTQ"
    | "GYD"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HTG"
    | "HUF"
    | "IDR"
    | "IEP"
    | "ILS"
    | "IMP"
    | "INR"
    | "IQD"
    | "IRR"
    | "ISK"
    | "ITL"
    | "JEP"
    | "JMD"
    | "JOD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KHR"
    | "KID"
    | "KMF"
    | "KPW"
    | "KRW"
    | "KWD"
    | "KYD"
    | "KZT"
    | "LAK"
    | "LBP"
    | "LKR"
    | "LRD"
    | "LSL"
    | "LTL"
    | "LUF"
    | "LVL"
    | "LYD"
    | "MAD"
    | "MDL"
    | "MGA"
    | "MKD"
    | "MMK"
    | "MNT"
    | "MOP"
    | "MRO"
    | "MTL"
    | "MUR"
    | "MVR"
    | "MWK"
    | "MXN"
    | "MXV"
    | "MYR"
    | "MZN"
    | "NAD"
    | "NGN"
    | "NIO"
    | "NIS"
    | "NLG"
    | "NOK"
    | "NPR"
    | "NTD"
    | "NZD"
    | "OMR"
    | "PAB"
    | "PEN"
    | "PGK"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PRB"
    | "PTE"
    | "PYG"
    | "QAR"
    | "RMB"
    | "RON"
    | "RSD"
    | "RUB"
    | "RWF"
    | "SAR"
    | "SBD"
    | "SCR"
    | "SDG"
    | "SEK"
    | "SGD"
    | "SHP"
    | "SIT"
    | "SKK"
    | "SLL"
    | "SLS"
    | "SOS"
    | "SRD"
    | "SSP"
    | "STN"
    | "SVC"
    | "SYP"
    | "SZL"
    | "THB"
    | "TJS"
    | "TMT"
    | "TND"
    | "TOP"
    | "TRY"
    | "TTD"
    | "TVD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "USN"
    | "UYI"
    | "UYU"
    | "UYW"
    | "UZS"
    | "VES"
    | "VND"
    | "VUV"
    | "WST"
    | "XAF"
    | "XAG"
    | "XAU"
    | "XBA"
    | "XBB"
    | "XBC"
    | "XBD"
    | "XCD"
    | "XDR"
    | "XOF"
    | "XPD"
    | "XPF"
    | "XPT"
    | "XSU"
    | "XTS"
    | "XUA"
    | "XXX"
    | "YER"
    | "ZAR"
    | "ZMW"
    | "ZWB"
    | "ZWL";
  /** Receipt name that will be used in the report. */
  receiptName?: string;
  /**
   * Entry period start date that will be used in the report. Date will be rounded down to start of the month.
   * @format date
   */
  entryPeriodStart?: string;
  /**
   * Entry period end date that will be used in the report. Date will be rounded up to end of the month.
   * @format date
   */
  entryPeriodEnd?: string;
  /** Transaction value that will be used in the report. */
  transactionValue?: string;
  /**
   * Transaction currency that will be used in the report. Not considered if transaction value is not given.
   * @default "EUR"
   */
  transactionCurrency?:
    | "AED"
    | "AFN"
    | "ALL"
    | "AMD"
    | "ANG"
    | "AOA"
    | "ARS"
    | "ATS"
    | "AUD"
    | "AWG"
    | "AZN"
    | "BAM"
    | "BBD"
    | "BDT"
    | "BEF"
    | "BGN"
    | "BHD"
    | "BIF"
    | "BMD"
    | "BND"
    | "BOB"
    | "BOV"
    | "BRL"
    | "BSD"
    | "BTN"
    | "BWP"
    | "BYN"
    | "BZD"
    | "CAD"
    | "CDF"
    | "CHE"
    | "CHF"
    | "CHW"
    | "CLF"
    | "CLP"
    | "CNH"
    | "CNT"
    | "CNY"
    | "COP"
    | "COU"
    | "CRC"
    | "CUC"
    | "CUP"
    | "CVE"
    | "CYP"
    | "CZK"
    | "DEM"
    | "DJF"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EEK"
    | "EGP"
    | "ERN"
    | "ESP"
    | "ETB"
    | "EUR"
    | "FIM"
    | "FJD"
    | "FKP"
    | "FRF"
    | "GBP"
    | "GEL"
    | "GGP"
    | "GHS"
    | "GIP"
    | "GMD"
    | "GNF"
    | "GRD"
    | "GTQ"
    | "GYD"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HTG"
    | "HUF"
    | "IDR"
    | "IEP"
    | "ILS"
    | "IMP"
    | "INR"
    | "IQD"
    | "IRR"
    | "ISK"
    | "ITL"
    | "JEP"
    | "JMD"
    | "JOD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KHR"
    | "KID"
    | "KMF"
    | "KPW"
    | "KRW"
    | "KWD"
    | "KYD"
    | "KZT"
    | "LAK"
    | "LBP"
    | "LKR"
    | "LRD"
    | "LSL"
    | "LTL"
    | "LUF"
    | "LVL"
    | "LYD"
    | "MAD"
    | "MDL"
    | "MGA"
    | "MKD"
    | "MMK"
    | "MNT"
    | "MOP"
    | "MRO"
    | "MTL"
    | "MUR"
    | "MVR"
    | "MWK"
    | "MXN"
    | "MXV"
    | "MYR"
    | "MZN"
    | "NAD"
    | "NGN"
    | "NIO"
    | "NIS"
    | "NLG"
    | "NOK"
    | "NPR"
    | "NTD"
    | "NZD"
    | "OMR"
    | "PAB"
    | "PEN"
    | "PGK"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PRB"
    | "PTE"
    | "PYG"
    | "QAR"
    | "RMB"
    | "RON"
    | "RSD"
    | "RUB"
    | "RWF"
    | "SAR"
    | "SBD"
    | "SCR"
    | "SDG"
    | "SEK"
    | "SGD"
    | "SHP"
    | "SIT"
    | "SKK"
    | "SLL"
    | "SLS"
    | "SOS"
    | "SRD"
    | "SSP"
    | "STN"
    | "SVC"
    | "SYP"
    | "SZL"
    | "THB"
    | "TJS"
    | "TMT"
    | "TND"
    | "TOP"
    | "TRY"
    | "TTD"
    | "TVD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "USN"
    | "UYI"
    | "UYU"
    | "UYW"
    | "UZS"
    | "VES"
    | "VND"
    | "VUV"
    | "WST"
    | "XAF"
    | "XAG"
    | "XAU"
    | "XBA"
    | "XBB"
    | "XBC"
    | "XBD"
    | "XCD"
    | "XDR"
    | "XOF"
    | "XPD"
    | "XPF"
    | "XPT"
    | "XSU"
    | "XTS"
    | "XUA"
    | "XXX"
    | "YER"
    | "ZAR"
    | "ZMW"
    | "ZWB"
    | "ZWL";
  /** Language that will be used in the report. */
  reportLanguage?: string;
  /** Customer company ID that will be used in the report. */
  customerCompanyId?: string;
}

export interface LedgerAccountsReportResponse {
  /** Report parameters that were used to generate the report. */
  reportParameters?: LedgerAccountsReportRequest;
  /** Report data. */
  reportData?: LedgerAccountsReportData;
}

/** Report period rows. */
export interface LedgerAccountsReportRow {
  /** Name of the row. */
  name?: string;
  /** Value of the row. */
  value?: number;
}

export interface LedgerReceipt {
  /**
   * Unique identifier of the ledger receipt. Generated by Procountor and present in the object returned.
   * @format int32
   */
  id?: number;
  /** Ledger receipt type. Use JOURNAL for creating ledger receipts (vouchers) containing ledger transactions without linkage to pre-existing resources. Other types are automatically generated by Procountor for holding accounting information for e.g. invoices. Types allowed for POST = JOURNAL. Types allowed for PUT = JOURNAL, SALES_INVOICE, PURCHASE_INVOICE, TRAVEL_INVOICE, BILL_OF_CHARGES Types allowed for GET listed below */
  type:
    | "JOURNAL"
    | "PURCHASE_INVOICE"
    | "SALES_INVOICE"
    | "PERIODIC_TAX_RETURN"
    | "TRAVEL_INVOICE"
    | "BILL_OF_CHARGES"
    | "VAT_FORM"
    | "SALARY"
    | "EMPLOYER_CONTRIBUTION"
    | "PURCHASE_ORDER"
    | "SALES_ORDER"
    | "BANK_STATEMENT_AS_RECEIPT"
    | "RECEIPT_FOR_OPENING_ACCOUNTS"
    | "REFERENCE_PAYMENT"
    | "TRACKING_PERIOD_OPENING_RECEIPT"
    | "VAT_SUMMARY";
  /** Ledger receipt status. Status of a ledger receipt equals the status of the linked invoice. All ledger receipts are initially created with status UNFINISHED. For journals, possible statuses are UNFINISHED, APPROVED and INVALIDATED. Ledger receipt statuses cannot be directly modified through the API. */
  status?:
    | "APPROVED"
    | "DELETED"
    | "EMPTY"
    | "INVALIDATED"
    | "INVOICED"
    | "MARKED_PAID"
    | "NOT_SENT"
    | "OVERRIDDEN"
    | "PAID"
    | "PARTLY_PAID"
    | "PAYMENT_DENIED"
    | "PAYMENT_QUEUED"
    | "PAYMENT_SENT_TO_BANK"
    | "PAYMENT_TRANSACTION_REMOVED"
    | "RECEIVED"
    | "SENT"
    | "STARTED"
    | "UNFINISHED"
    | "UNSAVED"
    | "VERIFIED";
  /**
   * Ledger receipt name.
   * @minLength 0
   * @maxLength 80
   */
  name: string;
  /**
   * Ledger receipt date. Must not be in a closed fiscal period. See GET /fiscalyears for a list of fiscal years.
   * @format date
   */
  receiptDate: string;
  /** Ledger receipt VAT type. */
  vatType: "PURCHASE" | "SALES";
  /**
   * Ledger receipt VAT status. This can be overridden on transaction level. Use here the numeric parts of VAT status codes listed in "VAT defaults" in Procountor. For example, for VAT status code "vat_12", use value 12. The VAT status used must be enabled for the current receipt type (sales/purchase).
   * @format int32
   */
  vatStatus: number;
  /**
   * Ledger receipt VAT country. Only for JOURNAL types of ledger receipts. Requires a special right for foreign VATs. See Address.country in POST /invoices for a list of allowable values.
   * @example "SWEDEN"
   */
  vatProcessing?:
    | "AFGHANISTAN"
    | "ALAND_ISLANDS"
    | "ALBANIA"
    | "ALGERIA"
    | "AMERICAN_SAMOA"
    | "ANDORRA"
    | "ANGOLA"
    | "ANGUILLA"
    | "ANTARCTICA"
    | "ANTIGUA_AND_BARBUDA"
    | "ARGENTINA"
    | "ARMENIA"
    | "ARUBA"
    | "ASCENSION_AND_TRISTAN_DA_CUNHA_SAINT_HELENA"
    | "AUSTRALIA"
    | "AUSTRIA"
    | "AZERBAIJAN"
    | "BAHAMAS"
    | "BAHRAIN"
    | "BANGLADESH"
    | "BARBADOS"
    | "BELARUS"
    | "BELGIUM"
    | "BELIZE"
    | "BENIN"
    | "BERMUDA"
    | "BHUTAN"
    | "BOLIVARIAN_REPUBLIC_OF_VENEZUELA"
    | "BOSNIA_AND_HERZEGOVINA"
    | "BOTSWANA"
    | "BOUVET_ISLAND"
    | "BRAZIL"
    | "BRITISH_INDIAN_OCEAN_TERRITORY"
    | "BRITISH_VIRGIN_ISLANDS"
    | "BRUNEI_DARUSSALAM"
    | "BULGARIA"
    | "BURKINA_FASO"
    | "BURUNDI"
    | "CABO_VERDE"
    | "CAMBODIA"
    | "CAMEROON"
    | "CANADA"
    | "CAYMAN_ISLANDS"
    | "CENTRAL_AFRICAN_REPUBLIC"
    | "CHAD"
    | "CHILE"
    | "CHINA"
    | "CHRISTMAS_ISLAND"
    | "COCOS_KEELING_ISLANDS"
    | "COLOMBIA"
    | "COMOROS"
    | "CONGO"
    | "COOK_ISLANDS"
    | "COSTA_RICA"
    | "COTE_D_IVOIRE"
    | "CROATIA"
    | "CUBA"
    | "CURACAO"
    | "CYPRUS"
    | "CZECH_REPUBLIC"
    | "DEMOCRATIC_PEOPLE_S_REPUBLIC_OF_KOREA"
    | "DENMARK"
    | "DJIBOUTI"
    | "DOMINICA"
    | "DOMINICAN_REPUBLIC"
    | "ECUADOR"
    | "EGYPT"
    | "EL_SALVADOR"
    | "EQUATORIAL_GUINEA"
    | "ERITREA"
    | "ESTONIA"
    | "ETHIOPIA"
    | "FALKLAND_ISLANDS_MALVINAS"
    | "FAROE_ISLANDS"
    | "FEDERATED_STATES_OF_MICRONESIA"
    | "FIJI"
    | "FINLAND"
    | "FRANCE"
    | "FRENCH_GUIANA"
    | "FRENCH_POLYNESIA"
    | "FRENCH_SOUTHERN_TERRITORIES"
    | "GABON"
    | "GAMBIA"
    | "GEORGIA"
    | "GERMANY"
    | "GHANA"
    | "GIBRALTAR"
    | "GREECE"
    | "GREENLAND"
    | "GRENADA"
    | "GUADELOUPE"
    | "GUAM"
    | "GUATEMALA"
    | "GUERNSEY"
    | "GUINEA"
    | "GUINEA_BISSAU"
    | "GUYANA"
    | "HAITI"
    | "HEARD_ISLAND_AND_MCDONALD_ISLANDS"
    | "HOLY_SEE_VATICAN_CITY_STATE"
    | "HONDURAS"
    | "HONG_KONG"
    | "HUNGARY"
    | "ICELAND"
    | "INDIA"
    | "INDONESIA"
    | "IRAQ"
    | "IRELAND"
    | "ISLAMIC_REPUBLIC_OF_IRAN"
    | "ISLE_OF_MAN"
    | "ISRAEL"
    | "ITALY"
    | "JAMAICA"
    | "JAPAN"
    | "JERSEY"
    | "JORDAN"
    | "KAZAKHSTAN"
    | "KENYA"
    | "KIRIBATI"
    | "KOSOVO_TEMPORARY"
    | "KUWAIT"
    | "KYRGYZSTAN"
    | "LAO_PEOPLE_S_DEMOCRATIC_REPUBLIC"
    | "LATVIA"
    | "LEBANON"
    | "LESOTHO"
    | "LIBERIA"
    | "LIBYA"
    | "LIECHTENSTEIN"
    | "LITHUANIA"
    | "LUXEMBOURG"
    | "MACAO"
    | "MADAGASCAR"
    | "MALAWI"
    | "MALAYSIA"
    | "MALDIVES"
    | "MALI"
    | "MALTA"
    | "MARSHALL_ISLANDS"
    | "MARTINIQUE"
    | "MAURITANIA"
    | "MAURITIUS"
    | "MAYOTTE"
    | "MEXICO"
    | "MONACO"
    | "MONGOLIA"
    | "MONTENEGRO"
    | "MONTSERRAT"
    | "MOROCCO"
    | "MOZAMBIQUE"
    | "MYANMAR"
    | "NAMIBIA"
    | "NAURU"
    | "NEPAL"
    | "NETHERLANDS"
    | "NEW_CALEDONIA"
    | "NEW_ZEALAND"
    | "NICARAGUA"
    | "NIGER"
    | "NIGERIA"
    | "NIUE"
    | "NORFOLK_ISLAND"
    | "NORTHERN_IRELAND_TEMPORARY"
    | "NORTHERN_MARIANA_ISLANDS"
    | "NORWAY"
    | "OMAN"
    | "PAKISTAN"
    | "PALAU"
    | "PANAMA"
    | "PAPUA_NEW_GUINEA"
    | "PARAGUAY"
    | "PERU"
    | "PHILIPPINES"
    | "PITCAIRN"
    | "PLURINATIONAL_STATE_OF_BOLIVIA"
    | "POLAND"
    | "PORTUGAL"
    | "PROVINCE_OF_CHINA_TAIWAN"
    | "PUERTO_RICO"
    | "QATAR"
    | "REPUBLIC_OF_KOREA"
    | "REPUBLIC_OF_MOLDOVA"
    | "REUNION"
    | "ROMANIA"
    | "RUSSIAN_FEDERATION"
    | "RWANDA"
    | "SAINT_BARTHELEMY"
    | "SAINT_KITTS_AND_NEVIS"
    | "SAINT_LUCIA"
    | "SAINT_MARTIN_FRENCH_PART"
    | "SAINT_PIERRE_AND_MIQUELON"
    | "SAINT_VINCENT_AND_THE_GRENADINES"
    | "SAMOA"
    | "SAN_MARINO"
    | "SAO_TOME_AND_PRINCIPE"
    | "SAUDI_ARABIA"
    | "SENEGAL"
    | "SERBIA"
    | "SEYCHELLES"
    | "SIERRA_LEONE"
    | "SINGAPORE"
    | "SINT_EUSTATIUS_AND_SABA_BONAIRE"
    | "SINT_MAARTEN_DUTCH_PART"
    | "SLOVAKIA"
    | "SLOVENIA"
    | "SOLOMON_ISLANDS"
    | "SOMALIA"
    | "SOUTH_AFRICA"
    | "SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS"
    | "SOUTH_SUDAN"
    | "SPAIN"
    | "SRI_LANKA"
    | "STATE_OF_PALESTINE"
    | "SUDAN"
    | "SURINAME"
    | "SVALBARD_AND_JAN_MAYEN"
    | "SWAZILAND"
    | "SWEDEN"
    | "SWITZERLAND"
    | "SYRIAN_ARAB_REPUBLIC"
    | "TAJIKISTAN"
    | "THAILAND"
    | "THE_DEMOCRATIC_REPUBLIC_OF_THE_CONGO"
    | "THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA"
    | "TIMOR_LESTE"
    | "TOGO"
    | "TOKELAU"
    | "TONGA"
    | "TRINIDAD_AND_TOBAGO"
    | "TUNISIA"
    | "TURKEY"
    | "TURKMENISTAN"
    | "TURKS_AND_CAICOS_ISLANDS"
    | "TUVALU"
    | "UGANDA"
    | "UKRAINE"
    | "UNITED_ARAB_EMIRATES"
    | "UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND"
    | "UNITED_REPUBLIC_OF_TANZANIA"
    | "UNITED_STATES_MINOR_OUTLYING_ISLANDS"
    | "UNITED_STATES_OF_AMERICA"
    | "URUGUAY"
    | "UZBEKISTAN"
    | "U_S_VIRGIN_ISLANDS"
    | "VANUATU"
    | "VIET_NAM"
    | "WALLIS_AND_FUTUNA"
    | "WESTERN_SAHARA"
    | "YEMEN"
    | "ZAMBIA"
    | "ZIMBABWE";
  /**
   * ID of the linked invoice. For sales and purchase invoice ledger receipts, this refers to the invoice the receipt holds accounting data for. For journal receipts, an invoice is automatically generated to store certain data fields. Use this ID in POST /attachments endpoint.
   * @format int32
   */
  invoiceId?: number;
  /**
   * Number of the ledger receipt.
   * @format int32
   */
  receiptNumber?: number;
  /**
   * Invoice notes. Linked to Invoice.notes. Not visible on ledger receipt printouts. Use \n as line break. Max length 10000.
   * @minLength 0
   * @maxLength 10000
   */
  invoiceNotes?: string;
  /**
   * Number of the linked invoice. Automatically generated by Procountor.
   * @format int32
   */
  invoiceNumber?: number;
  /**
   * Notes made by the accountant. Visible on ledger receipt printouts.
   * @minLength 0
   * @maxLength 255
   */
  accountantsNotes?: string;
  /**
   * Transaction description. This is a summary description for any transactions belonging to the ledger receipt.
   * @minLength 0
   * @maxLength 255
   */
  transactionDescription?: string;
  /** Receipt validity time. */
  receiptValidity?: "EMPTY" | "IMMEDIATELY" | "OVER_3_YEARS" | "SERVICE_PERIOD";
  /**
   * Start date of the receipt period. If set, must precede the end date of the period.
   * @format date
   */
  periodStartDate?: string;
  /**
   * End date of the receipt period. If this and the start date are set, this must be after the start date.
   * @format date
   */
  periodEndDate?: string;
  /** Partner code. Identifier for the related company or person. May represent a business ID, national identification number (HETU in Finland) or an account number, depending on the receipt type. */
  partnerCode?: string;
  /** Ledger receipt serial number. This field is optional and can only appear for Swedish and Danish environments. */
  serialNumber?: SerialNumber;
  /**
   * Ledger receipt version timestamp. Automatically generated by Procountor and updated every time the receipt is modified. When using PUT /ledgerreceipts, it is required to include the latest version timestamp of the receipt to the request. This prevents conflicts if the receipt is being modified from several sources.
   * @format date-time
   */
  version?: string;
  /** Accounting depreciation method for the receipt. */
  depreciation?:
    | "EMPTY"
    | "REDUCING_BALANCE_25_PERCENT"
    | "REDUCING_BALANCE_4_PERCENT"
    | "REDUCING_BALANCE_7_PERCENT"
    | "STRAIGHT_LINE_DEPRECIATION_3_YEARS"
    | "STRAIGHT_LINE_DEPRECIATION_5_YEARS";
  /**
   * VAT date to be used if payment based VAT is enabled
   * @format date
   */
  vatDate?: string;
  /** List containing transactions on the receipt. At least one transaction must be provided. */
  transactions: Transaction[];
  /** List of attachments added to this receipt. Use POST and DELETE /attachments to add and delete attachments. */
  attachments?: Attachment[];
}

/** Search results. */
export interface LedgerReceiptBasicInfo {
  /**
   * Unique identifier for the ledger receipt.
   * @format int32
   */
  id?: number;
  /** Ledger receipt type. */
  type?:
    | "JOURNAL"
    | "PURCHASE_INVOICE"
    | "SALES_INVOICE"
    | "PERIODIC_TAX_RETURN"
    | "TRAVEL_INVOICE"
    | "BILL_OF_CHARGES"
    | "VAT_FORM"
    | "SALARY"
    | "EMPLOYER_CONTRIBUTION"
    | "PURCHASE_ORDER"
    | "SALES_ORDER"
    | "BANK_STATEMENT_AS_RECEIPT"
    | "RECEIPT_FOR_OPENING_ACCOUNTS"
    | "REFERENCE_PAYMENT"
    | "TRACKING_PERIOD_OPENING_RECEIPT"
    | "VAT_SUMMARY";
  /** Ledger receipt status. */
  status?:
    | "EMPTY"
    | "UNFINISHED"
    | "NOT_SENT"
    | "SENT"
    | "RECEIVED"
    | "PAID"
    | "PAYMENT_DENIED"
    | "VERIFIED"
    | "APPROVED"
    | "INVALIDATED"
    | "PAYMENT_QUEUED"
    | "PARTLY_PAID"
    | "PAYMENT_SENT_TO_BANK"
    | "MARKED_PAID"
    | "STARTED"
    | "INVOICED"
    | "OVERRIDDEN"
    | "DELETED"
    | "UNSAVED"
    | "PAYMENT_TRANSACTION_REMOVED";
  /** Ledger receipt name. */
  name?: string;
  /**
   * Ledger receipt date.
   * @format date
   */
  receiptDate?: string;
  /**
   * Number of the ledger receipt.
   * @format int32
   */
  receiptNumber?: number;
  /**
   * Number of the linked invoice. Automatically generated by Procountor.
   * @format int32
   */
  invoiceNumber?: number;
  /** Ledger receipt serial number. This field is optional and can only appear for Swedish and Danish environments. */
  serialNumber?: SerialNumber;
  /**
   * Creation timestamp of the ledger receipt. Automatically generated by Procountor.
   * @format date-time
   */
  created?: string;
  /**
   * Ledger receipt version timestamp. Automatically generated by Procountor and updated every time the ledger receipt is modified.
   * @format date-time
   */
  version?: string;
}

export interface LedgerReceiptSearchResult {
  /** Search results. */
  results?: LedgerReceiptBasicInfo[];
  /** Search result metadata. */
  meta?: SearchResultMetaData;
}

/** Contains rights for management functionalities. */
export interface ManagementRights {
  /** Access level to basic company info functionality. */
  basicCompanyInfo?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to basic accounting info functionality. */
  basicAccountingInfo?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to chart of accounts and default reports functionality. */
  chartOfAccountsAndDefaultReports?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to users and user rights functionality. */
  usersAndUserRights?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to company user management functionality. */
  companyUserManagement?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to set up a company functionality. */
  setUpACompany?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to import data functionality. */
  importData?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to notifications functionality. */
  notifications?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to incomes register certificate functionality. */
  incomesRegisterCertificate?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to group letter functionality. */
  groupLetter?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to audit log functionality. */
  auditLog?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
}

export interface MarkInvoiceAsPaid {
  /**
   * Payment date. Cannot be in closed financial period
   * @format date
   */
  paymentDate: string;
  /** Amount in the given currency */
  amount: number;
  /**
   * Currency in ISO 4217 format. It should always be the same as in the invoice
   * @example "USD"
   */
  currency:
    | "AED"
    | "AFN"
    | "ALL"
    | "AMD"
    | "ANG"
    | "AOA"
    | "ARS"
    | "ATS"
    | "AUD"
    | "AWG"
    | "AZN"
    | "BAM"
    | "BBD"
    | "BDT"
    | "BEF"
    | "BGN"
    | "BHD"
    | "BIF"
    | "BMD"
    | "BND"
    | "BOB"
    | "BOV"
    | "BRL"
    | "BSD"
    | "BTN"
    | "BWP"
    | "BYN"
    | "BZD"
    | "CAD"
    | "CDF"
    | "CHE"
    | "CHF"
    | "CHW"
    | "CLF"
    | "CLP"
    | "CNH"
    | "CNT"
    | "CNY"
    | "COP"
    | "COU"
    | "CRC"
    | "CUC"
    | "CUP"
    | "CVE"
    | "CYP"
    | "CZK"
    | "DEM"
    | "DJF"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EEK"
    | "EGP"
    | "ERN"
    | "ESP"
    | "ETB"
    | "EUR"
    | "FIM"
    | "FJD"
    | "FKP"
    | "FRF"
    | "GBP"
    | "GEL"
    | "GGP"
    | "GHS"
    | "GIP"
    | "GMD"
    | "GNF"
    | "GRD"
    | "GTQ"
    | "GYD"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HTG"
    | "HUF"
    | "IDR"
    | "IEP"
    | "ILS"
    | "IMP"
    | "INR"
    | "IQD"
    | "IRR"
    | "ISK"
    | "ITL"
    | "JEP"
    | "JMD"
    | "JOD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KHR"
    | "KID"
    | "KMF"
    | "KPW"
    | "KRW"
    | "KWD"
    | "KYD"
    | "KZT"
    | "LAK"
    | "LBP"
    | "LKR"
    | "LRD"
    | "LSL"
    | "LTL"
    | "LUF"
    | "LVL"
    | "LYD"
    | "MAD"
    | "MDL"
    | "MGA"
    | "MKD"
    | "MMK"
    | "MNT"
    | "MOP"
    | "MRO"
    | "MTL"
    | "MUR"
    | "MVR"
    | "MWK"
    | "MXN"
    | "MXV"
    | "MYR"
    | "MZN"
    | "NAD"
    | "NGN"
    | "NIO"
    | "NIS"
    | "NLG"
    | "NOK"
    | "NPR"
    | "NTD"
    | "NZD"
    | "OMR"
    | "PAB"
    | "PEN"
    | "PGK"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PRB"
    | "PTE"
    | "PYG"
    | "QAR"
    | "RMB"
    | "RON"
    | "RSD"
    | "RUB"
    | "RWF"
    | "SAR"
    | "SBD"
    | "SCR"
    | "SDG"
    | "SEK"
    | "SGD"
    | "SHP"
    | "SIT"
    | "SKK"
    | "SLL"
    | "SLS"
    | "SOS"
    | "SRD"
    | "SSP"
    | "STN"
    | "SVC"
    | "SYP"
    | "SZL"
    | "THB"
    | "TJS"
    | "TMT"
    | "TND"
    | "TOP"
    | "TRY"
    | "TTD"
    | "TVD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "USN"
    | "UYI"
    | "UYU"
    | "UYW"
    | "UZS"
    | "VES"
    | "VND"
    | "VUV"
    | "WST"
    | "XAF"
    | "XAG"
    | "XAU"
    | "XBA"
    | "XBB"
    | "XBC"
    | "XBD"
    | "XCD"
    | "XDR"
    | "XOF"
    | "XPD"
    | "XPF"
    | "XPT"
    | "XSU"
    | "XTS"
    | "XUA"
    | "XXX"
    | "YER"
    | "ZAR"
    | "ZMW"
    | "ZWB"
    | "ZWL";
  /**
   * Payment description. Used only in sales invoices.
   * @minLength 0
   * @maxLength 140
   */
  description?: string;
  /** Payment method type. Used only in sales invoices. */
  paymentMethodType?:
    | "ADJUSTMENT"
    | "BANK_STATEMENT"
    | "CASH"
    | "CHARGE_CARD"
    | "CORRECTION"
    | "CREDIT_LOSS"
    | "CREDIT_NOTE"
    | "EXTERNAL_BANK_TRANSFER"
    | "SET_OFF";
}

/** List of the payment IDs */
export interface PaymentBasicInfo {
  /**
   * Id of the payment
   * @format int32
   */
  paymentId?: number;
  /** Custom Id of the payment */
  customId?: string;
}

/** Search results. */
export interface PaymentErrorMessage {
  /**
   * Unique identifier of the error message.
   * @format int32
   */
  id?: number;
  /**
   * Date when the error message was created.
   * @format date
   */
  createdDate?: string;
  /** Type of error. */
  type?:
    | "ANY_ERROR"
    | "PAYMENT_ERROR"
    | "FINVOICE_SEND_ERROR"
    | "FINVOICE_RECEIVE_ERROR"
    | "TYEL_ERROR"
    | "NETS_COLLECTION_ERROR";
  /** Status of error handling. */
  status?: "ALL" | "HANDLED" | "UNHANDLED";
  /** Error code of error. */
  errorCode?: string;
  /**
   * Identifier of payment object related to the error message. The related object can be an invoice or a direct bank transfer.
   * @format int32
   */
  referenceId?: number;
  /** Type of payment object related to the error message. NOTE: BANK_TRANSFER type was replaced by DIRECT_BANK_TRANSFER. */
  referenceType?:
    | "DIRECT_BANK_TRANSFER"
    | "DIRECT_SALARY_PAYMENT"
    | "DIRECT_SALARY_PAYMENT_LIST"
    | "INVOICE"
    | "NETS_COLLECTION"
    | "PAYMENTS_ANNOUNCEMENT";
  /** Detailed type of receipt related to the error message, sent only for invoices. */
  invoiceType?:
    | "VAT_FORM"
    | "PAYMENT_CORRECTION"
    | "TRACKING_PERIOD_OPENING_RECEIPT"
    | "PERIODIC_TAX_RETURN"
    | "UNKNOWN_RECEIPT_TYPE_F"
    | "UNKNOWN_RECEIPT_TYPE_G"
    | "ACCRUAL"
    | "BILL_OF_CHARGES"
    | "SALES_INVOICE"
    | "JOURNAL"
    | "JOURNAL_MOVING_STRAIGHT_TO_ACCOUNTING_PAGE"
    | "JOURNAL_BYPASSING_INVOICE_PAGE"
    | "PURCHASE_INVOICE"
    | "RECEIPT_FOR_OPENING_ACCOUNTS"
    | "SALARY"
    | "REFERENCE_PAYMENT"
    | "EMPLOYER_CONTRIBUTION"
    | "TRAVEL_INVOICE"
    | "TRAVEL_PLAN"
    | "BANK_STATEMENT_AS_RECEIPT"
    | "PURCHASE_ORDER"
    | "VAT_SUMMARY"
    | "SALES_ORDER"
    | "OFFER";
  /** Information about error handling. Can be empty if message is not handled yet. */
  errorHandlingInfo?: ErrorHandlingInfo;
}

export interface PaymentErrorMessageSearchResult {
  /** Search results. */
  results?: PaymentErrorMessage[];
  /** Search result metadata. */
  meta?: SearchResultMetaData;
}

export interface PaymentEvent {
  /**
   * Unique identifier of the payment event
   * @format int32
   */
  id?: number;
  /**
   * Unique identifier of the invoice.
   * @format int32
   */
  invoiceId?: number;
  /** Type of payment. */
  type?:
    | "ADJUSTMENT"
    | "BANKSTATEMENT"
    | "BANKSTATEMENT_TO_INVOICE"
    | "BANKSTATEMENT_TO_JOURNAL"
    | "BANKTRANSFERELSEWHERE"
    | "CASH"
    | "CASHDISCOUNT"
    | "CHARGECARD"
    | "COMPENSATIONINVOICE"
    | "CORRECTION"
    | "CREDITLOSS"
    | "ELSEWHERE"
    | "INVOICE_TO_INVOICE"
    | "INVOICE_TO_JOURNAL"
    | "JOURNAL_TO_INVOICE"
    | "JOURNAL_TO_JOURNAL"
    | "NETS_DK_INVOICE"
    | "OTHERPAYMENTMETHOD"
    | "REFERENCEPAYMENT"
    | "REFERENCEPAYMENT_TO_INVOICE"
    | "REFERENCEPAYMENT_TO_JOURNAL"
    | "SETOFF"
    | "TRANSACTION_FOCUSED";
  /**
   * Date when the payment transaction has to be performed.
   * @format date
   */
  paymentDate?: string;
  /** Status of payment. */
  status?:
    | "EMPTY"
    | "UNFINISHED"
    | "NOT_SENT"
    | "SENT"
    | "RECEIVED"
    | "PAID"
    | "PAYMENT_DENIED"
    | "VERIFIED"
    | "APPROVED"
    | "INVALIDATED"
    | "PAYMENT_QUEUED"
    | "PARTLY_PAID"
    | "PAYMENT_SENT_TO_BANK"
    | "MARKED_PAID"
    | "STARTED"
    | "INVOICED"
    | "OVERRIDDEN"
    | "DELETED"
    | "UNSAVED"
    | "PAYMENT_TRANSACTION_REMOVED";
  /** Payment amount in accounting currency. */
  amount?: number;
  /**
   * Currency of the payment in accounting currency in ISO 4217 format.
   * @example "EUR"
   */
  currency?:
    | "AED"
    | "AFN"
    | "ALL"
    | "AMD"
    | "ANG"
    | "AOA"
    | "ARS"
    | "ATS"
    | "AUD"
    | "AWG"
    | "AZN"
    | "BAM"
    | "BBD"
    | "BDT"
    | "BEF"
    | "BGN"
    | "BHD"
    | "BIF"
    | "BMD"
    | "BND"
    | "BOB"
    | "BOV"
    | "BRL"
    | "BSD"
    | "BTN"
    | "BWP"
    | "BYN"
    | "BZD"
    | "CAD"
    | "CDF"
    | "CHE"
    | "CHF"
    | "CHW"
    | "CLF"
    | "CLP"
    | "CNH"
    | "CNT"
    | "CNY"
    | "COP"
    | "COU"
    | "CRC"
    | "CUC"
    | "CUP"
    | "CVE"
    | "CYP"
    | "CZK"
    | "DEM"
    | "DJF"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EEK"
    | "EGP"
    | "ERN"
    | "ESP"
    | "ETB"
    | "EUR"
    | "FIM"
    | "FJD"
    | "FKP"
    | "FRF"
    | "GBP"
    | "GEL"
    | "GGP"
    | "GHS"
    | "GIP"
    | "GMD"
    | "GNF"
    | "GRD"
    | "GTQ"
    | "GYD"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HTG"
    | "HUF"
    | "IDR"
    | "IEP"
    | "ILS"
    | "IMP"
    | "INR"
    | "IQD"
    | "IRR"
    | "ISK"
    | "ITL"
    | "JEP"
    | "JMD"
    | "JOD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KHR"
    | "KID"
    | "KMF"
    | "KPW"
    | "KRW"
    | "KWD"
    | "KYD"
    | "KZT"
    | "LAK"
    | "LBP"
    | "LKR"
    | "LRD"
    | "LSL"
    | "LTL"
    | "LUF"
    | "LVL"
    | "LYD"
    | "MAD"
    | "MDL"
    | "MGA"
    | "MKD"
    | "MMK"
    | "MNT"
    | "MOP"
    | "MRO"
    | "MTL"
    | "MUR"
    | "MVR"
    | "MWK"
    | "MXN"
    | "MXV"
    | "MYR"
    | "MZN"
    | "NAD"
    | "NGN"
    | "NIO"
    | "NIS"
    | "NLG"
    | "NOK"
    | "NPR"
    | "NTD"
    | "NZD"
    | "OMR"
    | "PAB"
    | "PEN"
    | "PGK"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PRB"
    | "PTE"
    | "PYG"
    | "QAR"
    | "RMB"
    | "RON"
    | "RSD"
    | "RUB"
    | "RWF"
    | "SAR"
    | "SBD"
    | "SCR"
    | "SDG"
    | "SEK"
    | "SGD"
    | "SHP"
    | "SIT"
    | "SKK"
    | "SLL"
    | "SLS"
    | "SOS"
    | "SRD"
    | "SSP"
    | "STN"
    | "SVC"
    | "SYP"
    | "SZL"
    | "THB"
    | "TJS"
    | "TMT"
    | "TND"
    | "TOP"
    | "TRY"
    | "TTD"
    | "TVD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "USN"
    | "UYI"
    | "UYU"
    | "UYW"
    | "UZS"
    | "VES"
    | "VND"
    | "VUV"
    | "WST"
    | "XAF"
    | "XAG"
    | "XAU"
    | "XBA"
    | "XBB"
    | "XBC"
    | "XBD"
    | "XCD"
    | "XDR"
    | "XOF"
    | "XPD"
    | "XPF"
    | "XPT"
    | "XSU"
    | "XTS"
    | "XUA"
    | "XXX"
    | "YER"
    | "ZAR"
    | "ZMW"
    | "ZWB"
    | "ZWL";
  /** Payment description. Used only in sales invoices. */
  description?: string;
  /** Payment amount in paid currency. */
  paidAmount?: number;
  /**
   * Currency of the payment in paid currency in ISO 4217 format.
   * @example "SEK"
   */
  paidCurrency?:
    | "AED"
    | "AFN"
    | "ALL"
    | "AMD"
    | "ANG"
    | "AOA"
    | "ARS"
    | "ATS"
    | "AUD"
    | "AWG"
    | "AZN"
    | "BAM"
    | "BBD"
    | "BDT"
    | "BEF"
    | "BGN"
    | "BHD"
    | "BIF"
    | "BMD"
    | "BND"
    | "BOB"
    | "BOV"
    | "BRL"
    | "BSD"
    | "BTN"
    | "BWP"
    | "BYN"
    | "BZD"
    | "CAD"
    | "CDF"
    | "CHE"
    | "CHF"
    | "CHW"
    | "CLF"
    | "CLP"
    | "CNH"
    | "CNT"
    | "CNY"
    | "COP"
    | "COU"
    | "CRC"
    | "CUC"
    | "CUP"
    | "CVE"
    | "CYP"
    | "CZK"
    | "DEM"
    | "DJF"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EEK"
    | "EGP"
    | "ERN"
    | "ESP"
    | "ETB"
    | "EUR"
    | "FIM"
    | "FJD"
    | "FKP"
    | "FRF"
    | "GBP"
    | "GEL"
    | "GGP"
    | "GHS"
    | "GIP"
    | "GMD"
    | "GNF"
    | "GRD"
    | "GTQ"
    | "GYD"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HTG"
    | "HUF"
    | "IDR"
    | "IEP"
    | "ILS"
    | "IMP"
    | "INR"
    | "IQD"
    | "IRR"
    | "ISK"
    | "ITL"
    | "JEP"
    | "JMD"
    | "JOD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KHR"
    | "KID"
    | "KMF"
    | "KPW"
    | "KRW"
    | "KWD"
    | "KYD"
    | "KZT"
    | "LAK"
    | "LBP"
    | "LKR"
    | "LRD"
    | "LSL"
    | "LTL"
    | "LUF"
    | "LVL"
    | "LYD"
    | "MAD"
    | "MDL"
    | "MGA"
    | "MKD"
    | "MMK"
    | "MNT"
    | "MOP"
    | "MRO"
    | "MTL"
    | "MUR"
    | "MVR"
    | "MWK"
    | "MXN"
    | "MXV"
    | "MYR"
    | "MZN"
    | "NAD"
    | "NGN"
    | "NIO"
    | "NIS"
    | "NLG"
    | "NOK"
    | "NPR"
    | "NTD"
    | "NZD"
    | "OMR"
    | "PAB"
    | "PEN"
    | "PGK"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PRB"
    | "PTE"
    | "PYG"
    | "QAR"
    | "RMB"
    | "RON"
    | "RSD"
    | "RUB"
    | "RWF"
    | "SAR"
    | "SBD"
    | "SCR"
    | "SDG"
    | "SEK"
    | "SGD"
    | "SHP"
    | "SIT"
    | "SKK"
    | "SLL"
    | "SLS"
    | "SOS"
    | "SRD"
    | "SSP"
    | "STN"
    | "SVC"
    | "SYP"
    | "SZL"
    | "THB"
    | "TJS"
    | "TMT"
    | "TND"
    | "TOP"
    | "TRY"
    | "TTD"
    | "TVD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "USN"
    | "UYI"
    | "UYU"
    | "UYW"
    | "UZS"
    | "VES"
    | "VND"
    | "VUV"
    | "WST"
    | "XAF"
    | "XAG"
    | "XAU"
    | "XBA"
    | "XBB"
    | "XBC"
    | "XBD"
    | "XCD"
    | "XDR"
    | "XOF"
    | "XPD"
    | "XPF"
    | "XPT"
    | "XSU"
    | "XTS"
    | "XUA"
    | "XXX"
    | "YER"
    | "ZAR"
    | "ZMW"
    | "ZWB"
    | "ZWL";
}

export interface PaymentEventSearchResult {
  /** Search results. */
  results?: PaymentEvent[];
  /** Search result metadata. */
  meta?: SearchResultMetaData;
}

/** Invoice payment info. Includes the bank account to which the invoice should be paid, how it should be paid and when it should be paid. */
export interface PaymentInfo {
  /** Payment method. Methods other than BANK_TRANSFER, CASH, CLEARING may require fields not supported by the API. The DIRECT_DEBIT method is not supported by POST /invoices and PUT /invoices endpoints. The DKLMPKRE method is deprecated and read only, DOMESTIC_PAYMENT_CREDITOR should be used instead. */
  paymentMethod:
    | "BANK_TRANSFER"
    | "DIRECT_PAYMENT"
    | "CLEARING"
    | "CREDIT_CARD_CHARGE"
    | "FOREIGN_PAYMENT"
    | "OTHER"
    | "CASH"
    | "DOMESTIC_PAYMENT_PLUSGIRO"
    | "DOMESTIC_PAYMENT_BANKGIRO"
    | "DOMESTIC_PAYMENT_CREDITOR"
    | "DKLMPKRE"
    | "NETS";
  /**
   * Currency of the payment in ISO 4217 format.
   * @example "EUR"
   */
  currency:
    | "AED"
    | "AFN"
    | "ALL"
    | "AMD"
    | "ANG"
    | "AOA"
    | "ARS"
    | "ATS"
    | "AUD"
    | "AWG"
    | "AZN"
    | "BAM"
    | "BBD"
    | "BDT"
    | "BEF"
    | "BGN"
    | "BHD"
    | "BIF"
    | "BMD"
    | "BND"
    | "BOB"
    | "BOV"
    | "BRL"
    | "BSD"
    | "BTN"
    | "BWP"
    | "BYN"
    | "BZD"
    | "CAD"
    | "CDF"
    | "CHE"
    | "CHF"
    | "CHW"
    | "CLF"
    | "CLP"
    | "CNH"
    | "CNT"
    | "CNY"
    | "COP"
    | "COU"
    | "CRC"
    | "CUC"
    | "CUP"
    | "CVE"
    | "CYP"
    | "CZK"
    | "DEM"
    | "DJF"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EEK"
    | "EGP"
    | "ERN"
    | "ESP"
    | "ETB"
    | "EUR"
    | "FIM"
    | "FJD"
    | "FKP"
    | "FRF"
    | "GBP"
    | "GEL"
    | "GGP"
    | "GHS"
    | "GIP"
    | "GMD"
    | "GNF"
    | "GRD"
    | "GTQ"
    | "GYD"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HTG"
    | "HUF"
    | "IDR"
    | "IEP"
    | "ILS"
    | "IMP"
    | "INR"
    | "IQD"
    | "IRR"
    | "ISK"
    | "ITL"
    | "JEP"
    | "JMD"
    | "JOD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KHR"
    | "KID"
    | "KMF"
    | "KPW"
    | "KRW"
    | "KWD"
    | "KYD"
    | "KZT"
    | "LAK"
    | "LBP"
    | "LKR"
    | "LRD"
    | "LSL"
    | "LTL"
    | "LUF"
    | "LVL"
    | "LYD"
    | "MAD"
    | "MDL"
    | "MGA"
    | "MKD"
    | "MMK"
    | "MNT"
    | "MOP"
    | "MRO"
    | "MTL"
    | "MUR"
    | "MVR"
    | "MWK"
    | "MXN"
    | "MXV"
    | "MYR"
    | "MZN"
    | "NAD"
    | "NGN"
    | "NIO"
    | "NIS"
    | "NLG"
    | "NOK"
    | "NPR"
    | "NTD"
    | "NZD"
    | "OMR"
    | "PAB"
    | "PEN"
    | "PGK"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PRB"
    | "PTE"
    | "PYG"
    | "QAR"
    | "RMB"
    | "RON"
    | "RSD"
    | "RUB"
    | "RWF"
    | "SAR"
    | "SBD"
    | "SCR"
    | "SDG"
    | "SEK"
    | "SGD"
    | "SHP"
    | "SIT"
    | "SKK"
    | "SLL"
    | "SLS"
    | "SOS"
    | "SRD"
    | "SSP"
    | "STN"
    | "SVC"
    | "SYP"
    | "SZL"
    | "THB"
    | "TJS"
    | "TMT"
    | "TND"
    | "TOP"
    | "TRY"
    | "TTD"
    | "TVD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "USN"
    | "UYI"
    | "UYU"
    | "UYW"
    | "UZS"
    | "VES"
    | "VND"
    | "VUV"
    | "WST"
    | "XAF"
    | "XAG"
    | "XAU"
    | "XBA"
    | "XBB"
    | "XBC"
    | "XBD"
    | "XCD"
    | "XDR"
    | "XOF"
    | "XPD"
    | "XPF"
    | "XPT"
    | "XSU"
    | "XTS"
    | "XUA"
    | "XXX"
    | "YER"
    | "ZAR"
    | "ZMW"
    | "ZWB"
    | "ZWL";
  /** Bank account number. */
  bankAccount?: BankAccount;
  /**
   * Payment due date. The payment term can be 0-999 days.
   * @format date
   */
  dueDate: string;
  /**
   * Currency exchange rate. Calculated as the amount of one unit of domestic currency in foreign currency. Only foreign currency payments should have a value other than 1.
   * @min 0
   * @exclusiveMin true
   * @max 1000000
   * @exclusiveMax false
   * @example 1
   */
  currencyRate: number;
  /** Discount percentage set in term of payment. Determines the discount if the invoice is paid before due date. */
  paymentTermPercentage?: number;
  /** Only SALES_INVOICE, SALES_ORDER, PURCHASE_INVOICE and PURCHASE_ORDER. Cash discount set on the invoice. */
  cashDiscount?: CashDiscount;
  /**
   * Payment reference code. If specified, must be a valid reference code where the last digit is a check digit. If the field is given an empty string value, a reference code is automatically generated by Procountor. If the field is not provided at all, no reference code will be assigned to the invoice.
   * @example "26013"
   */
  bankReferenceCode?: string;
  /** Reference code generation type. If type not allowed for a user country will be given, then 400 is returned */
  bankReferenceCodeType?: "RF" | "FI" | "OCR" | "KID" | "GIK01" | "GIK04" | "GIK15" | "FIK71" | "FIK73" | "FIK75";
  /**
   * Receiver bank's clearing code for foreign payments.
   * @minLength 0
   * @maxLength 50
   */
  clearingCode?: string;
}

/** Intermediary bank name and address. If filled in, then it have to be filled in full. Used in foreign payments. */
export interface PaymentIntermediaryBankNameAndAddress {
  /**
   * Name ("first line") in the address.
   * @minLength 0
   * @maxLength 80
   */
  name: string;
  /**
   * Specifier, such as c/o address.
   * @minLength 0
   * @maxLength 80
   */
  specifier?: string;
  /**
   * Street. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 80
   */
  street?: string;
  /**
   * Zip code. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 20
   */
  zip?: string;
  /**
   * City. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 40
   */
  city?: string;
  /**
   * Country.
   * @example "SWEDEN"
   */
  country?:
    | "AFGHANISTAN"
    | "ALAND_ISLANDS"
    | "ALBANIA"
    | "ALGERIA"
    | "AMERICAN_SAMOA"
    | "ANDORRA"
    | "ANGOLA"
    | "ANGUILLA"
    | "ANTARCTICA"
    | "ANTIGUA_AND_BARBUDA"
    | "ARGENTINA"
    | "ARMENIA"
    | "ARUBA"
    | "ASCENSION_AND_TRISTAN_DA_CUNHA_SAINT_HELENA"
    | "AUSTRALIA"
    | "AUSTRIA"
    | "AZERBAIJAN"
    | "BAHAMAS"
    | "BAHRAIN"
    | "BANGLADESH"
    | "BARBADOS"
    | "BELARUS"
    | "BELGIUM"
    | "BELIZE"
    | "BENIN"
    | "BERMUDA"
    | "BHUTAN"
    | "BOLIVARIAN_REPUBLIC_OF_VENEZUELA"
    | "BOSNIA_AND_HERZEGOVINA"
    | "BOTSWANA"
    | "BOUVET_ISLAND"
    | "BRAZIL"
    | "BRITISH_INDIAN_OCEAN_TERRITORY"
    | "BRITISH_VIRGIN_ISLANDS"
    | "BRUNEI_DARUSSALAM"
    | "BULGARIA"
    | "BURKINA_FASO"
    | "BURUNDI"
    | "CABO_VERDE"
    | "CAMBODIA"
    | "CAMEROON"
    | "CANADA"
    | "CAYMAN_ISLANDS"
    | "CENTRAL_AFRICAN_REPUBLIC"
    | "CHAD"
    | "CHILE"
    | "CHINA"
    | "CHRISTMAS_ISLAND"
    | "COCOS_KEELING_ISLANDS"
    | "COLOMBIA"
    | "COMOROS"
    | "CONGO"
    | "COOK_ISLANDS"
    | "COSTA_RICA"
    | "COTE_D_IVOIRE"
    | "CROATIA"
    | "CUBA"
    | "CURACAO"
    | "CYPRUS"
    | "CZECH_REPUBLIC"
    | "DEMOCRATIC_PEOPLE_S_REPUBLIC_OF_KOREA"
    | "DENMARK"
    | "DJIBOUTI"
    | "DOMINICA"
    | "DOMINICAN_REPUBLIC"
    | "ECUADOR"
    | "EGYPT"
    | "EL_SALVADOR"
    | "EQUATORIAL_GUINEA"
    | "ERITREA"
    | "ESTONIA"
    | "ETHIOPIA"
    | "FALKLAND_ISLANDS_MALVINAS"
    | "FAROE_ISLANDS"
    | "FEDERATED_STATES_OF_MICRONESIA"
    | "FIJI"
    | "FINLAND"
    | "FRANCE"
    | "FRENCH_GUIANA"
    | "FRENCH_POLYNESIA"
    | "FRENCH_SOUTHERN_TERRITORIES"
    | "GABON"
    | "GAMBIA"
    | "GEORGIA"
    | "GERMANY"
    | "GHANA"
    | "GIBRALTAR"
    | "GREECE"
    | "GREENLAND"
    | "GRENADA"
    | "GUADELOUPE"
    | "GUAM"
    | "GUATEMALA"
    | "GUERNSEY"
    | "GUINEA"
    | "GUINEA_BISSAU"
    | "GUYANA"
    | "HAITI"
    | "HEARD_ISLAND_AND_MCDONALD_ISLANDS"
    | "HOLY_SEE_VATICAN_CITY_STATE"
    | "HONDURAS"
    | "HONG_KONG"
    | "HUNGARY"
    | "ICELAND"
    | "INDIA"
    | "INDONESIA"
    | "IRAQ"
    | "IRELAND"
    | "ISLAMIC_REPUBLIC_OF_IRAN"
    | "ISLE_OF_MAN"
    | "ISRAEL"
    | "ITALY"
    | "JAMAICA"
    | "JAPAN"
    | "JERSEY"
    | "JORDAN"
    | "KAZAKHSTAN"
    | "KENYA"
    | "KIRIBATI"
    | "KOSOVO_TEMPORARY"
    | "KUWAIT"
    | "KYRGYZSTAN"
    | "LAO_PEOPLE_S_DEMOCRATIC_REPUBLIC"
    | "LATVIA"
    | "LEBANON"
    | "LESOTHO"
    | "LIBERIA"
    | "LIBYA"
    | "LIECHTENSTEIN"
    | "LITHUANIA"
    | "LUXEMBOURG"
    | "MACAO"
    | "MADAGASCAR"
    | "MALAWI"
    | "MALAYSIA"
    | "MALDIVES"
    | "MALI"
    | "MALTA"
    | "MARSHALL_ISLANDS"
    | "MARTINIQUE"
    | "MAURITANIA"
    | "MAURITIUS"
    | "MAYOTTE"
    | "MEXICO"
    | "MONACO"
    | "MONGOLIA"
    | "MONTENEGRO"
    | "MONTSERRAT"
    | "MOROCCO"
    | "MOZAMBIQUE"
    | "MYANMAR"
    | "NAMIBIA"
    | "NAURU"
    | "NEPAL"
    | "NETHERLANDS"
    | "NEW_CALEDONIA"
    | "NEW_ZEALAND"
    | "NICARAGUA"
    | "NIGER"
    | "NIGERIA"
    | "NIUE"
    | "NORFOLK_ISLAND"
    | "NORTHERN_IRELAND_TEMPORARY"
    | "NORTHERN_MARIANA_ISLANDS"
    | "NORWAY"
    | "OMAN"
    | "PAKISTAN"
    | "PALAU"
    | "PANAMA"
    | "PAPUA_NEW_GUINEA"
    | "PARAGUAY"
    | "PERU"
    | "PHILIPPINES"
    | "PITCAIRN"
    | "PLURINATIONAL_STATE_OF_BOLIVIA"
    | "POLAND"
    | "PORTUGAL"
    | "PROVINCE_OF_CHINA_TAIWAN"
    | "PUERTO_RICO"
    | "QATAR"
    | "REPUBLIC_OF_KOREA"
    | "REPUBLIC_OF_MOLDOVA"
    | "REUNION"
    | "ROMANIA"
    | "RUSSIAN_FEDERATION"
    | "RWANDA"
    | "SAINT_BARTHELEMY"
    | "SAINT_KITTS_AND_NEVIS"
    | "SAINT_LUCIA"
    | "SAINT_MARTIN_FRENCH_PART"
    | "SAINT_PIERRE_AND_MIQUELON"
    | "SAINT_VINCENT_AND_THE_GRENADINES"
    | "SAMOA"
    | "SAN_MARINO"
    | "SAO_TOME_AND_PRINCIPE"
    | "SAUDI_ARABIA"
    | "SENEGAL"
    | "SERBIA"
    | "SEYCHELLES"
    | "SIERRA_LEONE"
    | "SINGAPORE"
    | "SINT_EUSTATIUS_AND_SABA_BONAIRE"
    | "SINT_MAARTEN_DUTCH_PART"
    | "SLOVAKIA"
    | "SLOVENIA"
    | "SOLOMON_ISLANDS"
    | "SOMALIA"
    | "SOUTH_AFRICA"
    | "SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS"
    | "SOUTH_SUDAN"
    | "SPAIN"
    | "SRI_LANKA"
    | "STATE_OF_PALESTINE"
    | "SUDAN"
    | "SURINAME"
    | "SVALBARD_AND_JAN_MAYEN"
    | "SWAZILAND"
    | "SWEDEN"
    | "SWITZERLAND"
    | "SYRIAN_ARAB_REPUBLIC"
    | "TAJIKISTAN"
    | "THAILAND"
    | "THE_DEMOCRATIC_REPUBLIC_OF_THE_CONGO"
    | "THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA"
    | "TIMOR_LESTE"
    | "TOGO"
    | "TOKELAU"
    | "TONGA"
    | "TRINIDAD_AND_TOBAGO"
    | "TUNISIA"
    | "TURKEY"
    | "TURKMENISTAN"
    | "TURKS_AND_CAICOS_ISLANDS"
    | "TUVALU"
    | "UGANDA"
    | "UKRAINE"
    | "UNITED_ARAB_EMIRATES"
    | "UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND"
    | "UNITED_REPUBLIC_OF_TANZANIA"
    | "UNITED_STATES_MINOR_OUTLYING_ISLANDS"
    | "UNITED_STATES_OF_AMERICA"
    | "URUGUAY"
    | "UZBEKISTAN"
    | "U_S_VIRGIN_ISLANDS"
    | "VANUATU"
    | "VIET_NAM"
    | "WALLIS_AND_FUTUNA"
    | "WESTERN_SAHARA"
    | "YEMEN"
    | "ZAMBIA"
    | "ZIMBABWE";
  /**
   * Subdivision of the city
   * @minLength 0
   * @maxLength 35
   */
  subdivision?: string;
}

/** Recipient bank name and address. Used in foreign payments. */
export interface PaymentReceiverBankNameAndAddress {
  /**
   * Name ("first line") in the address.
   * @minLength 0
   * @maxLength 80
   */
  name: string;
  /**
   * Specifier, such as c/o address.
   * @minLength 0
   * @maxLength 80
   */
  specifier?: string;
  /**
   * Street. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 80
   */
  street?: string;
  /**
   * Zip code. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 20
   */
  zip?: string;
  /**
   * City. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 40
   */
  city?: string;
  /**
   * Country.
   * @example "SWEDEN"
   */
  country?:
    | "AFGHANISTAN"
    | "ALAND_ISLANDS"
    | "ALBANIA"
    | "ALGERIA"
    | "AMERICAN_SAMOA"
    | "ANDORRA"
    | "ANGOLA"
    | "ANGUILLA"
    | "ANTARCTICA"
    | "ANTIGUA_AND_BARBUDA"
    | "ARGENTINA"
    | "ARMENIA"
    | "ARUBA"
    | "ASCENSION_AND_TRISTAN_DA_CUNHA_SAINT_HELENA"
    | "AUSTRALIA"
    | "AUSTRIA"
    | "AZERBAIJAN"
    | "BAHAMAS"
    | "BAHRAIN"
    | "BANGLADESH"
    | "BARBADOS"
    | "BELARUS"
    | "BELGIUM"
    | "BELIZE"
    | "BENIN"
    | "BERMUDA"
    | "BHUTAN"
    | "BOLIVARIAN_REPUBLIC_OF_VENEZUELA"
    | "BOSNIA_AND_HERZEGOVINA"
    | "BOTSWANA"
    | "BOUVET_ISLAND"
    | "BRAZIL"
    | "BRITISH_INDIAN_OCEAN_TERRITORY"
    | "BRITISH_VIRGIN_ISLANDS"
    | "BRUNEI_DARUSSALAM"
    | "BULGARIA"
    | "BURKINA_FASO"
    | "BURUNDI"
    | "CABO_VERDE"
    | "CAMBODIA"
    | "CAMEROON"
    | "CANADA"
    | "CAYMAN_ISLANDS"
    | "CENTRAL_AFRICAN_REPUBLIC"
    | "CHAD"
    | "CHILE"
    | "CHINA"
    | "CHRISTMAS_ISLAND"
    | "COCOS_KEELING_ISLANDS"
    | "COLOMBIA"
    | "COMOROS"
    | "CONGO"
    | "COOK_ISLANDS"
    | "COSTA_RICA"
    | "COTE_D_IVOIRE"
    | "CROATIA"
    | "CUBA"
    | "CURACAO"
    | "CYPRUS"
    | "CZECH_REPUBLIC"
    | "DEMOCRATIC_PEOPLE_S_REPUBLIC_OF_KOREA"
    | "DENMARK"
    | "DJIBOUTI"
    | "DOMINICA"
    | "DOMINICAN_REPUBLIC"
    | "ECUADOR"
    | "EGYPT"
    | "EL_SALVADOR"
    | "EQUATORIAL_GUINEA"
    | "ERITREA"
    | "ESTONIA"
    | "ETHIOPIA"
    | "FALKLAND_ISLANDS_MALVINAS"
    | "FAROE_ISLANDS"
    | "FEDERATED_STATES_OF_MICRONESIA"
    | "FIJI"
    | "FINLAND"
    | "FRANCE"
    | "FRENCH_GUIANA"
    | "FRENCH_POLYNESIA"
    | "FRENCH_SOUTHERN_TERRITORIES"
    | "GABON"
    | "GAMBIA"
    | "GEORGIA"
    | "GERMANY"
    | "GHANA"
    | "GIBRALTAR"
    | "GREECE"
    | "GREENLAND"
    | "GRENADA"
    | "GUADELOUPE"
    | "GUAM"
    | "GUATEMALA"
    | "GUERNSEY"
    | "GUINEA"
    | "GUINEA_BISSAU"
    | "GUYANA"
    | "HAITI"
    | "HEARD_ISLAND_AND_MCDONALD_ISLANDS"
    | "HOLY_SEE_VATICAN_CITY_STATE"
    | "HONDURAS"
    | "HONG_KONG"
    | "HUNGARY"
    | "ICELAND"
    | "INDIA"
    | "INDONESIA"
    | "IRAQ"
    | "IRELAND"
    | "ISLAMIC_REPUBLIC_OF_IRAN"
    | "ISLE_OF_MAN"
    | "ISRAEL"
    | "ITALY"
    | "JAMAICA"
    | "JAPAN"
    | "JERSEY"
    | "JORDAN"
    | "KAZAKHSTAN"
    | "KENYA"
    | "KIRIBATI"
    | "KOSOVO_TEMPORARY"
    | "KUWAIT"
    | "KYRGYZSTAN"
    | "LAO_PEOPLE_S_DEMOCRATIC_REPUBLIC"
    | "LATVIA"
    | "LEBANON"
    | "LESOTHO"
    | "LIBERIA"
    | "LIBYA"
    | "LIECHTENSTEIN"
    | "LITHUANIA"
    | "LUXEMBOURG"
    | "MACAO"
    | "MADAGASCAR"
    | "MALAWI"
    | "MALAYSIA"
    | "MALDIVES"
    | "MALI"
    | "MALTA"
    | "MARSHALL_ISLANDS"
    | "MARTINIQUE"
    | "MAURITANIA"
    | "MAURITIUS"
    | "MAYOTTE"
    | "MEXICO"
    | "MONACO"
    | "MONGOLIA"
    | "MONTENEGRO"
    | "MONTSERRAT"
    | "MOROCCO"
    | "MOZAMBIQUE"
    | "MYANMAR"
    | "NAMIBIA"
    | "NAURU"
    | "NEPAL"
    | "NETHERLANDS"
    | "NEW_CALEDONIA"
    | "NEW_ZEALAND"
    | "NICARAGUA"
    | "NIGER"
    | "NIGERIA"
    | "NIUE"
    | "NORFOLK_ISLAND"
    | "NORTHERN_IRELAND_TEMPORARY"
    | "NORTHERN_MARIANA_ISLANDS"
    | "NORWAY"
    | "OMAN"
    | "PAKISTAN"
    | "PALAU"
    | "PANAMA"
    | "PAPUA_NEW_GUINEA"
    | "PARAGUAY"
    | "PERU"
    | "PHILIPPINES"
    | "PITCAIRN"
    | "PLURINATIONAL_STATE_OF_BOLIVIA"
    | "POLAND"
    | "PORTUGAL"
    | "PROVINCE_OF_CHINA_TAIWAN"
    | "PUERTO_RICO"
    | "QATAR"
    | "REPUBLIC_OF_KOREA"
    | "REPUBLIC_OF_MOLDOVA"
    | "REUNION"
    | "ROMANIA"
    | "RUSSIAN_FEDERATION"
    | "RWANDA"
    | "SAINT_BARTHELEMY"
    | "SAINT_KITTS_AND_NEVIS"
    | "SAINT_LUCIA"
    | "SAINT_MARTIN_FRENCH_PART"
    | "SAINT_PIERRE_AND_MIQUELON"
    | "SAINT_VINCENT_AND_THE_GRENADINES"
    | "SAMOA"
    | "SAN_MARINO"
    | "SAO_TOME_AND_PRINCIPE"
    | "SAUDI_ARABIA"
    | "SENEGAL"
    | "SERBIA"
    | "SEYCHELLES"
    | "SIERRA_LEONE"
    | "SINGAPORE"
    | "SINT_EUSTATIUS_AND_SABA_BONAIRE"
    | "SINT_MAARTEN_DUTCH_PART"
    | "SLOVAKIA"
    | "SLOVENIA"
    | "SOLOMON_ISLANDS"
    | "SOMALIA"
    | "SOUTH_AFRICA"
    | "SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS"
    | "SOUTH_SUDAN"
    | "SPAIN"
    | "SRI_LANKA"
    | "STATE_OF_PALESTINE"
    | "SUDAN"
    | "SURINAME"
    | "SVALBARD_AND_JAN_MAYEN"
    | "SWAZILAND"
    | "SWEDEN"
    | "SWITZERLAND"
    | "SYRIAN_ARAB_REPUBLIC"
    | "TAJIKISTAN"
    | "THAILAND"
    | "THE_DEMOCRATIC_REPUBLIC_OF_THE_CONGO"
    | "THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA"
    | "TIMOR_LESTE"
    | "TOGO"
    | "TOKELAU"
    | "TONGA"
    | "TRINIDAD_AND_TOBAGO"
    | "TUNISIA"
    | "TURKEY"
    | "TURKMENISTAN"
    | "TURKS_AND_CAICOS_ISLANDS"
    | "TUVALU"
    | "UGANDA"
    | "UKRAINE"
    | "UNITED_ARAB_EMIRATES"
    | "UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND"
    | "UNITED_REPUBLIC_OF_TANZANIA"
    | "UNITED_STATES_MINOR_OUTLYING_ISLANDS"
    | "UNITED_STATES_OF_AMERICA"
    | "URUGUAY"
    | "UZBEKISTAN"
    | "U_S_VIRGIN_ISLANDS"
    | "VANUATU"
    | "VIET_NAM"
    | "WALLIS_AND_FUTUNA"
    | "WESTERN_SAHARA"
    | "YEMEN"
    | "ZAMBIA"
    | "ZIMBABWE";
  /**
   * Subdivision of the city
   * @minLength 0
   * @maxLength 35
   */
  subdivision?: string;
}

/** Recipient name with address. Recipient name is mandatory and is always in use, other fields are omitted in scenarios different then described below. In case of: foreign payments, Norway NETS payments, Norway SpareBank payments, Sweden Swedbank with missing bank reference payments and Sweden DanskeBank with missing bank reference payments full receiver address is needed. */
export interface PaymentRecipientNameAndAddress {
  /**
   * Name ("first line") in the address.
   * @minLength 0
   * @maxLength 80
   */
  name: string;
  /**
   * Specifier, such as c/o address.
   * @minLength 0
   * @maxLength 80
   */
  specifier?: string;
  /**
   * Street. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 80
   */
  street?: string;
  /**
   * Zip code. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 20
   */
  zip?: string;
  /**
   * City. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 40
   */
  city?: string;
  /**
   * Country.
   * @example "SWEDEN"
   */
  country?:
    | "AFGHANISTAN"
    | "ALAND_ISLANDS"
    | "ALBANIA"
    | "ALGERIA"
    | "AMERICAN_SAMOA"
    | "ANDORRA"
    | "ANGOLA"
    | "ANGUILLA"
    | "ANTARCTICA"
    | "ANTIGUA_AND_BARBUDA"
    | "ARGENTINA"
    | "ARMENIA"
    | "ARUBA"
    | "ASCENSION_AND_TRISTAN_DA_CUNHA_SAINT_HELENA"
    | "AUSTRALIA"
    | "AUSTRIA"
    | "AZERBAIJAN"
    | "BAHAMAS"
    | "BAHRAIN"
    | "BANGLADESH"
    | "BARBADOS"
    | "BELARUS"
    | "BELGIUM"
    | "BELIZE"
    | "BENIN"
    | "BERMUDA"
    | "BHUTAN"
    | "BOLIVARIAN_REPUBLIC_OF_VENEZUELA"
    | "BOSNIA_AND_HERZEGOVINA"
    | "BOTSWANA"
    | "BOUVET_ISLAND"
    | "BRAZIL"
    | "BRITISH_INDIAN_OCEAN_TERRITORY"
    | "BRITISH_VIRGIN_ISLANDS"
    | "BRUNEI_DARUSSALAM"
    | "BULGARIA"
    | "BURKINA_FASO"
    | "BURUNDI"
    | "CABO_VERDE"
    | "CAMBODIA"
    | "CAMEROON"
    | "CANADA"
    | "CAYMAN_ISLANDS"
    | "CENTRAL_AFRICAN_REPUBLIC"
    | "CHAD"
    | "CHILE"
    | "CHINA"
    | "CHRISTMAS_ISLAND"
    | "COCOS_KEELING_ISLANDS"
    | "COLOMBIA"
    | "COMOROS"
    | "CONGO"
    | "COOK_ISLANDS"
    | "COSTA_RICA"
    | "COTE_D_IVOIRE"
    | "CROATIA"
    | "CUBA"
    | "CURACAO"
    | "CYPRUS"
    | "CZECH_REPUBLIC"
    | "DEMOCRATIC_PEOPLE_S_REPUBLIC_OF_KOREA"
    | "DENMARK"
    | "DJIBOUTI"
    | "DOMINICA"
    | "DOMINICAN_REPUBLIC"
    | "ECUADOR"
    | "EGYPT"
    | "EL_SALVADOR"
    | "EQUATORIAL_GUINEA"
    | "ERITREA"
    | "ESTONIA"
    | "ETHIOPIA"
    | "FALKLAND_ISLANDS_MALVINAS"
    | "FAROE_ISLANDS"
    | "FEDERATED_STATES_OF_MICRONESIA"
    | "FIJI"
    | "FINLAND"
    | "FRANCE"
    | "FRENCH_GUIANA"
    | "FRENCH_POLYNESIA"
    | "FRENCH_SOUTHERN_TERRITORIES"
    | "GABON"
    | "GAMBIA"
    | "GEORGIA"
    | "GERMANY"
    | "GHANA"
    | "GIBRALTAR"
    | "GREECE"
    | "GREENLAND"
    | "GRENADA"
    | "GUADELOUPE"
    | "GUAM"
    | "GUATEMALA"
    | "GUERNSEY"
    | "GUINEA"
    | "GUINEA_BISSAU"
    | "GUYANA"
    | "HAITI"
    | "HEARD_ISLAND_AND_MCDONALD_ISLANDS"
    | "HOLY_SEE_VATICAN_CITY_STATE"
    | "HONDURAS"
    | "HONG_KONG"
    | "HUNGARY"
    | "ICELAND"
    | "INDIA"
    | "INDONESIA"
    | "IRAQ"
    | "IRELAND"
    | "ISLAMIC_REPUBLIC_OF_IRAN"
    | "ISLE_OF_MAN"
    | "ISRAEL"
    | "ITALY"
    | "JAMAICA"
    | "JAPAN"
    | "JERSEY"
    | "JORDAN"
    | "KAZAKHSTAN"
    | "KENYA"
    | "KIRIBATI"
    | "KOSOVO_TEMPORARY"
    | "KUWAIT"
    | "KYRGYZSTAN"
    | "LAO_PEOPLE_S_DEMOCRATIC_REPUBLIC"
    | "LATVIA"
    | "LEBANON"
    | "LESOTHO"
    | "LIBERIA"
    | "LIBYA"
    | "LIECHTENSTEIN"
    | "LITHUANIA"
    | "LUXEMBOURG"
    | "MACAO"
    | "MADAGASCAR"
    | "MALAWI"
    | "MALAYSIA"
    | "MALDIVES"
    | "MALI"
    | "MALTA"
    | "MARSHALL_ISLANDS"
    | "MARTINIQUE"
    | "MAURITANIA"
    | "MAURITIUS"
    | "MAYOTTE"
    | "MEXICO"
    | "MONACO"
    | "MONGOLIA"
    | "MONTENEGRO"
    | "MONTSERRAT"
    | "MOROCCO"
    | "MOZAMBIQUE"
    | "MYANMAR"
    | "NAMIBIA"
    | "NAURU"
    | "NEPAL"
    | "NETHERLANDS"
    | "NEW_CALEDONIA"
    | "NEW_ZEALAND"
    | "NICARAGUA"
    | "NIGER"
    | "NIGERIA"
    | "NIUE"
    | "NORFOLK_ISLAND"
    | "NORTHERN_IRELAND_TEMPORARY"
    | "NORTHERN_MARIANA_ISLANDS"
    | "NORWAY"
    | "OMAN"
    | "PAKISTAN"
    | "PALAU"
    | "PANAMA"
    | "PAPUA_NEW_GUINEA"
    | "PARAGUAY"
    | "PERU"
    | "PHILIPPINES"
    | "PITCAIRN"
    | "PLURINATIONAL_STATE_OF_BOLIVIA"
    | "POLAND"
    | "PORTUGAL"
    | "PROVINCE_OF_CHINA_TAIWAN"
    | "PUERTO_RICO"
    | "QATAR"
    | "REPUBLIC_OF_KOREA"
    | "REPUBLIC_OF_MOLDOVA"
    | "REUNION"
    | "ROMANIA"
    | "RUSSIAN_FEDERATION"
    | "RWANDA"
    | "SAINT_BARTHELEMY"
    | "SAINT_KITTS_AND_NEVIS"
    | "SAINT_LUCIA"
    | "SAINT_MARTIN_FRENCH_PART"
    | "SAINT_PIERRE_AND_MIQUELON"
    | "SAINT_VINCENT_AND_THE_GRENADINES"
    | "SAMOA"
    | "SAN_MARINO"
    | "SAO_TOME_AND_PRINCIPE"
    | "SAUDI_ARABIA"
    | "SENEGAL"
    | "SERBIA"
    | "SEYCHELLES"
    | "SIERRA_LEONE"
    | "SINGAPORE"
    | "SINT_EUSTATIUS_AND_SABA_BONAIRE"
    | "SINT_MAARTEN_DUTCH_PART"
    | "SLOVAKIA"
    | "SLOVENIA"
    | "SOLOMON_ISLANDS"
    | "SOMALIA"
    | "SOUTH_AFRICA"
    | "SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS"
    | "SOUTH_SUDAN"
    | "SPAIN"
    | "SRI_LANKA"
    | "STATE_OF_PALESTINE"
    | "SUDAN"
    | "SURINAME"
    | "SVALBARD_AND_JAN_MAYEN"
    | "SWAZILAND"
    | "SWEDEN"
    | "SWITZERLAND"
    | "SYRIAN_ARAB_REPUBLIC"
    | "TAJIKISTAN"
    | "THAILAND"
    | "THE_DEMOCRATIC_REPUBLIC_OF_THE_CONGO"
    | "THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA"
    | "TIMOR_LESTE"
    | "TOGO"
    | "TOKELAU"
    | "TONGA"
    | "TRINIDAD_AND_TOBAGO"
    | "TUNISIA"
    | "TURKEY"
    | "TURKMENISTAN"
    | "TURKS_AND_CAICOS_ISLANDS"
    | "TUVALU"
    | "UGANDA"
    | "UKRAINE"
    | "UNITED_ARAB_EMIRATES"
    | "UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND"
    | "UNITED_REPUBLIC_OF_TANZANIA"
    | "UNITED_STATES_MINOR_OUTLYING_ISLANDS"
    | "UNITED_STATES_OF_AMERICA"
    | "URUGUAY"
    | "UZBEKISTAN"
    | "U_S_VIRGIN_ISLANDS"
    | "VANUATU"
    | "VIET_NAM"
    | "WALLIS_AND_FUTUNA"
    | "WESTERN_SAHARA"
    | "YEMEN"
    | "ZAMBIA"
    | "ZIMBABWE";
  /**
   * Subdivision of the city
   * @minLength 0
   * @maxLength 35
   */
  subdivision?: string;
}

/** Contains rights for payment transactions functionalities. */
export interface PaymentRights {
  /** Access level to payment functionality. */
  payment?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to salary payments functionality. */
  salaryPayments?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to mark as paid functionality. */
  markAsPaid?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to direct bank transfer functionality. */
  directBankTransfer?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to bank statement and reference payment functionality. */
  bankStatementAndReferencePayment?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to payment allocation functionality. */
  paymentAllocation?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
}

export interface PaymentRowInfo {
  /**
   * Unique payment identifier.
   * @format int32
   */
  id?: number;
  /**
   * Unique invoice identifier.
   * @format int32
   */
  invoiceId?: number;
  /**
   * Date specifying when the payment transaction has to be performed. Payment date should be grater than current date.
   * @format date
   */
  paymentDate?: string;
  /** The amount of the payment in the given currency. Currency is defined within the invoice. */
  amount?: number;
  /** Recipient name. */
  receiverName?: string;
  /** Currency of payment. */
  currency?:
    | "AED"
    | "AFN"
    | "ALL"
    | "AMD"
    | "ANG"
    | "AOA"
    | "ARS"
    | "ATS"
    | "AUD"
    | "AWG"
    | "AZN"
    | "BAM"
    | "BBD"
    | "BDT"
    | "BEF"
    | "BGN"
    | "BHD"
    | "BIF"
    | "BMD"
    | "BND"
    | "BOB"
    | "BOV"
    | "BRL"
    | "BSD"
    | "BTN"
    | "BWP"
    | "BYN"
    | "BZD"
    | "CAD"
    | "CDF"
    | "CHE"
    | "CHF"
    | "CHW"
    | "CLF"
    | "CLP"
    | "CNH"
    | "CNT"
    | "CNY"
    | "COP"
    | "COU"
    | "CRC"
    | "CUC"
    | "CUP"
    | "CVE"
    | "CYP"
    | "CZK"
    | "DEM"
    | "DJF"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EEK"
    | "EGP"
    | "ERN"
    | "ESP"
    | "ETB"
    | "EUR"
    | "FIM"
    | "FJD"
    | "FKP"
    | "FRF"
    | "GBP"
    | "GEL"
    | "GGP"
    | "GHS"
    | "GIP"
    | "GMD"
    | "GNF"
    | "GRD"
    | "GTQ"
    | "GYD"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HTG"
    | "HUF"
    | "IDR"
    | "IEP"
    | "ILS"
    | "IMP"
    | "INR"
    | "IQD"
    | "IRR"
    | "ISK"
    | "ITL"
    | "JEP"
    | "JMD"
    | "JOD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KHR"
    | "KID"
    | "KMF"
    | "KPW"
    | "KRW"
    | "KWD"
    | "KYD"
    | "KZT"
    | "LAK"
    | "LBP"
    | "LKR"
    | "LRD"
    | "LSL"
    | "LTL"
    | "LUF"
    | "LVL"
    | "LYD"
    | "MAD"
    | "MDL"
    | "MGA"
    | "MKD"
    | "MMK"
    | "MNT"
    | "MOP"
    | "MRO"
    | "MTL"
    | "MUR"
    | "MVR"
    | "MWK"
    | "MXN"
    | "MXV"
    | "MYR"
    | "MZN"
    | "NAD"
    | "NGN"
    | "NIO"
    | "NIS"
    | "NLG"
    | "NOK"
    | "NPR"
    | "NTD"
    | "NZD"
    | "OMR"
    | "PAB"
    | "PEN"
    | "PGK"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PRB"
    | "PTE"
    | "PYG"
    | "QAR"
    | "RMB"
    | "RON"
    | "RSD"
    | "RUB"
    | "RWF"
    | "SAR"
    | "SBD"
    | "SCR"
    | "SDG"
    | "SEK"
    | "SGD"
    | "SHP"
    | "SIT"
    | "SKK"
    | "SLL"
    | "SLS"
    | "SOS"
    | "SRD"
    | "SSP"
    | "STN"
    | "SVC"
    | "SYP"
    | "SZL"
    | "THB"
    | "TJS"
    | "TMT"
    | "TND"
    | "TOP"
    | "TRY"
    | "TTD"
    | "TVD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "USN"
    | "UYI"
    | "UYU"
    | "UYW"
    | "UZS"
    | "VES"
    | "VND"
    | "VUV"
    | "WST"
    | "XAF"
    | "XAG"
    | "XAU"
    | "XBA"
    | "XBB"
    | "XBC"
    | "XBD"
    | "XCD"
    | "XDR"
    | "XOF"
    | "XPD"
    | "XPF"
    | "XPT"
    | "XSU"
    | "XTS"
    | "XUA"
    | "XXX"
    | "YER"
    | "ZAR"
    | "ZMW"
    | "ZWB"
    | "ZWL";
  /** Payer bank account. */
  payerAccount?: string;
  /** Payer BIC (Bank Identifier Code) code. */
  payerBic?: string;
  /** Message of the payment. */
  message?: string;
  /** Receiver bank account. */
  receiverAccount?: string;
  /** Received BIC (Bank Identifier Code) code. */
  receiverBic?: string;
  /** Name of the user who created payment. */
  createdBy?: string;
  /**
   * Payment status.
   * @example "SENT"
   */
  status?:
    | "APPROVED"
    | "DELETED"
    | "EMPTY"
    | "INVALIDATED"
    | "INVOICED"
    | "MARKED_PAID"
    | "NOT_SENT"
    | "OVERRIDDEN"
    | "PAID"
    | "PARTLY_PAID"
    | "PAYMENT_DENIED"
    | "PAYMENT_QUEUED"
    | "PAYMENT_SENT_TO_BANK"
    | "PAYMENT_TRANSACTION_REMOVED"
    | "RECEIVED"
    | "SENT"
    | "STARTED"
    | "UNFINISHED"
    | "UNSAVED"
    | "VERIFIED";
}

export interface PaymentSearchResult {
  /** Search results. */
  results?: BasicPaymentTransactionData[];
  /** Search result metadata. */
  meta?: SearchResultMetaData;
}

/** Response for creating direct bank transfers action (POST /payments/directbanktransfers) performed successfully */
export interface PaymentSummaries {
  /** List of identifiers of added payments. */
  transactions?: PaymentSummary[];
}

/** List of identifiers of added payments. */
export interface PaymentSummary {
  /**
   * Identifier of created payment, provided by the application.
   * @format int32
   */
  paymentId?: number;
  /** Optional identifier of requested payment object to be created. For example order number for a created direct bank transfer. Provided externally. */
  customId?: string;
}

/** These are possible response models */
export interface PaymentsConfirmationResponseModels {
  /** Response for creating direct bank transfers action (POST /payments/directbanktransfers) performed successfully */
  PaymentSummaries?: PaymentSummaries;
  /** Response information message */
  InfoMessage?: InfoMessage;
  /** Response for paying invoices action (POST /payments) performed successfully */
  InvoicePaymentSummaries?: InvoicePaymentSummaries;
}

/** Pension contracts. Employees' pension insurance. */
export interface PensionContract {
  /**
   * Unique identifier of pension contract.
   * @format int64
   */
  id?: number;
  /** Pension provider name. */
  providerName?: string;
  /** Agreement number. */
  number?: string;
  /** Is contract active. */
  active?: boolean;
  /** Label. */
  label?: string;
  /**
   * Version.
   * @format date-time
   */
  version?: string;
}

export interface Person {
  /**
   * Unique identifier of a Person in Person register. This id is same as business partner's partnerId for type PERSON.
   * @format int32
   */
  id?: number;
  /**
   * First name.
   * @minLength 0
   * @maxLength 80
   */
  firstName?: string;
  /**
   * Last name.
   * @minLength 1
   * @maxLength 80
   */
  lastName: string;
  /**
   * Job title.
   * @minLength 0
   * @maxLength 80
   */
  jobTitle?: string;
  /** Address. */
  deliveryAddress?: PersonFullAddress;
  /** Address. */
  homeCountryAddress?: PersonFullAddress;
  /** Payment details. */
  paymentInfo: PersonPaymentInfo;
  /** Invoicing information. */
  invoicingInfo: PersonInvoicingInfo;
  /** Register information. */
  registryInfo: PersonRegistryInfo;
  /**
   * Version. Not allowed in POST. Required in PUT.
   * @format date-time
   */
  version?: string;
}

/** Address of the person. Value may be empty. */
export interface PersonAddress {
  /**
   * Name ("first line") in the address.
   * @minLength 0
   * @maxLength 80
   */
  name: string;
  /**
   * Specifier, such as c/o address.
   * @minLength 0
   * @maxLength 80
   */
  specifier?: string;
  /**
   * Street. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 80
   */
  street?: string;
  /**
   * Zip code. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 20
   */
  zip?: string;
  /**
   * City. Required for SALES_INVOICE and SALES_ORDER if invoicing channel is MAIL. In that case, must be specified in counterPartyAddress if not specified in billingAddress.
   *
   * Required for SALES_INVOICE if invoicing channel is ELECTRONIC_INVOICE. In that case, must be specified in billingAddress and counterPartyAddress.
   * @minLength 0
   * @maxLength 40
   */
  city?: string;
  /**
   * Country.
   * @example "SWEDEN"
   */
  country?:
    | "AFGHANISTAN"
    | "ALAND_ISLANDS"
    | "ALBANIA"
    | "ALGERIA"
    | "AMERICAN_SAMOA"
    | "ANDORRA"
    | "ANGOLA"
    | "ANGUILLA"
    | "ANTARCTICA"
    | "ANTIGUA_AND_BARBUDA"
    | "ARGENTINA"
    | "ARMENIA"
    | "ARUBA"
    | "ASCENSION_AND_TRISTAN_DA_CUNHA_SAINT_HELENA"
    | "AUSTRALIA"
    | "AUSTRIA"
    | "AZERBAIJAN"
    | "BAHAMAS"
    | "BAHRAIN"
    | "BANGLADESH"
    | "BARBADOS"
    | "BELARUS"
    | "BELGIUM"
    | "BELIZE"
    | "BENIN"
    | "BERMUDA"
    | "BHUTAN"
    | "BOLIVARIAN_REPUBLIC_OF_VENEZUELA"
    | "BOSNIA_AND_HERZEGOVINA"
    | "BOTSWANA"
    | "BOUVET_ISLAND"
    | "BRAZIL"
    | "BRITISH_INDIAN_OCEAN_TERRITORY"
    | "BRITISH_VIRGIN_ISLANDS"
    | "BRUNEI_DARUSSALAM"
    | "BULGARIA"
    | "BURKINA_FASO"
    | "BURUNDI"
    | "CABO_VERDE"
    | "CAMBODIA"
    | "CAMEROON"
    | "CANADA"
    | "CAYMAN_ISLANDS"
    | "CENTRAL_AFRICAN_REPUBLIC"
    | "CHAD"
    | "CHILE"
    | "CHINA"
    | "CHRISTMAS_ISLAND"
    | "COCOS_KEELING_ISLANDS"
    | "COLOMBIA"
    | "COMOROS"
    | "CONGO"
    | "COOK_ISLANDS"
    | "COSTA_RICA"
    | "COTE_D_IVOIRE"
    | "CROATIA"
    | "CUBA"
    | "CURACAO"
    | "CYPRUS"
    | "CZECH_REPUBLIC"
    | "DEMOCRATIC_PEOPLE_S_REPUBLIC_OF_KOREA"
    | "DENMARK"
    | "DJIBOUTI"
    | "DOMINICA"
    | "DOMINICAN_REPUBLIC"
    | "ECUADOR"
    | "EGYPT"
    | "EL_SALVADOR"
    | "EQUATORIAL_GUINEA"
    | "ERITREA"
    | "ESTONIA"
    | "ETHIOPIA"
    | "FALKLAND_ISLANDS_MALVINAS"
    | "FAROE_ISLANDS"
    | "FEDERATED_STATES_OF_MICRONESIA"
    | "FIJI"
    | "FINLAND"
    | "FRANCE"
    | "FRENCH_GUIANA"
    | "FRENCH_POLYNESIA"
    | "FRENCH_SOUTHERN_TERRITORIES"
    | "GABON"
    | "GAMBIA"
    | "GEORGIA"
    | "GERMANY"
    | "GHANA"
    | "GIBRALTAR"
    | "GREECE"
    | "GREENLAND"
    | "GRENADA"
    | "GUADELOUPE"
    | "GUAM"
    | "GUATEMALA"
    | "GUERNSEY"
    | "GUINEA"
    | "GUINEA_BISSAU"
    | "GUYANA"
    | "HAITI"
    | "HEARD_ISLAND_AND_MCDONALD_ISLANDS"
    | "HOLY_SEE_VATICAN_CITY_STATE"
    | "HONDURAS"
    | "HONG_KONG"
    | "HUNGARY"
    | "ICELAND"
    | "INDIA"
    | "INDONESIA"
    | "IRAQ"
    | "IRELAND"
    | "ISLAMIC_REPUBLIC_OF_IRAN"
    | "ISLE_OF_MAN"
    | "ISRAEL"
    | "ITALY"
    | "JAMAICA"
    | "JAPAN"
    | "JERSEY"
    | "JORDAN"
    | "KAZAKHSTAN"
    | "KENYA"
    | "KIRIBATI"
    | "KOSOVO_TEMPORARY"
    | "KUWAIT"
    | "KYRGYZSTAN"
    | "LAO_PEOPLE_S_DEMOCRATIC_REPUBLIC"
    | "LATVIA"
    | "LEBANON"
    | "LESOTHO"
    | "LIBERIA"
    | "LIBYA"
    | "LIECHTENSTEIN"
    | "LITHUANIA"
    | "LUXEMBOURG"
    | "MACAO"
    | "MADAGASCAR"
    | "MALAWI"
    | "MALAYSIA"
    | "MALDIVES"
    | "MALI"
    | "MALTA"
    | "MARSHALL_ISLANDS"
    | "MARTINIQUE"
    | "MAURITANIA"
    | "MAURITIUS"
    | "MAYOTTE"
    | "MEXICO"
    | "MONACO"
    | "MONGOLIA"
    | "MONTENEGRO"
    | "MONTSERRAT"
    | "MOROCCO"
    | "MOZAMBIQUE"
    | "MYANMAR"
    | "NAMIBIA"
    | "NAURU"
    | "NEPAL"
    | "NETHERLANDS"
    | "NEW_CALEDONIA"
    | "NEW_ZEALAND"
    | "NICARAGUA"
    | "NIGER"
    | "NIGERIA"
    | "NIUE"
    | "NORFOLK_ISLAND"
    | "NORTHERN_IRELAND_TEMPORARY"
    | "NORTHERN_MARIANA_ISLANDS"
    | "NORWAY"
    | "OMAN"
    | "PAKISTAN"
    | "PALAU"
    | "PANAMA"
    | "PAPUA_NEW_GUINEA"
    | "PARAGUAY"
    | "PERU"
    | "PHILIPPINES"
    | "PITCAIRN"
    | "PLURINATIONAL_STATE_OF_BOLIVIA"
    | "POLAND"
    | "PORTUGAL"
    | "PROVINCE_OF_CHINA_TAIWAN"
    | "PUERTO_RICO"
    | "QATAR"
    | "REPUBLIC_OF_KOREA"
    | "REPUBLIC_OF_MOLDOVA"
    | "REUNION"
    | "ROMANIA"
    | "RUSSIAN_FEDERATION"
    | "RWANDA"
    | "SAINT_BARTHELEMY"
    | "SAINT_KITTS_AND_NEVIS"
    | "SAINT_LUCIA"
    | "SAINT_MARTIN_FRENCH_PART"
    | "SAINT_PIERRE_AND_MIQUELON"
    | "SAINT_VINCENT_AND_THE_GRENADINES"
    | "SAMOA"
    | "SAN_MARINO"
    | "SAO_TOME_AND_PRINCIPE"
    | "SAUDI_ARABIA"
    | "SENEGAL"
    | "SERBIA"
    | "SEYCHELLES"
    | "SIERRA_LEONE"
    | "SINGAPORE"
    | "SINT_EUSTATIUS_AND_SABA_BONAIRE"
    | "SINT_MAARTEN_DUTCH_PART"
    | "SLOVAKIA"
    | "SLOVENIA"
    | "SOLOMON_ISLANDS"
    | "SOMALIA"
    | "SOUTH_AFRICA"
    | "SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS"
    | "SOUTH_SUDAN"
    | "SPAIN"
    | "SRI_LANKA"
    | "STATE_OF_PALESTINE"
    | "SUDAN"
    | "SURINAME"
    | "SVALBARD_AND_JAN_MAYEN"
    | "SWAZILAND"
    | "SWEDEN"
    | "SWITZERLAND"
    | "SYRIAN_ARAB_REPUBLIC"
    | "TAJIKISTAN"
    | "THAILAND"
    | "THE_DEMOCRATIC_REPUBLIC_OF_THE_CONGO"
    | "THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA"
    | "TIMOR_LESTE"
    | "TOGO"
    | "TOKELAU"
    | "TONGA"
    | "TRINIDAD_AND_TOBAGO"
    | "TUNISIA"
    | "TURKEY"
    | "TURKMENISTAN"
    | "TURKS_AND_CAICOS_ISLANDS"
    | "TUVALU"
    | "UGANDA"
    | "UKRAINE"
    | "UNITED_ARAB_EMIRATES"
    | "UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND"
    | "UNITED_REPUBLIC_OF_TANZANIA"
    | "UNITED_STATES_MINOR_OUTLYING_ISLANDS"
    | "UNITED_STATES_OF_AMERICA"
    | "URUGUAY"
    | "UZBEKISTAN"
    | "U_S_VIRGIN_ISLANDS"
    | "VANUATU"
    | "VIET_NAM"
    | "WALLIS_AND_FUTUNA"
    | "WESTERN_SAHARA"
    | "YEMEN"
    | "ZAMBIA"
    | "ZIMBABWE";
  /**
   * Subdivision of the city
   * @minLength 0
   * @maxLength 35
   */
  subdivision?: string;
}

/** Address of Person. */
export interface PersonBasicAddress {
  /**
   * Street name.
   * @minLength 0
   * @maxLength 80
   */
  street?: string;
  /**
   * Zip code.
   * @minLength 0
   * @maxLength 20
   */
  zip?: string;
  /**
   * City name.
   * @minLength 0
   * @maxLength 40
   */
  city?: string;
  /** Country code. */
  country?:
    | "AFGHANISTAN"
    | "ALAND_ISLANDS"
    | "ALBANIA"
    | "ALGERIA"
    | "AMERICAN_SAMOA"
    | "ANDORRA"
    | "ANGOLA"
    | "ANGUILLA"
    | "ANTARCTICA"
    | "ANTIGUA_AND_BARBUDA"
    | "ARGENTINA"
    | "ARMENIA"
    | "ARUBA"
    | "ASCENSION_AND_TRISTAN_DA_CUNHA_SAINT_HELENA"
    | "AUSTRALIA"
    | "AUSTRIA"
    | "AZERBAIJAN"
    | "BAHAMAS"
    | "BAHRAIN"
    | "BANGLADESH"
    | "BARBADOS"
    | "BELARUS"
    | "BELGIUM"
    | "BELIZE"
    | "BENIN"
    | "BERMUDA"
    | "BHUTAN"
    | "BOLIVARIAN_REPUBLIC_OF_VENEZUELA"
    | "BOSNIA_AND_HERZEGOVINA"
    | "BOTSWANA"
    | "BOUVET_ISLAND"
    | "BRAZIL"
    | "BRITISH_VIRGIN_ISLANDS"
    | "BRUNEI_DARUSSALAM"
    | "BULGARIA"
    | "BURKINA_FASO"
    | "BURUNDI"
    | "CABO_VERDE"
    | "CAMBODIA"
    | "CAMEROON"
    | "CANADA"
    | "CAYMAN_ISLANDS"
    | "CENTRAL_AFRICAN_REPUBLIC"
    | "CHAD"
    | "CHILE"
    | "CHINA"
    | "CHRISTMAS_ISLAND"
    | "COCOS_KEELING_ISLANDS"
    | "COLOMBIA"
    | "COMOROS"
    | "CONGO"
    | "COOK_ISLANDS"
    | "COSTA_RICA"
    | "COTE_D_IVOIRE"
    | "CROATIA"
    | "CUBA"
    | "CURACAO"
    | "CYPRUS"
    | "CZECH_REPUBLIC"
    | "DEMOCRATIC_PEOPLE_S_REPUBLIC_OF_KOREA"
    | "DENMARK"
    | "DJIBOUTI"
    | "DOMINICA"
    | "DOMINICAN_REPUBLIC"
    | "ECUADOR"
    | "EGYPT"
    | "EL_SALVADOR"
    | "EQUATORIAL_GUINEA"
    | "ERITREA"
    | "ESTONIA"
    | "ETHIOPIA"
    | "FALKLAND_ISLANDS_MALVINAS"
    | "FAROE_ISLANDS"
    | "FEDERATED_STATES_OF_MICRONESIA"
    | "FIJI"
    | "FINLAND"
    | "FRANCE"
    | "FRENCH_GUIANA"
    | "FRENCH_POLYNESIA"
    | "FRENCH_SOUTHERN_TERRITORIES"
    | "GABON"
    | "GAMBIA"
    | "GEORGIA"
    | "GERMANY"
    | "GHANA"
    | "GIBRALTAR"
    | "GREECE"
    | "GREENLAND"
    | "GRENADA"
    | "GUADELOUPE"
    | "GUAM"
    | "GUATEMALA"
    | "GUERNSEY"
    | "GUINEA"
    | "GUINEA_BISSAU"
    | "GUYANA"
    | "HAITI"
    | "HEARD_ISLAND_AND_MCDONALD_ISLANDS"
    | "HOLY_SEE_VATICAN_CITY_STATE"
    | "HONDURAS"
    | "HONG_KONG"
    | "HUNGARY"
    | "ICELAND"
    | "INDIA"
    | "INDONESIA"
    | "IRAQ"
    | "IRELAND"
    | "ISLAMIC_REPUBLIC_OF_IRAN"
    | "ISLE_OF_MAN"
    | "ISRAEL"
    | "ITALY"
    | "JAMAICA"
    | "JAPAN"
    | "JERSEY"
    | "JORDAN"
    | "KAZAKHSTAN"
    | "KENYA"
    | "KIRIBATI"
    | "KOSOVO_TEMPORARY"
    | "KUWAIT"
    | "KYRGYZSTAN"
    | "LAO_PEOPLE_S_DEMOCRATIC_REPUBLIC"
    | "LATVIA"
    | "LEBANON"
    | "LESOTHO"
    | "LIBERIA"
    | "LIBYA"
    | "LIECHTENSTEIN"
    | "LITHUANIA"
    | "LUXEMBOURG"
    | "MACAO"
    | "MADAGASCAR"
    | "MALAWI"
    | "MALAYSIA"
    | "MALDIVES"
    | "MALI"
    | "MALTA"
    | "MARSHALL_ISLANDS"
    | "MARTINIQUE"
    | "MAURITANIA"
    | "MAURITIUS"
    | "MAYOTTE"
    | "MEXICO"
    | "MONACO"
    | "MONGOLIA"
    | "MONTENEGRO"
    | "MONTSERRAT"
    | "MOROCCO"
    | "MOZAMBIQUE"
    | "MYANMAR"
    | "NAMIBIA"
    | "NAURU"
    | "NEPAL"
    | "NETHERLANDS"
    | "NEW_CALEDONIA"
    | "NEW_ZEALAND"
    | "NICARAGUA"
    | "NIGER"
    | "NIGERIA"
    | "NIUE"
    | "NORFOLK_ISLAND"
    | "NORTHERN_IRELAND_TEMPORARY"
    | "NORWAY"
    | "OMAN"
    | "PAKISTAN"
    | "PALAU"
    | "PANAMA"
    | "PAPUA_NEW_GUINEA"
    | "PARAGUAY"
    | "PERU"
    | "PHILIPPINES"
    | "PITCAIRN"
    | "PLURINATIONAL_STATE_OF_BOLIVIA"
    | "POLAND"
    | "PORTUGAL"
    | "PROVINCE_OF_CHINA_TAIWAN"
    | "PUERTO_RICO"
    | "QATAR"
    | "REPUBLIC_OF_KOREA"
    | "REPUBLIC_OF_MOLDOVA"
    | "REUNION"
    | "ROMANIA"
    | "RUSSIAN_FEDERATION"
    | "RWANDA"
    | "SAINT_BARTHELEMY"
    | "SAINT_KITTS_AND_NEVIS"
    | "SAINT_LUCIA"
    | "SAINT_PIERRE_AND_MIQUELON"
    | "SAINT_VINCENT_AND_THE_GRENADINES"
    | "SAMOA"
    | "SAN_MARINO"
    | "SAO_TOME_AND_PRINCIPE"
    | "SAUDI_ARABIA"
    | "SENEGAL"
    | "SERBIA"
    | "SEYCHELLES"
    | "SIERRA_LEONE"
    | "SINGAPORE"
    | "SINT_EUSTATIUS_AND_SABA_BONAIRE"
    | "SINT_MAARTEN_DUTCH_PART"
    | "SLOVAKIA"
    | "SLOVENIA"
    | "SOLOMON_ISLANDS"
    | "SOMALIA"
    | "SOUTH_AFRICA"
    | "SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS"
    | "SOUTH_SUDAN"
    | "SPAIN"
    | "SRI_LANKA"
    | "STATE_OF_PALESTINE"
    | "SUDAN"
    | "SURINAME"
    | "SVALBARD_AND_JAN_MAYEN"
    | "SWAZILAND"
    | "SWEDEN"
    | "SWITZERLAND"
    | "SYRIAN_ARAB_REPUBLIC"
    | "TAJIKISTAN"
    | "THAILAND"
    | "THE_DEMOCRATIC_REPUBLIC_OF_THE_CONGO"
    | "THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA"
    | "TIMOR_LESTE"
    | "TOGO"
    | "TOKELAU"
    | "TONGA"
    | "TRINIDAD_AND_TOBAGO"
    | "TUNISIA"
    | "TURKEY"
    | "TURKMENISTAN"
    | "TURKS_AND_CAICOS_ISLANDS"
    | "TUVALU"
    | "UGANDA"
    | "UKRAINE"
    | "UNITED_ARAB_EMIRATES"
    | "UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND"
    | "UNITED_REPUBLIC_OF_TANZANIA"
    | "UNITED_STATES_MINOR_OUTLYING_ISLANDS"
    | "UNITED_STATES_OF_AMERICA"
    | "URUGUAY"
    | "UZBEKISTAN"
    | "U_S_VIRGIN_ISLANDS"
    | "VANUATU"
    | "VIET_NAM"
    | "WALLIS_AND_FUTUNA"
    | "WESTERN_SAHARA"
    | "YEMEN"
    | "ZAMBIA"
    | "ZIMBABWE";
}

/** Search results. */
export interface PersonBasicInfo {
  /**
   * Unique identifier of a Person in Person register. This id is same as business partner's partnerId for type PERSON.
   * @format int32
   */
  id?: number;
  /** Last name of Person. */
  lastName?: string;
  /** First name of Person. */
  firstName?: string;
  /** Address of Person. */
  deliveryAddress?: PersonBasicAddress;
  /** Invoicing information. */
  invoicingInfo?: PersonBasicInvoicingInfo;
  /** Register information. */
  registryInfo?: PersonBasicRegistryInfo;
}

/** Invoicing information. */
export interface PersonBasicInvoicingInfo {
  /**
   * Person number.
   * @minLength 0
   * @maxLength 40
   */
  personNumber?: string;
  /**
   * Identifier of the person.
   * @minLength 0
   * @maxLength 80
   */
  identifier?: string;
  /**
   * Identifier type of the person.
   * @minLength 0
   * @maxLength 20
   */
  identifierType?:
    | "FI"
    | "HETU"
    | "YHD"
    | "NO"
    | "AT"
    | "BE"
    | "BG"
    | "CY"
    | "HR"
    | "CZ"
    | "DK"
    | "EE"
    | "FR"
    | "DE"
    | "GB"
    | "EL"
    | "HU"
    | "IE"
    | "IT"
    | "LV"
    | "LT"
    | "LU"
    | "MT"
    | "NL"
    | "PL"
    | "PT"
    | "RO"
    | "SK"
    | "SI"
    | "ES"
    | "SE"
    | "XI";
}

/** Register information. */
export interface PersonBasicRegistryInfo {
  /** Status of the person */
  active: boolean;
}

/** Address. */
export interface PersonFullAddress {
  /**
   * Street name.
   * @minLength 0
   * @maxLength 80
   */
  street?: string;
  /**
   * Zip code.
   * @minLength 0
   * @maxLength 20
   */
  zip?: string;
  /**
   * City name.
   * @minLength 0
   * @maxLength 40
   */
  city?: string;
  /** Country code. */
  country?:
    | "AFGHANISTAN"
    | "ALAND_ISLANDS"
    | "ALBANIA"
    | "ALGERIA"
    | "AMERICAN_SAMOA"
    | "ANDORRA"
    | "ANGOLA"
    | "ANGUILLA"
    | "ANTARCTICA"
    | "ANTIGUA_AND_BARBUDA"
    | "ARGENTINA"
    | "ARMENIA"
    | "ARUBA"
    | "ASCENSION_AND_TRISTAN_DA_CUNHA_SAINT_HELENA"
    | "AUSTRALIA"
    | "AUSTRIA"
    | "AZERBAIJAN"
    | "BAHAMAS"
    | "BAHRAIN"
    | "BANGLADESH"
    | "BARBADOS"
    | "BELARUS"
    | "BELGIUM"
    | "BELIZE"
    | "BENIN"
    | "BERMUDA"
    | "BHUTAN"
    | "BOLIVARIAN_REPUBLIC_OF_VENEZUELA"
    | "BOSNIA_AND_HERZEGOVINA"
    | "BOTSWANA"
    | "BOUVET_ISLAND"
    | "BRAZIL"
    | "BRITISH_VIRGIN_ISLANDS"
    | "BRUNEI_DARUSSALAM"
    | "BULGARIA"
    | "BURKINA_FASO"
    | "BURUNDI"
    | "CABO_VERDE"
    | "CAMBODIA"
    | "CAMEROON"
    | "CANADA"
    | "CAYMAN_ISLANDS"
    | "CENTRAL_AFRICAN_REPUBLIC"
    | "CHAD"
    | "CHILE"
    | "CHINA"
    | "CHRISTMAS_ISLAND"
    | "COCOS_KEELING_ISLANDS"
    | "COLOMBIA"
    | "COMOROS"
    | "CONGO"
    | "COOK_ISLANDS"
    | "COSTA_RICA"
    | "COTE_D_IVOIRE"
    | "CROATIA"
    | "CUBA"
    | "CURACAO"
    | "CYPRUS"
    | "CZECH_REPUBLIC"
    | "DEMOCRATIC_PEOPLE_S_REPUBLIC_OF_KOREA"
    | "DENMARK"
    | "DJIBOUTI"
    | "DOMINICA"
    | "DOMINICAN_REPUBLIC"
    | "ECUADOR"
    | "EGYPT"
    | "EL_SALVADOR"
    | "EQUATORIAL_GUINEA"
    | "ERITREA"
    | "ESTONIA"
    | "ETHIOPIA"
    | "FALKLAND_ISLANDS_MALVINAS"
    | "FAROE_ISLANDS"
    | "FEDERATED_STATES_OF_MICRONESIA"
    | "FIJI"
    | "FINLAND"
    | "FRANCE"
    | "FRENCH_GUIANA"
    | "FRENCH_POLYNESIA"
    | "FRENCH_SOUTHERN_TERRITORIES"
    | "GABON"
    | "GAMBIA"
    | "GEORGIA"
    | "GERMANY"
    | "GHANA"
    | "GIBRALTAR"
    | "GREECE"
    | "GREENLAND"
    | "GRENADA"
    | "GUADELOUPE"
    | "GUAM"
    | "GUATEMALA"
    | "GUERNSEY"
    | "GUINEA"
    | "GUINEA_BISSAU"
    | "GUYANA"
    | "HAITI"
    | "HEARD_ISLAND_AND_MCDONALD_ISLANDS"
    | "HOLY_SEE_VATICAN_CITY_STATE"
    | "HONDURAS"
    | "HONG_KONG"
    | "HUNGARY"
    | "ICELAND"
    | "INDIA"
    | "INDONESIA"
    | "IRAQ"
    | "IRELAND"
    | "ISLAMIC_REPUBLIC_OF_IRAN"
    | "ISLE_OF_MAN"
    | "ISRAEL"
    | "ITALY"
    | "JAMAICA"
    | "JAPAN"
    | "JERSEY"
    | "JORDAN"
    | "KAZAKHSTAN"
    | "KENYA"
    | "KIRIBATI"
    | "KOSOVO_TEMPORARY"
    | "KUWAIT"
    | "KYRGYZSTAN"
    | "LAO_PEOPLE_S_DEMOCRATIC_REPUBLIC"
    | "LATVIA"
    | "LEBANON"
    | "LESOTHO"
    | "LIBERIA"
    | "LIBYA"
    | "LIECHTENSTEIN"
    | "LITHUANIA"
    | "LUXEMBOURG"
    | "MACAO"
    | "MADAGASCAR"
    | "MALAWI"
    | "MALAYSIA"
    | "MALDIVES"
    | "MALI"
    | "MALTA"
    | "MARSHALL_ISLANDS"
    | "MARTINIQUE"
    | "MAURITANIA"
    | "MAURITIUS"
    | "MAYOTTE"
    | "MEXICO"
    | "MONACO"
    | "MONGOLIA"
    | "MONTENEGRO"
    | "MONTSERRAT"
    | "MOROCCO"
    | "MOZAMBIQUE"
    | "MYANMAR"
    | "NAMIBIA"
    | "NAURU"
    | "NEPAL"
    | "NETHERLANDS"
    | "NEW_CALEDONIA"
    | "NEW_ZEALAND"
    | "NICARAGUA"
    | "NIGER"
    | "NIGERIA"
    | "NIUE"
    | "NORFOLK_ISLAND"
    | "NORTHERN_IRELAND_TEMPORARY"
    | "NORWAY"
    | "OMAN"
    | "PAKISTAN"
    | "PALAU"
    | "PANAMA"
    | "PAPUA_NEW_GUINEA"
    | "PARAGUAY"
    | "PERU"
    | "PHILIPPINES"
    | "PITCAIRN"
    | "PLURINATIONAL_STATE_OF_BOLIVIA"
    | "POLAND"
    | "PORTUGAL"
    | "PROVINCE_OF_CHINA_TAIWAN"
    | "PUERTO_RICO"
    | "QATAR"
    | "REPUBLIC_OF_KOREA"
    | "REPUBLIC_OF_MOLDOVA"
    | "REUNION"
    | "ROMANIA"
    | "RUSSIAN_FEDERATION"
    | "RWANDA"
    | "SAINT_BARTHELEMY"
    | "SAINT_KITTS_AND_NEVIS"
    | "SAINT_LUCIA"
    | "SAINT_PIERRE_AND_MIQUELON"
    | "SAINT_VINCENT_AND_THE_GRENADINES"
    | "SAMOA"
    | "SAN_MARINO"
    | "SAO_TOME_AND_PRINCIPE"
    | "SAUDI_ARABIA"
    | "SENEGAL"
    | "SERBIA"
    | "SEYCHELLES"
    | "SIERRA_LEONE"
    | "SINGAPORE"
    | "SINT_EUSTATIUS_AND_SABA_BONAIRE"
    | "SINT_MAARTEN_DUTCH_PART"
    | "SLOVAKIA"
    | "SLOVENIA"
    | "SOLOMON_ISLANDS"
    | "SOMALIA"
    | "SOUTH_AFRICA"
    | "SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS"
    | "SOUTH_SUDAN"
    | "SPAIN"
    | "SRI_LANKA"
    | "STATE_OF_PALESTINE"
    | "SUDAN"
    | "SURINAME"
    | "SVALBARD_AND_JAN_MAYEN"
    | "SWAZILAND"
    | "SWEDEN"
    | "SWITZERLAND"
    | "SYRIAN_ARAB_REPUBLIC"
    | "TAJIKISTAN"
    | "THAILAND"
    | "THE_DEMOCRATIC_REPUBLIC_OF_THE_CONGO"
    | "THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA"
    | "TIMOR_LESTE"
    | "TOGO"
    | "TOKELAU"
    | "TONGA"
    | "TRINIDAD_AND_TOBAGO"
    | "TUNISIA"
    | "TURKEY"
    | "TURKMENISTAN"
    | "TURKS_AND_CAICOS_ISLANDS"
    | "TUVALU"
    | "UGANDA"
    | "UKRAINE"
    | "UNITED_ARAB_EMIRATES"
    | "UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND"
    | "UNITED_REPUBLIC_OF_TANZANIA"
    | "UNITED_STATES_MINOR_OUTLYING_ISLANDS"
    | "UNITED_STATES_OF_AMERICA"
    | "URUGUAY"
    | "UZBEKISTAN"
    | "U_S_VIRGIN_ISLANDS"
    | "VANUATU"
    | "VIET_NAM"
    | "WALLIS_AND_FUTUNA"
    | "WESTERN_SAHARA"
    | "YEMEN"
    | "ZAMBIA"
    | "ZIMBABWE";
  /**
   * Specifier. Not allowed for Swedish environment.
   * @minLength 0
   * @maxLength 80
   */
  specifier?: string;
  /**
   * Subdivision.
   * @minLength 0
   * @maxLength 35
   */
  subdivision?: string;
  /**
   * Post office box. Not allowed for Swedish environment.
   * @minLength 0
   * @maxLength 80
   */
  postOfficeBox?: string;
}

/** Invoicing information. */
export interface PersonInvoicingInfo {
  /**
   * Person number.
   * @minLength 0
   * @maxLength 40
   */
  personNumber?: string;
  /**
   * Identifier of the person.
   * @minLength 0
   * @maxLength 80
   */
  identifier?: string;
  /**
   * Identifier type of the person.
   * @minLength 0
   * @maxLength 20
   */
  identifierType?:
    | "FI"
    | "HETU"
    | "YHD"
    | "NO"
    | "AT"
    | "BE"
    | "BG"
    | "CY"
    | "HR"
    | "CZ"
    | "DK"
    | "EE"
    | "FR"
    | "DE"
    | "GB"
    | "EL"
    | "HU"
    | "IE"
    | "IT"
    | "LV"
    | "LT"
    | "LU"
    | "MT"
    | "NL"
    | "PL"
    | "PT"
    | "RO"
    | "SK"
    | "SI"
    | "ES"
    | "SE"
    | "XI";
  /**
   * Date of birth. Not allowed for Swedish environment.
   * @format date
   * @example "1990-01-01"
   */
  dateOfBirth?: string;
  /** Language. */
  language: "ENGLISH" | "FINNISH" | "SWEDISH";
  /** Gender. */
  gender: "FEMALE" | "MALE" | "NOT_APPLICABLE";
  /**
   * Identifier of person's home country.
   * @minLength 0
   * @maxLength 45
   */
  homeCountryPersonId?: string;
}

/** Payment details. */
export interface PersonPaymentInfo {
  /** Type of payment method. */
  paymentMethod:
    | "BANK_TRANSFER"
    | "DIRECT_DEBIT"
    | "DIRECT_PAYMENT"
    | "CLEARING"
    | "CREDIT_CARD_CHARGE"
    | "FOREIGN_PAYMENT"
    | "OTHER"
    | "CASH"
    | "DOMESTIC_PAYMENT_PLUSGIRO"
    | "DOMESTIC_PAYMENT_BANKGIRO"
    | "DOMESTIC_PAYMENT_CREDITOR"
    | "DKLMPKRE"
    | "NETS";
  /**
   * Clearing code.
   * @minLength 0
   * @maxLength 80
   */
  clearingCode?: string;
  /**
   * Account number.
   * @minLength 0
   * @maxLength 40
   */
  accountNumber?: string;
  /**
   * Bank Identifier Code.
   * @minLength 0
   * @maxLength 40
   */
  bic?: string;
  /**
   * Payment term in days.
   * @minLength 1
   * @maxLength 3
   */
  paymentTermDays: string;
  /**
   * Payment term percentage.
   * @min 0
   * @max 100
   */
  paymentTermPercentage?: number;
  /**
   * Penal interest rate.
   * @min 0
   * @max 1000
   */
  penalInterestRate: number;
  /**
   * Discount percentage.
   * @min 0
   * @max 100
   */
  discountPercentage?: number;
}

/** Register information. */
export interface PersonRegistryInfo {
  /** Status of the person */
  active: boolean;
  /**
   * Mobile phone.
   * @minLength 0
   * @maxLength 40
   */
  mobilePhone?: string;
  /**
   * Fax number.
   * @minLength 0
   * @maxLength 40
   */
  fax?: string;
  /**
   * Phone.
   * @minLength 0
   * @maxLength 40
   */
  phone?: string;
  /**
   * Email address.
   * @minLength 0
   * @maxLength 80
   */
  email?: string;
  /**
   * Contact person.
   * @minLength 0
   * @maxLength 80
   */
  contactPerson?: string;
  /**
   * Default reference.
   * @minLength 0
   * @maxLength 40
   */
  defaultReference?: string;
  /**
   * Section.
   * @minLength 0
   * @maxLength 80
   */
  section?: string;
  /**
   * Ids of person groups that the person belongs to. Use /businesspartners/groups/{id} endpoint to find group details.
   * @uniqueItems true
   */
  personGroupsIds?: number[];
  /**
   * Report group id. Use /businesspartners/groups/{id} endpoint to find group details.
   * @format int32
   */
  reportGroupId?: number;
  /**
   * Home municipality.
   * @minLength 0
   * @maxLength 40
   */
  homeMunicipality?: string;
}

export interface PersonSearchResult {
  /** Search results. */
  results?: PersonBasicInfo[];
  /** Search result metadata. */
  meta?: SearchResultMetaData;
}

export interface PersonalDetails {
  /**
   * Partner register ID.
   * @format int32
   */
  partnerId?: number;
  /** First name of the person. */
  firstName?: string;
  /** Last name of the person. */
  lastName?: string;
  /** Language of the person. */
  language?: "DANISH" | "ENGLISH" | "ESTONIAN" | "FINNISH" | "NORWEGIAN" | "SWEDISH";
  /** Address of the person. Value may be empty. */
  address?: PersonAddress;
  /** Payment information for the person. */
  paymentInfo?: BusinessPartnerPaymentDetails;
  /** Basic invoicing information. */
  invoicingInfo?: BasicInvoicingInfo;
}

/** Information about the default product */
export interface Product {
  /**
   * Unique identifier of the product. Generated by Procountor.
   * @format int64
   */
  id?: number;
  /**
   * Product type: to which kind of invoices the product can be assigned.
   * @example "TRAVEL"
   */
  type: "PURCHASE" | "SALES" | "TRAVEL";
  /**
   * Product name.
   * @minLength 0
   * @maxLength 100
   */
  name: string;
  /**
   * Custom code assigned by the owner of the product.
   * @minLength 0
   * @maxLength 40
   */
  code?: string;
  /** Product unit. */
  unit?:
    | "AMPERE"
    | "AMPERE_HOUR"
    | "AMPERE_MINUTE"
    | "BAG"
    | "BAR"
    | "BOTTLE"
    | "BOX"
    | "CAN"
    | "CENTILITRE"
    | "CM"
    | "CUBIC_METER"
    | "CUP"
    | "DAY"
    | "DECILITRE"
    | "DOZEN"
    | "DOZEN_PACK"
    | "EIGHT_PACK"
    | "EXAJOULE"
    | "FIVE_PACK"
    | "FOOT"
    | "FOUR_PACK"
    | "FULL_DAY"
    | "GALLON_UK"
    | "GALLON_US"
    | "GIGABIT"
    | "GIGABYTE"
    | "GIGAJOULE"
    | "GIGAWATT"
    | "GIGAWATT_HOUR"
    | "GRAM"
    | "GRAM_PER_CUBIC_METRE"
    | "GRAM_PER_SQUARE_METRE"
    | "HECTARE"
    | "HOUR"
    | "HUNDRED"
    | "INCH"
    | "JAR"
    | "JOULE"
    | "JOULE_PER_SECOND"
    | "KILOAMPERE_HOUR"
    | "KILOBIT"
    | "KILOBYTE"
    | "KILOGRAM"
    | "KILOGRAM_PER_CUBIC_METRE"
    | "KILOGRAM_PER_SQUARE_METRE"
    | "KILOJOULE"
    | "KILOMETER"
    | "KILOPASCAL"
    | "KILOVOLT"
    | "KILOWATT"
    | "KILOWATT_HOUR"
    | "LINEAR_METER"
    | "LITER"
    | "LOT"
    | "MEGABIT"
    | "MEGABYTE"
    | "MEGAWATT_HOUR"
    | "METER"
    | "MILE"
    | "MILLIAMPERE_HOUR"
    | "MILLIGRAM"
    | "MILLIGRAM_PER_CUBIC_METRE"
    | "MILLIJOULE"
    | "MILLILITRE"
    | "MILLIMETER"
    | "MILLIVOLT"
    | "MILLIWATT"
    | "MINUTE"
    | "MONTH"
    | "NINE_PACK"
    | "NO_UNIT"
    | "NUMBER_OF_WORDS"
    | "OUNCE"
    | "PAGE"
    | "PAIR"
    | "PALLET"
    | "PARCEL"
    | "PASCAL"
    | "PERSON"
    | "PETAJOULE"
    | "PIECE"
    | "PINT_UK"
    | "PINT_US"
    | "PLATE"
    | "POUND"
    | "ROLL"
    | "SACK"
    | "SALE_UNIT"
    | "SECOND"
    | "SERIES"
    | "SET"
    | "SEVEN_PACK"
    | "SIX_PACK"
    | "SQUARE_CENTIMETRE"
    | "SQUARE_METER"
    | "STONE_UK"
    | "TEN_PACK"
    | "TERABIT"
    | "TERAJOULE"
    | "TERAWATT"
    | "TERAWATT_HOUR"
    | "THREE_PACK"
    | "TON"
    | "TUBE"
    | "TWO_PACK"
    | "WATT"
    | "WATT_HOUR"
    | "WEEK"
    | "WRAP"
    | "YARD"
    | "YEAR";
  /**
   * Product discount percentage.
   * @min 0
   * @exclusiveMin false
   * @max 100
   * @exclusiveMax false
   */
  discount: number;
  /** Product price. */
  price: number;
  /** Product VAT percentage. */
  vat?: number;
  /** Product status. */
  active: boolean;
  /** Default ledger account for the product. */
  defaultAccount?: string;
  /**
   * Product VAT status. Allowed VAT statuses are available under GET /vats/default
   * @format int32
   */
  vatStatus?: number;
  /**
   * Currency for the product in ISO 4217 format.
   * @example "EUR"
   */
  currency:
    | "AED"
    | "AFN"
    | "ALL"
    | "AMD"
    | "ANG"
    | "AOA"
    | "ARS"
    | "ATS"
    | "AUD"
    | "AWG"
    | "AZN"
    | "BAM"
    | "BBD"
    | "BDT"
    | "BEF"
    | "BGN"
    | "BHD"
    | "BIF"
    | "BMD"
    | "BND"
    | "BOB"
    | "BOV"
    | "BRL"
    | "BSD"
    | "BTN"
    | "BWP"
    | "BYN"
    | "BZD"
    | "CAD"
    | "CDF"
    | "CHE"
    | "CHF"
    | "CHW"
    | "CLF"
    | "CLP"
    | "CNH"
    | "CNT"
    | "CNY"
    | "COP"
    | "COU"
    | "CRC"
    | "CUC"
    | "CUP"
    | "CVE"
    | "CYP"
    | "CZK"
    | "DEM"
    | "DJF"
    | "DKK"
    | "DOP"
    | "DZD"
    | "EEK"
    | "EGP"
    | "ERN"
    | "ESP"
    | "ETB"
    | "EUR"
    | "FIM"
    | "FJD"
    | "FKP"
    | "FRF"
    | "GBP"
    | "GEL"
    | "GGP"
    | "GHS"
    | "GIP"
    | "GMD"
    | "GNF"
    | "GRD"
    | "GTQ"
    | "GYD"
    | "HKD"
    | "HNL"
    | "HRK"
    | "HTG"
    | "HUF"
    | "IDR"
    | "IEP"
    | "ILS"
    | "IMP"
    | "INR"
    | "IQD"
    | "IRR"
    | "ISK"
    | "ITL"
    | "JEP"
    | "JMD"
    | "JOD"
    | "JPY"
    | "KES"
    | "KGS"
    | "KHR"
    | "KID"
    | "KMF"
    | "KPW"
    | "KRW"
    | "KWD"
    | "KYD"
    | "KZT"
    | "LAK"
    | "LBP"
    | "LKR"
    | "LRD"
    | "LSL"
    | "LTL"
    | "LUF"
    | "LVL"
    | "LYD"
    | "MAD"
    | "MDL"
    | "MGA"
    | "MKD"
    | "MMK"
    | "MNT"
    | "MOP"
    | "MRO"
    | "MTL"
    | "MUR"
    | "MVR"
    | "MWK"
    | "MXN"
    | "MXV"
    | "MYR"
    | "MZN"
    | "NAD"
    | "NGN"
    | "NIO"
    | "NIS"
    | "NLG"
    | "NOK"
    | "NPR"
    | "NTD"
    | "NZD"
    | "OMR"
    | "PAB"
    | "PEN"
    | "PGK"
    | "PHP"
    | "PKR"
    | "PLN"
    | "PRB"
    | "PTE"
    | "PYG"
    | "QAR"
    | "RMB"
    | "RON"
    | "RSD"
    | "RUB"
    | "RWF"
    | "SAR"
    | "SBD"
    | "SCR"
    | "SDG"
    | "SEK"
    | "SGD"
    | "SHP"
    | "SIT"
    | "SKK"
    | "SLL"
    | "SLS"
    | "SOS"
    | "SRD"
    | "SSP"
    | "STN"
    | "SVC"
    | "SYP"
    | "SZL"
    | "THB"
    | "TJS"
    | "TMT"
    | "TND"
    | "TOP"
    | "TRY"
    | "TTD"
    | "TVD"
    | "TWD"
    | "TZS"
    | "UAH"
    | "UGX"
    | "USD"
    | "USN"
    | "UYI"
    | "UYU"
    | "UYW"
    | "UZS"
    | "VES"
    | "VND"
    | "VUV"
    | "WST"
    | "XAF"
    | "XAG"
    | "XAU"
    | "XBA"
    | "XBB"
    | "XBC"
    | "XBD"
    | "XCD"
    | "XDR"
    | "XOF"
    | "XPD"
    | "XPF"
    | "XPT"
    | "XSU"
    | "XTS"
    | "XUA"
    | "XXX"
    | "YER"
    | "ZAR"
    | "ZMW"
    | "ZWB"
    | "ZWL";
  /** Product name localizations. */
  productLocalizations?: ProductLocalization[];
  /**
   * Product group ID.
   * @format int32
   */
  productGroupId?: number;
  /**
   * Get start date for the product.  Used by TRAVEL type only.
   * @format date
   */
  startDate?: string;
  /**
   * Get end date for the product. Used by TRAVEL type only.
   * @format date
   */
  endDate?: string;
}

/** Penal expense product. */
export interface ProductBasicInfo {
  /**
   * Identifier of the product.
   * @format int64
   */
  productId?: number;
  /** Name of the product. */
  name?: string;
  /** Code of the product. */
  code?: string;
  /** Default account for the product. */
  defaultAccount?: string;
  /** Price of the product. */
  price?: number;
  /** Currency of the price. */
  currency?: string;
  /** Unit type of product. */
  unit?:
    | "AMPERE"
    | "AMPERE_HOUR"
    | "AMPERE_MINUTE"
    | "BAG"
    | "BAR"
    | "BOTTLE"
    | "BOX"
    | "CAN"
    | "CENTILITRE"
    | "CM"
    | "CUBIC_METER"
    | "CUP"
    | "DAY"
    | "DECILITRE"
    | "DOZEN"
    | "DOZEN_PACK"
    | "EIGHT_PACK"
    | "EXAJOULE"
    | "FIVE_PACK"
    | "FOOT"
    | "FOUR_PACK"
    | "FULL_DAY"
    | "GALLON_UK"
    | "GALLON_US"
    | "GIGABIT"
    | "GIGABYTE"
    | "GIGAJOULE"
    | "GIGAWATT"
    | "GIGAWATT_HOUR"
    | "GRAM"
    | "GRAM_PER_CUBIC_METRE"
    | "GRAM_PER_SQUARE_METRE"
    | "HECTARE"
    | "HOUR"
    | "HUNDRED"
    | "INCH"
    | "JAR"
    | "JOULE"
    | "JOULE_PER_SECOND"
    | "KILOAMPERE_HOUR"
    | "KILOBIT"
    | "KILOBYTE"
    | "KILOGRAM"
    | "KILOGRAM_PER_CUBIC_METRE"
    | "KILOGRAM_PER_SQUARE_METRE"
    | "KILOJOULE"
    | "KILOMETER"
    | "KILOPASCAL"
    | "KILOVOLT"
    | "KILOWATT"
    | "KILOWATT_HOUR"
    | "LINEAR_METER"
    | "LITER"
    | "LOT"
    | "MEGABIT"
    | "MEGABYTE"
    | "MEGAWATT_HOUR"
    | "METER"
    | "MILE"
    | "MILLIAMPERE_HOUR"
    | "MILLIGRAM"
    | "MILLIGRAM_PER_CUBIC_METRE"
    | "MILLIJOULE"
    | "MILLILITRE"
    | "MILLIMETER"
    | "MILLIVOLT"
    | "MILLIWATT"
    | "MINUTE"
    | "MONTH"
    | "NINE_PACK"
    | "NO_UNIT"
    | "NUMBER_OF_WORDS"
    | "OUNCE"
    | "PAGE"
    | "PAIR"
    | "PALLET"
    | "PARCEL"
    | "PASCAL"
    | "PERSON"
    | "PETAJOULE"
    | "PIECE"
    | "PINT_UK"
    | "PINT_US"
    | "PLATE"
    | "POUND"
    | "ROLL"
    | "SACK"
    | "SALE_UNIT"
    | "SECOND"
    | "SERIES"
    | "SET"
    | "SEVEN_PACK"
    | "SIX_PACK"
    | "SQUARE_CENTIMETRE"
    | "SQUARE_METER"
    | "STONE_UK"
    | "TEN_PACK"
    | "TERABIT"
    | "TERAJOULE"
    | "TERAWATT"
    | "TERAWATT_HOUR"
    | "THREE_PACK"
    | "TON"
    | "TUBE"
    | "TWO_PACK"
    | "WATT"
    | "WATT_HOUR"
    | "WEEK"
    | "WRAP"
    | "YARD"
    | "YEAR";
}

export interface ProductGroup {
  /**
   * Product group id.
   * @format int32
   */
  id?: number;
  /**
   * Product group name.
   * @minLength 0
   * @maxLength 80
   */
  name: string;
  /**
   * Product type.
   * @example "TRAVEL"
   */
  type?: "PURCHASE" | "SALES" | "TRAVEL";
}

export interface ProductGroups {
  /** List of product groups */
  productGroups?: ProductGroup[];
}

/** Product name localizations. */
export interface ProductLocalization {
  /** Product language */
  language?: "DANISH" | "ENGLISH" | "ESTONIAN" | "FINNISH" | "NORWEGIAN" | "SWEDISH";
  /**
   * Product name
   * @minLength 0
   * @maxLength 100
   */
  productName?: string;
}

export interface ProductSearchResult {
  /** Search results. */
  results?: Product[];
  /** Search result metadata. */
  meta?: SearchResultMetaData;
}

/** Validity periods of the default product */
export interface ProductValidityPeriod {
  /**
   * Start date of the validity period
   * @format date
   */
  startDate?: string;
  /**
   * End date of the validity period
   * @format date
   */
  endDate?: string;
  /** Notes of the validity period */
  notes?: string;
}

/** Contains rights for purchases functionalities. */
export interface PurchasesRights {
  /** Access level to purchase invoices functionality. */
  purchaseInvoices?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to purchase invoice search functionality. */
  purchaseInvoiceSearch?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Is personal purchase invoices only limitation enabled. */
  personalPurchaseInvoicesOnly?: boolean;
  /** Access level to supplier register functionality. */
  supplierRegister?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to product register functionality. */
  productRegister?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to fixed assets register functionality. */
  fixedAssetsRegister?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
}

/** Search results. */
export interface ReferencePayment {
  /**
   * Unique identifier of the reference payment.
   * @format int64
   */
  id?: number;
  /** Account number for which the reference payment is generated. */
  accountNumber?: string;
  /**
   * Date when the event was registered in the counterpart bank.
   * @format date
   */
  valueDate?: string;
  /**
   * Date when the payment was paid by the payer in his/her own bank.
   * @format date
   */
  paymentDate?: string;
  /** The total amount for the reference payment. */
  sum?: number;
  /** Name of the counterparty. */
  name?: string;
  /** A reference value for the bank. */
  bankReference?: string;
  /** Archive code of the reference payment. Archive codes are unique in one bank but two events from different banks can share the same archive code. */
  archiveId?: string;
  /** Is the reference payment allocated to an invoice. If it is, the event must also have an invoice ID. */
  allocated?: boolean;
  /**
   * Unique identifier of the invoice linked to the event.
   * @format int32
   */
  invoiceId?: number;
  /** A list of attachments added to the reference payment. */
  attachments?: Attachment[];
  /** Metadata allocations for the reference payment. */
  allocationMetadataRows?: AllocationMetadataWithFullLedgerAccountDataRow[];
}

export interface ReferencePaymentsSearchResult {
  /** Search results. */
  results?: ReferencePayment[];
  /** Search result metadata. */
  meta?: SearchResultMetaData;
}

/** Registry info data of the partner. */
export interface RegistryInfo {
  /** Status of the partner. */
  active?: boolean;
  /**
   * Phone number of the partner.
   * @minLength 0
   * @maxLength 40
   */
  phone?: string;
  /**
   * Mobile phone number of the partner.
   * @minLength 0
   * @maxLength 40
   */
  mobilePhone?: string;
  /**
   * Fax number of the partner.
   * @minLength 0
   * @maxLength 40
   */
  fax?: string;
  /**
   * Section of the partner.
   * @minLength 0
   * @maxLength 80
   */
  section?: string;
  /**
   * Home municipality of the partner.
   * @minLength 0
   * @maxLength 40
   */
  homeMunicipality?: string;
  /** Report group name of the partner. */
  reportGroup?: string;
  /**
   * Report group id of the partner.
   * @format int32
   */
  reportGroupId?: number;
  /** Partner groups of the partner. */
  partnerGroups?: BusinessPartnerGroup[];
}

export interface SalariesBasicInfo {
  /** Yearly figures. Employer payment percentages. */
  yearlyFigures?: YearlyFigures;
  /** Work hours. */
  workHours?: WorkHours;
  /** Incomes register info. */
  incomesRegisterConfiguration?: IncomesRegisterConfiguration;
  /** Pension contracts. Employees' pension insurance. */
  pensionContracts?: PensionContract[];
  /** Accident insurance policies. Occupational accident insurance. */
  accidentInsurancePolicies?: AccidentInsurancePolicy[];
}

/** Contains rights for salaries functionalities. */
export interface SalariesRights {
  /** Access level to payroll functionality. */
  payroll?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Is personal salaries only limitation enabled. */
  personalSalariesOnly?: boolean;
  /** Access level to person register functionality. */
  personRegister?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to working time tracking functionality. */
  workingTimeTracking?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Is personal work hour tracking only limitation enabled. */
  personalWorkHourTrackingOnly?: boolean;
}

/** Search results. */
export interface SalaryType {
  /** Salary type name. */
  name?: string;
  /**
   * Salary type code.
   * @format int64
   */
  code?: number;
  /** Salary category. */
  category?:
    | "DEDUCTIONS_FROM_NET_PAY"
    | "EMPLOYER_PAYMENTS"
    | "FRINGE_BENEFITS"
    | "INFORMATIVE_ITEMS"
    | "OTHER_TAXABLE_EARNINGS"
    | "SALARY_FOR_TIME_WORKED"
    | "TAX"
    | "TAX_FREE_ITEMS";
  /** Salary type unit. */
  unit?: "HOUR" | "PIECE";
  /** Unit value of Salary type. */
  unitValue?: number;
  /** Payment percent of Salary type. */
  paymentPercent?: number;
  /** Affects health insurance. */
  affectsHealthInsurance?: boolean;
  /** Affects pension insurance. */
  affectsPensionInsurance?: boolean;
  /** Affects unemployment insurance. */
  affectsUnemploymentInsurance?: boolean;
  /** Affects accident and group life insurance. */
  affectsAccidentAndGroupLifeInsurance?: boolean;
  /** Income type name. */
  incomeType?: string;
  /**
   * Income type code.
   * @format int32
   */
  incomeTypeCode?: number;
  /** Salary type name translations. */
  translations?: SalaryTypeTranslation[];
}

export interface SalaryTypeSearchResult {
  /** Search results. */
  results?: SalaryType[];
  /** Search result metadata. */
  meta?: SearchResultMetaData;
}

/** Salary type name translations. */
export interface SalaryTypeTranslation {
  /** Language code in ISO 639-1 format. */
  languageCode?: string;
  /** Salary type name translation for the given language code. */
  translation?: string;
}

/** Contains rights for sales functionalities. */
export interface SalesRights {
  /** Access level to sales or group invoices functionality. */
  salesOrGroupInvoices?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to sales invoice search functionality. */
  salesInvoiceSearch?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Is personal sales invoices only limitation enabled. */
  personalSalesInvoicesOnly?: boolean;
  /** Access level to customer register functionality. */
  customerRegister?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to product register functionality. */
  productRegister?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
}

/** Search result metadata. */
export interface SearchResultMetaData {
  /**
   * Number of the page.
   * @format int32
   */
  pageNumber?: number;
  /**
   * Size of the page.
   * @format int32
   */
  pageSize?: number;
  /**
   * The number of results per page.
   * @format int32
   */
  resultCount?: number;
  /**
   * Total number of rows.
   * @format int64
   */
  totalCount?: number;
}

/** Ledger receipt serial number. This field is optional and can only appear for Swedish and Danish environments. */
export interface SerialNumber {
  /** Ledger receipt series. */
  series?: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";
  /**
   * Ledger receipt serial number.
   * @format int32
   */
  number?: number;
}

export interface SessionInfo {
  /**
   * ID of current company.
   * @format int32
   */
  companyId?: number;
  /** Name of current company. */
  name?: string;
  /** Country of current company. */
  country?:
    | "AFGHANISTAN"
    | "ALAND_ISLANDS"
    | "ALBANIA"
    | "ALGERIA"
    | "AMERICAN_SAMOA"
    | "ANDORRA"
    | "ANGOLA"
    | "ANGUILLA"
    | "ANTARCTICA"
    | "ANTIGUA_AND_BARBUDA"
    | "ARGENTINA"
    | "ARMENIA"
    | "ARUBA"
    | "ASCENSION_AND_TRISTAN_DA_CUNHA_SAINT_HELENA"
    | "AUSTRALIA"
    | "AUSTRIA"
    | "AZERBAIJAN"
    | "BAHAMAS"
    | "BAHRAIN"
    | "BANGLADESH"
    | "BARBADOS"
    | "BELARUS"
    | "BELGIUM"
    | "BELIZE"
    | "BENIN"
    | "BERMUDA"
    | "BHUTAN"
    | "BOLIVARIAN_REPUBLIC_OF_VENEZUELA"
    | "BOSNIA_AND_HERZEGOVINA"
    | "BOTSWANA"
    | "BOUVET_ISLAND"
    | "BRAZIL"
    | "BRITISH_INDIAN_OCEAN_TERRITORY"
    | "BRITISH_VIRGIN_ISLANDS"
    | "BRUNEI_DARUSSALAM"
    | "BULGARIA"
    | "BURKINA_FASO"
    | "BURUNDI"
    | "CABO_VERDE"
    | "CAMBODIA"
    | "CAMEROON"
    | "CANADA"
    | "CAYMAN_ISLANDS"
    | "CENTRAL_AFRICAN_REPUBLIC"
    | "CHAD"
    | "CHILE"
    | "CHINA"
    | "CHRISTMAS_ISLAND"
    | "COCOS_KEELING_ISLANDS"
    | "COLOMBIA"
    | "COMOROS"
    | "CONGO"
    | "COOK_ISLANDS"
    | "COSTA_RICA"
    | "COTE_D_IVOIRE"
    | "CROATIA"
    | "CUBA"
    | "CURACAO"
    | "CYPRUS"
    | "CZECH_REPUBLIC"
    | "DEMOCRATIC_PEOPLE_S_REPUBLIC_OF_KOREA"
    | "DENMARK"
    | "DJIBOUTI"
    | "DOMINICA"
    | "DOMINICAN_REPUBLIC"
    | "ECUADOR"
    | "EGYPT"
    | "EL_SALVADOR"
    | "EQUATORIAL_GUINEA"
    | "ERITREA"
    | "ESTONIA"
    | "ETHIOPIA"
    | "FALKLAND_ISLANDS_MALVINAS"
    | "FAROE_ISLANDS"
    | "FEDERATED_STATES_OF_MICRONESIA"
    | "FIJI"
    | "FINLAND"
    | "FRANCE"
    | "FRENCH_GUIANA"
    | "FRENCH_POLYNESIA"
    | "FRENCH_SOUTHERN_TERRITORIES"
    | "GABON"
    | "GAMBIA"
    | "GEORGIA"
    | "GERMANY"
    | "GHANA"
    | "GIBRALTAR"
    | "GREECE"
    | "GREENLAND"
    | "GRENADA"
    | "GUADELOUPE"
    | "GUAM"
    | "GUATEMALA"
    | "GUERNSEY"
    | "GUINEA"
    | "GUINEA_BISSAU"
    | "GUYANA"
    | "HAITI"
    | "HEARD_ISLAND_AND_MCDONALD_ISLANDS"
    | "HOLY_SEE_VATICAN_CITY_STATE"
    | "HONDURAS"
    | "HONG_KONG"
    | "HUNGARY"
    | "ICELAND"
    | "INDIA"
    | "INDONESIA"
    | "IRAQ"
    | "IRELAND"
    | "ISLAMIC_REPUBLIC_OF_IRAN"
    | "ISLE_OF_MAN"
    | "ISRAEL"
    | "ITALY"
    | "JAMAICA"
    | "JAPAN"
    | "JERSEY"
    | "JORDAN"
    | "KAZAKHSTAN"
    | "KENYA"
    | "KIRIBATI"
    | "KOSOVO_TEMPORARY"
    | "KUWAIT"
    | "KYRGYZSTAN"
    | "LAO_PEOPLE_S_DEMOCRATIC_REPUBLIC"
    | "LATVIA"
    | "LEBANON"
    | "LESOTHO"
    | "LIBERIA"
    | "LIBYA"
    | "LIECHTENSTEIN"
    | "LITHUANIA"
    | "LUXEMBOURG"
    | "MACAO"
    | "MADAGASCAR"
    | "MALAWI"
    | "MALAYSIA"
    | "MALDIVES"
    | "MALI"
    | "MALTA"
    | "MARSHALL_ISLANDS"
    | "MARTINIQUE"
    | "MAURITANIA"
    | "MAURITIUS"
    | "MAYOTTE"
    | "MEXICO"
    | "MONACO"
    | "MONGOLIA"
    | "MONTENEGRO"
    | "MONTSERRAT"
    | "MOROCCO"
    | "MOZAMBIQUE"
    | "MYANMAR"
    | "NAMIBIA"
    | "NAURU"
    | "NEPAL"
    | "NETHERLANDS"
    | "NEW_CALEDONIA"
    | "NEW_ZEALAND"
    | "NICARAGUA"
    | "NIGER"
    | "NIGERIA"
    | "NIUE"
    | "NORFOLK_ISLAND"
    | "NORTHERN_IRELAND_TEMPORARY"
    | "NORTHERN_MARIANA_ISLANDS"
    | "NORWAY"
    | "OMAN"
    | "PAKISTAN"
    | "PALAU"
    | "PANAMA"
    | "PAPUA_NEW_GUINEA"
    | "PARAGUAY"
    | "PERU"
    | "PHILIPPINES"
    | "PITCAIRN"
    | "PLURINATIONAL_STATE_OF_BOLIVIA"
    | "POLAND"
    | "PORTUGAL"
    | "PROVINCE_OF_CHINA_TAIWAN"
    | "PUERTO_RICO"
    | "QATAR"
    | "REPUBLIC_OF_KOREA"
    | "REPUBLIC_OF_MOLDOVA"
    | "REUNION"
    | "ROMANIA"
    | "RUSSIAN_FEDERATION"
    | "RWANDA"
    | "SAINT_BARTHELEMY"
    | "SAINT_KITTS_AND_NEVIS"
    | "SAINT_LUCIA"
    | "SAINT_MARTIN_FRENCH_PART"
    | "SAINT_PIERRE_AND_MIQUELON"
    | "SAINT_VINCENT_AND_THE_GRENADINES"
    | "SAMOA"
    | "SAN_MARINO"
    | "SAO_TOME_AND_PRINCIPE"
    | "SAUDI_ARABIA"
    | "SENEGAL"
    | "SERBIA"
    | "SEYCHELLES"
    | "SIERRA_LEONE"
    | "SINGAPORE"
    | "SINT_EUSTATIUS_AND_SABA_BONAIRE"
    | "SINT_MAARTEN_DUTCH_PART"
    | "SLOVAKIA"
    | "SLOVENIA"
    | "SOLOMON_ISLANDS"
    | "SOMALIA"
    | "SOUTH_AFRICA"
    | "SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS"
    | "SOUTH_SUDAN"
    | "SPAIN"
    | "SRI_LANKA"
    | "STATE_OF_PALESTINE"
    | "SUDAN"
    | "SURINAME"
    | "SVALBARD_AND_JAN_MAYEN"
    | "SWAZILAND"
    | "SWEDEN"
    | "SWITZERLAND"
    | "SYRIAN_ARAB_REPUBLIC"
    | "TAJIKISTAN"
    | "THAILAND"
    | "THE_DEMOCRATIC_REPUBLIC_OF_THE_CONGO"
    | "THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA"
    | "TIMOR_LESTE"
    | "TOGO"
    | "TOKELAU"
    | "TONGA"
    | "TRINIDAD_AND_TOBAGO"
    | "TUNISIA"
    | "TURKEY"
    | "TURKMENISTAN"
    | "TURKS_AND_CAICOS_ISLANDS"
    | "TUVALU"
    | "UGANDA"
    | "UKRAINE"
    | "UNITED_ARAB_EMIRATES"
    | "UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND"
    | "UNITED_REPUBLIC_OF_TANZANIA"
    | "UNITED_STATES_MINOR_OUTLYING_ISLANDS"
    | "UNITED_STATES_OF_AMERICA"
    | "URUGUAY"
    | "UZBEKISTAN"
    | "U_S_VIRGIN_ISLANDS"
    | "VANUATU"
    | "VIET_NAM"
    | "WALLIS_AND_FUTUNA"
    | "WESTERN_SAHARA"
    | "YEMEN"
    | "ZAMBIA"
    | "ZIMBABWE";
  /** Product version of current company. */
  productVersion?:
    | "BACKOFFICE"
    | "BACKOFFICE_BASIC"
    | "BACKOFFICE_PLUS"
    | "BACKOFFICE_PREMIUM"
    | "FINAGO_SOLO"
    | "FINANCIALS_ALKU"
    | "FINANCIALS_BASIC"
    | "FINANCIALS_ENTERPRISE"
    | "FINANCIALS_GOLD"
    | "FINANCIALS_LIGHT"
    | "FINANCIALS_MAX"
    | "FINANCIALS_PLATINUM"
    | "FINANCIALS_PLUS"
    | "FINANCIALS_PREMIUM"
    | "FINANCIALS_SILVER"
    | "FINANCIALS_UNLIMITED"
    | "FLEX"
    | "SALES_GOLD"
    | "SALES_PLATINUM"
    | "SALES_SILVER";
  /**
   * Current user id.
   * @format int32
   */
  userId?: number;
  /** Current user name. */
  userName?: string;
  /** Company settings. These are settings for 3rd party client usage to identify what features are usable for current company (in order to avoid requests that are bound to fail) */
  companySettings?: CompanySettings;
}

export interface SieAvailabilityResponse {
  /**
   * Specifies the last valid end date.
   * @format date
   */
  lastValidEndDate?: string;
  /** List of the accounting period start dates. */
  accountingPeriodStart?: string[];
}

export interface Status {
  /** Name of the API */
  name?: string;
  /** Version of the API */
  version?: string;
  /** Status of the API health. OK - API is fine, DEGRADED - some external services are not working, FAILING - API has started, but not working properly */
  status?: "DEGRADED" | "FAILING" | "OK";
  /** Current Procountor version in use */
  procountorVersion?: string;
}

/** List of substitutions. */
export interface Substitution {
  /**
   * Substituted user.
   * @format int64
   */
  userId?: number;
  /**
   * Start date of substitution.
   * @format date
   */
  start?: string;
  /**
   * End date of substitution.
   * @format date
   */
  end?: string;
  /**
   * User substituting as verifier.
   * @format int32
   */
  substituteForVerifying?: number;
  /**
   * User substituting as approver.
   * @format int32
   */
  substituteForApproving?: number;
  /** Additional notes for substitution. */
  notes?: string;
}

/** List of taggable users. */
export interface TaggableUser {
  /** Generated display name that is used in comments to tag that given user. For the most of the time this will be lower case of firstname + lastname, without spaces. Running number is used to indicate multiple people with identical names. */
  displayName?: string;
  /** Full name. */
  fullName?: string;
}

export interface TaggableUsers {
  /** List of taggable users. */
  taggableUsers?: TaggableUser[];
}

/** List of tagged users. */
export interface TaggedUser {
  /**
   * Tag identifier, given when someone is tagged in comment.
   * @format int32
   */
  userTagId?: number;
  /** Generated display name that is used in comments to tag that given user. For the most of the time this will be lower case of firstname + lastname, without spaces. Running number is used to indicate multiple people with identical names. */
  displayName?: string;
  /** Full name. */
  fullName?: string;
  /**
   * Time when comment was read by tagged user.
   * @format date-time
   */
  read?: string;
}

/** Information about tagged users. */
export interface TaggedUsersInfo {
  /**
   * Number of users tagged in the comment.
   * @format int32
   */
  numTaggedUsers?: number;
  /** Returns true, if all the tagged users have read the comment. */
  readByAllTaggedUsers?: boolean;
}

/** List of tracking periods contained in the fiscal year. */
export interface TrackingPeriod {
  /**
   * Unique identifier of the tracking period.
   * @format int32
   */
  id?: number;
  /**
   * Start date of the tracking period.
   * @format date
   */
  startDate?: string;
  /**
   * End date of the tracking period.
   * @format date
   */
  endDate?: string;
  /** Status of the tracking period. */
  status: "CLOSED" | "OPEN" | "PENDING";
  /**
   * Time of last edition of tracking period.
   * @format date-time
   */
  modified?: string;
}

/** List containing transactions on the receipt. At least one transaction must be provided. */
export interface Transaction {
  /**
   * Unique identifier for the ledger transaction. Automatically generated by Procountor and present in the object returned.
   * @format int32
   */
  id?: number;
  /** Transaction type. Depends on the transaction and the ledger account in question. Type REVERSING_ENTRY is used to indicate the first row of a ledger receipt for a specific logic on the UI. Typically, it represents a transaction for a balance sheet account. Note that ledger receipts with no transactions marked as reversing entries are possible.  Type ENTRY is the general type for transactions. It can be used even on the first rows of ledger receipts. Type RECONCILIATION_ENTRY is used for getting the sum of transactions on a receipt to reconcile (to equal zero). Generally, all ledger receipts should reconcile. Procountor can create reconciliation entries automatically  for ledger receipts when "createReconciliation=true" query parameter is specified.  If VAT is used, a reconciliation row might be necessary due to remainders and rounding.  For both REVERSING_ENTRY and RECONCILIATION_ENTRY transactions, vatStatus cannot be defined and vatPercent must be 0.  Additionally, a ledger can have maximum of one REVERSING_ENTRY and maximum of one RECONCILIATION_ENTRY transaction.  Transactions of these types cannot be removed from a ledger receipt using UI once created. */
  transactionType: "ENTRY" | "RECONCILIATION_ENTRY" | "REVERSING_ENTRY";
  /** Ledger account number for the transaction. Must be valid for the current Procountor environment. Use GET /coa to obtain the chart of accounts. */
  account: string;
  /** Transaction accounting value. This value is net. Scale: 2. */
  accountingValue: number;
  /** Transaction VAT percentage. Must be a percentage currently in use for the company. */
  vatPercent: number;
  /** Transaction VAT type. */
  vatType?: "PURCHASE" | "SALES";
  /**
   * Transaction VAT status. This overrides the VAT status set for the parent ledger receipt. Use here the numeric parts of VAT status codes listed in "VAT defaults" in Procountor. For example, for VAT status code "vat_12", use value 12. The VAT status used must be enabled for the current receipt type (sales/purchase).
   * @format int32
   */
  vatStatus?: number;
  /**
   * Transaction description. Visible on ledger receipt printouts.
   * @minLength 0
   * @maxLength 255
   */
  description?: string;
  /**
   * Transaction balance code. Only available if the use balance sheet setting is enabled.
   * @minLength 0
   * @maxLength 255
   */
  balanceCode?: string;
  /** List of allocation ids related to the transaction. */
  allocations?: number[];
  /**
   * Technical ID for the partner. Can be provided in Norwegian environments only. The given partner id must match a partner of type different than PERSON, existing in the current Procountor environment.
   * @format int32
   */
  partnerId?: number;
  /** Values of dimension items associated with this transaction. The number of provided dimension items must be within the dimension max count defined by the purchased Procountor license. Provided dimension pairs (dimension id - item id) must be unique within the list provided. */
  dimensionItemValues?: DimensionItemValue[];
  /** VAT deduction percentage for the transaction. */
  vatDeductionPercent?: number;
  /**
   * Start date of accrual/delivery periods of transaction.
   * @format date
   */
  startDate?: string;
  /**
   * End date of accrual/delivery periods of transaction.
   * @format date
   */
  endDate?: string;
}

export interface TransactionIdentifier {
  /** Value of 2-factor transaction identifier. */
  transactionIdentifier?: string;
  /** Multifactor authentication confirmation handler application. */
  confirmationApp?: string;
}

/** Transfer notifications. */
export interface TransferNotification {
  /** Transfer notification language. */
  lang: "ENGLISH" | "FINNISH" | "SWEDISH" | "ESTONIAN";
  /**
   * Transfer notification message.
   * @minLength 0
   * @maxLength 1000
   */
  notification: string;
}

/** Contains rights for travel and expenses functionalities. */
export interface TravelAndExpensesRights {
  /** Access level to travel and expense invoices functionality. */
  travelAndExpenseInvoices?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Access level to travel and expense invoice search functionality. */
  travelAndExpenseInvoiceSearch?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Is personal travel and expense invoices only limitation enabled. */
  personalTravelAndExpenseInvoiceOnly?: boolean;
}

/** Travel information items. A travel invoice may have one or more travel information items containing departure date, return date, destinations and travel purpose. */
export interface TravelInformationItem {
  /**
   * Travel departure date. Free text.
   * @minLength 0
   * @maxLength 40
   */
  departure?: string;
  /**
   * Travel return date. Free text.
   * @minLength 0
   * @maxLength 40
   */
  arrival?: string;
  /**
   * Travel destinations. Free text.
   * @minLength 0
   * @maxLength 255
   */
  places?: string;
  /**
   * Travel purpose. Free text.
   * @minLength 0
   * @maxLength 255
   */
  purpose?: string;
}

export interface User {
  /**
   * User ID of this user.
   * @format int32
   */
  id?: number;
  /** The username of this user. This is the username used to log in to Procountor. */
  username?: string;
  /**
   * Identifier for the company this user is logged into. NOTE! This field can also be found in /company endpoint, and that is the recommended way to use it. This field will be deprecated and removed from this endpoint at some point in the future.
   * @format int32
   */
  companyId?: number;
  /**
   * Country code of current company environment. NOTE! This field can also be found in /company endpoint, and that is the recommended way to use it. This field will be deprecated and removed from this endpoint at some point in the future.
   * @example "FINLAND"
   */
  countryCode?:
    | "AFGHANISTAN"
    | "ALAND_ISLANDS"
    | "ALBANIA"
    | "ALGERIA"
    | "AMERICAN_SAMOA"
    | "ANDORRA"
    | "ANGOLA"
    | "ANGUILLA"
    | "ANTARCTICA"
    | "ANTIGUA_AND_BARBUDA"
    | "ARGENTINA"
    | "ARMENIA"
    | "ARUBA"
    | "ASCENSION_AND_TRISTAN_DA_CUNHA_SAINT_HELENA"
    | "AUSTRALIA"
    | "AUSTRIA"
    | "AZERBAIJAN"
    | "BAHAMAS"
    | "BAHRAIN"
    | "BANGLADESH"
    | "BARBADOS"
    | "BELARUS"
    | "BELGIUM"
    | "BELIZE"
    | "BENIN"
    | "BERMUDA"
    | "BHUTAN"
    | "BOLIVARIAN_REPUBLIC_OF_VENEZUELA"
    | "BOSNIA_AND_HERZEGOVINA"
    | "BOTSWANA"
    | "BOUVET_ISLAND"
    | "BRAZIL"
    | "BRITISH_INDIAN_OCEAN_TERRITORY"
    | "BRITISH_VIRGIN_ISLANDS"
    | "BRUNEI_DARUSSALAM"
    | "BULGARIA"
    | "BURKINA_FASO"
    | "BURUNDI"
    | "CABO_VERDE"
    | "CAMBODIA"
    | "CAMEROON"
    | "CANADA"
    | "CAYMAN_ISLANDS"
    | "CENTRAL_AFRICAN_REPUBLIC"
    | "CHAD"
    | "CHILE"
    | "CHINA"
    | "CHRISTMAS_ISLAND"
    | "COCOS_KEELING_ISLANDS"
    | "COLOMBIA"
    | "COMOROS"
    | "CONGO"
    | "COOK_ISLANDS"
    | "COSTA_RICA"
    | "COTE_D_IVOIRE"
    | "CROATIA"
    | "CUBA"
    | "CURACAO"
    | "CYPRUS"
    | "CZECH_REPUBLIC"
    | "DEMOCRATIC_PEOPLE_S_REPUBLIC_OF_KOREA"
    | "DENMARK"
    | "DJIBOUTI"
    | "DOMINICA"
    | "DOMINICAN_REPUBLIC"
    | "ECUADOR"
    | "EGYPT"
    | "EL_SALVADOR"
    | "EQUATORIAL_GUINEA"
    | "ERITREA"
    | "ESTONIA"
    | "ETHIOPIA"
    | "FALKLAND_ISLANDS_MALVINAS"
    | "FAROE_ISLANDS"
    | "FEDERATED_STATES_OF_MICRONESIA"
    | "FIJI"
    | "FINLAND"
    | "FRANCE"
    | "FRENCH_GUIANA"
    | "FRENCH_POLYNESIA"
    | "FRENCH_SOUTHERN_TERRITORIES"
    | "GABON"
    | "GAMBIA"
    | "GEORGIA"
    | "GERMANY"
    | "GHANA"
    | "GIBRALTAR"
    | "GREECE"
    | "GREENLAND"
    | "GRENADA"
    | "GUADELOUPE"
    | "GUAM"
    | "GUATEMALA"
    | "GUERNSEY"
    | "GUINEA"
    | "GUINEA_BISSAU"
    | "GUYANA"
    | "HAITI"
    | "HEARD_ISLAND_AND_MCDONALD_ISLANDS"
    | "HOLY_SEE_VATICAN_CITY_STATE"
    | "HONDURAS"
    | "HONG_KONG"
    | "HUNGARY"
    | "ICELAND"
    | "INDIA"
    | "INDONESIA"
    | "IRAQ"
    | "IRELAND"
    | "ISLAMIC_REPUBLIC_OF_IRAN"
    | "ISLE_OF_MAN"
    | "ISRAEL"
    | "ITALY"
    | "JAMAICA"
    | "JAPAN"
    | "JERSEY"
    | "JORDAN"
    | "KAZAKHSTAN"
    | "KENYA"
    | "KIRIBATI"
    | "KOSOVO_TEMPORARY"
    | "KUWAIT"
    | "KYRGYZSTAN"
    | "LAO_PEOPLE_S_DEMOCRATIC_REPUBLIC"
    | "LATVIA"
    | "LEBANON"
    | "LESOTHO"
    | "LIBERIA"
    | "LIBYA"
    | "LIECHTENSTEIN"
    | "LITHUANIA"
    | "LUXEMBOURG"
    | "MACAO"
    | "MADAGASCAR"
    | "MALAWI"
    | "MALAYSIA"
    | "MALDIVES"
    | "MALI"
    | "MALTA"
    | "MARSHALL_ISLANDS"
    | "MARTINIQUE"
    | "MAURITANIA"
    | "MAURITIUS"
    | "MAYOTTE"
    | "MEXICO"
    | "MONACO"
    | "MONGOLIA"
    | "MONTENEGRO"
    | "MONTSERRAT"
    | "MOROCCO"
    | "MOZAMBIQUE"
    | "MYANMAR"
    | "NAMIBIA"
    | "NAURU"
    | "NEPAL"
    | "NETHERLANDS"
    | "NEW_CALEDONIA"
    | "NEW_ZEALAND"
    | "NICARAGUA"
    | "NIGER"
    | "NIGERIA"
    | "NIUE"
    | "NORFOLK_ISLAND"
    | "NORTHERN_IRELAND_TEMPORARY"
    | "NORTHERN_MARIANA_ISLANDS"
    | "NORWAY"
    | "OMAN"
    | "PAKISTAN"
    | "PALAU"
    | "PANAMA"
    | "PAPUA_NEW_GUINEA"
    | "PARAGUAY"
    | "PERU"
    | "PHILIPPINES"
    | "PITCAIRN"
    | "PLURINATIONAL_STATE_OF_BOLIVIA"
    | "POLAND"
    | "PORTUGAL"
    | "PROVINCE_OF_CHINA_TAIWAN"
    | "PUERTO_RICO"
    | "QATAR"
    | "REPUBLIC_OF_KOREA"
    | "REPUBLIC_OF_MOLDOVA"
    | "REUNION"
    | "ROMANIA"
    | "RUSSIAN_FEDERATION"
    | "RWANDA"
    | "SAINT_BARTHELEMY"
    | "SAINT_KITTS_AND_NEVIS"
    | "SAINT_LUCIA"
    | "SAINT_MARTIN_FRENCH_PART"
    | "SAINT_PIERRE_AND_MIQUELON"
    | "SAINT_VINCENT_AND_THE_GRENADINES"
    | "SAMOA"
    | "SAN_MARINO"
    | "SAO_TOME_AND_PRINCIPE"
    | "SAUDI_ARABIA"
    | "SENEGAL"
    | "SERBIA"
    | "SEYCHELLES"
    | "SIERRA_LEONE"
    | "SINGAPORE"
    | "SINT_EUSTATIUS_AND_SABA_BONAIRE"
    | "SINT_MAARTEN_DUTCH_PART"
    | "SLOVAKIA"
    | "SLOVENIA"
    | "SOLOMON_ISLANDS"
    | "SOMALIA"
    | "SOUTH_AFRICA"
    | "SOUTH_GEORGIA_AND_THE_SOUTH_SANDWICH_ISLANDS"
    | "SOUTH_SUDAN"
    | "SPAIN"
    | "SRI_LANKA"
    | "STATE_OF_PALESTINE"
    | "SUDAN"
    | "SURINAME"
    | "SVALBARD_AND_JAN_MAYEN"
    | "SWAZILAND"
    | "SWEDEN"
    | "SWITZERLAND"
    | "SYRIAN_ARAB_REPUBLIC"
    | "TAJIKISTAN"
    | "THAILAND"
    | "THE_DEMOCRATIC_REPUBLIC_OF_THE_CONGO"
    | "THE_FORMER_YUGOSLAV_REPUBLIC_OF_MACEDONIA"
    | "TIMOR_LESTE"
    | "TOGO"
    | "TOKELAU"
    | "TONGA"
    | "TRINIDAD_AND_TOBAGO"
    | "TUNISIA"
    | "TURKEY"
    | "TURKMENISTAN"
    | "TURKS_AND_CAICOS_ISLANDS"
    | "TUVALU"
    | "UGANDA"
    | "UKRAINE"
    | "UNITED_ARAB_EMIRATES"
    | "UNITED_KINGDOM_OF_GREAT_BRITAIN_AND_NORTHERN_IRELAND"
    | "UNITED_REPUBLIC_OF_TANZANIA"
    | "UNITED_STATES_MINOR_OUTLYING_ISLANDS"
    | "UNITED_STATES_OF_AMERICA"
    | "URUGUAY"
    | "UZBEKISTAN"
    | "U_S_VIRGIN_ISLANDS"
    | "VANUATU"
    | "VIET_NAM"
    | "WALLIS_AND_FUTUNA"
    | "WESTERN_SAHARA"
    | "YEMEN"
    | "ZAMBIA"
    | "ZIMBABWE";
  /**
   * Street
   * @minLength 0
   * @maxLength 80
   */
  street?: string;
  /**
   * Zip
   * @minLength 0
   * @maxLength 8
   */
  zip?: string;
  /**
   * City
   * @minLength 0
   * @maxLength 80
   */
  city?: string;
  /**
   * Business partner ID of the current user.
   * @format int32
   */
  partnerId?: number;
  /** Indicates the login method chosen by the user. */
  loginMethod?: "FINAGO_KEY" | "PASSWORDLIST" | "PROCOUNTOR_KEY";
  /**
   * The first name of the user.
   * @minLength 1
   * @maxLength 80
   */
  firstName: string;
  /**
   * The last name of the user.
   * @minLength 1
   * @maxLength 80
   */
  lastName: string;
  /**
   * The email address of the user.
   * @minLength 1
   * @maxLength 2147483647
   */
  email: string;
  /** The mobile phone number of the user. */
  mobilePhone: string;
  /**
   * The secondary phone number of the user.
   * @minLength 0
   * @maxLength 20
   */
  secondaryPhone?: string;
  /** The social security number of the user. */
  socialSecurityNumber?: string;
}

/** User rights in environment */
export interface UserPermissions {
  /** Contains rights for management functionalities. */
  management?: ManagementRights;
  /** Contains rights for user functionalities. */
  user?: UserRights;
  /** Contains rights for sales functionalities. */
  sales?: SalesRights;
  /** Contains rights for purchases functionalities. */
  purchases?: PurchasesRights;
  /** Contains rights for travel and expenses functionalities. */
  travelAndExpenses?: TravelAndExpensesRights;
  /** Contains rights for invoice circulation functionalities. */
  invoiceCirculation?: InvoiceCirculationRights;
  /** Contains rights for salaries functionalities. */
  salaries?: SalariesRights;
  /** Contains rights for payment transactions functionalities. */
  payments?: PaymentRights;
  /** Contains rights for accounting functionalities. */
  accounting?: AccountingRights;
}

export interface UserPrivileges {
  /** Role of a current user */
  role?: string;
  /** User rights in environment */
  rights?: UserPermissions;
}

export interface UserProfile {
  /** First name of the user. */
  firstname?: string;
  /** Surname (last name) of the user. */
  surname?: string;
}

/** Contains rights for user functionalities. */
export interface UserRights {
  /** Access level to edit personal info functionality. */
  editPersonalInfo?: "ALL_RIGHTS" | "NOT_ENABLED" | "NO_ACCESS" | "VIEWING_RIGHTS";
  /** Is limited dimensions limitation enabled. */
  limitedDimensions?: boolean;
  /** Is login limitation enabled. */
  blockSoloLoginToProcountor?: boolean;
}

/** List of available VATs in different countries. */
export interface VatCountryInfo {
  /**
   * VAT country name
   * @example "Finland"
   */
  country?: string;
  /** List of VAT percentages */
  percentages?: VatInfo[];
}

/** List of VAT percentages */
export interface VatInfo {
  /**
   * VAT percentage value
   * @format double
   */
  vatPercent?: number;
  /** Is VAT percentage allowed for sales */
  sales?: boolean;
  /** Is VAT percentage allowed for purchase */
  purchase?: boolean;
}

export interface VatInformation {
  /** List of available VATs in different countries. */
  vatInformation?: VatCountryInfo[];
  /** List of available VAT statuses. */
  vatStatuses?: VatStatusInfo[];
}

export interface VatPercentages {
  /** List of available VAT percentages. */
  vatPercentages?: number[];
}

/** List of available VAT statuses. */
export interface VatStatusInfo {
  /**
   * VAT status ID
   * @format int32
   */
  vatStatus?: number;
  /** VAT status description */
  description?: string;
  /** Is VAT status allowed for sales */
  sales?: boolean;
  /** Is VAT status allowed for purchase */
  purchase?: boolean;
}

/** List of acceptors. */
export interface Verifier {
  /** First name of the user. */
  firstname?: string;
  /** Surname (last name) of the user. */
  surname?: string;
  /**
   * Id of the user.
   * @format int32
   */
  userId?: number;
  /**
   * Order number of the verifier.
   * @format int32
   */
  orderNo?: number;
}

export interface VerifierList {
  /**
   * Id of the verifier list.
   * @format int32
   */
  id?: number;
  /** Name the verifier list. */
  name?: string;
  /** List of verifiers. */
  verifiers?: Verifier[];
  /** List of acceptors. */
  acceptors?: Verifier[];
}

export interface VerifierListBasic {
  /**
   * Id of the verifier list.
   * @format int32
   */
  id?: number;
  /** Name the verifier list. */
  name?: string;
  /** List of user ids set as verifier. */
  verifiers?: number[];
  /** List of user ids set as acceptor. */
  acceptors?: number[];
}

/** Search results. */
export interface Webhook {
  /**
   * Generated webhook UUID.
   * @format uuid
   */
  uuid?: string;
  /**
   * Provided URL, for receiving notifications.
   * @format url
   */
  url: string;
  /** Webhook's authentication type. */
  authenticationType: "HMAC" | "NONE";
  /** Webhook's authentication meta. */
  authenticationMeta?: Record<string, object>;
  /** Collection of subscribed event types. */
  subscriptions: (
    | "DIRECTBANKDATATRANSFER_PAYMENT_CREATED"
    | "DIRECT_SALARY_PAYMENTS_CANCELED"
    | "DIRECT_SALARY_PAYMENTS_CREATED"
    | "INVOICE_PAYMENTEVENTS_DELETED"
    | "INVOICE_PAYMENT_CREATED"
    | "PAYMENT_DELETED"
    | "PAYMENT_UPDATED"
    | "TRACKING_PERIOD_STATUS_UPDATED"
    | "USER_UPDATED"
  )[];
}

export interface WebhookSearchResult {
  /** Search results. */
  results?: Webhook[];
  /** Search result metadata. */
  meta?: SearchResultMetaData;
}

/** Work hours. */
export interface WorkHours {
  /**
   * Unique identifier of work hours.
   * @format int64
   */
  id?: number;
  /** Work hours per month. */
  monthly?: number;
  /** Work hours per week. */
  weekly?: number;
  /**
   * Version.
   * @format date-time
   */
  version?: string;
}

/** Yearly figures. Employer payment percentages. */
export interface YearlyFigures {
  /**
   * Year.
   * @format int32
   */
  year?: number;
  /** Salaries paid during year. */
  paidSalariesSum?: number;
  /** Employer's Employees' Pension Act contribution percent. */
  pensionInsuranceContributionPercent?: number;
  /** Unemployment insurance payment base percent. */
  unemploymentInsurancePercentBasic?: number;
  /** Unemployment insurance payment additional percent. */
  unemploymentInsurancePercentAdditional?: number;
  /** Occupational accident insurance percent. */
  accidentInsurancePercent?: number;
  /** Group life insurance charge percent. */
  groupLifeInsurancePercent?: number;
  /** Health care insurance contribution percent. */
  healthCareInsurancePercent?: number;
}

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "https://pts-procountor.pubdev.azure.procountor.com/api",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title Procountor API
 * @version 1.0.0
 * @baseUrl https://pts-procountor.pubdev.azure.procountor.com/api
 * @externalDocs https://pts-procountor.pubdev.azure.procountor.com/api/openapi.json
 *
 * Procountor API documentation
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  webhooks = {
    /**
     * @description Allows to update webhook properties and subscriptions
     *
     * @tags Webhooks
     * @name UpdateWebhook
     * @summary Update a webhook.
     * @request PUT:/webhooks/{uuid}
     * @secure
     * @response `200` `InfoMessage` Webhook was successfully updated
     * @response `400` `ErrorMessages` Request contains invalid data
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights
     * @response `404` `ErrorMessages` Webhook not found
     */
    updateWebhook: (uuid: string, data: Webhook, params: RequestParams = {}) =>
      this.request<InfoMessage, ErrorMessages>({
        path: `/webhooks/${uuid}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Removing the hook is equivalent to canceling all its subscriptions
     *
     * @tags Webhooks
     * @name DeleteWebhook
     * @summary Delete a webhook.
     * @request DELETE:/webhooks/{uuid}
     * @secure
     * @response `204` `void` Webhook was successfully deleted
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights
     * @response `404` `ErrorMessages` Webhooks not found
     */
    deleteWebhook: (uuid: string, params: RequestParams = {}) =>
      this.request<void, ErrorMessages>({
        path: `/webhooks/${uuid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * @description Return a pageable list containing webhooks and subscriptions
     *
     * @tags Webhooks
     * @name GetWebhooks
     * @summary Search for webhooks.
     * @request GET:/webhooks
     * @secure
     * @response `200` `WebhookSearchResult` Webhooks successfully returned
     * @response `400` `ErrorMessages` Request contains invalid data
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights
     */
    getWebhooks: (
      query?: {
        /**
         * Webhook url
         * @format url
         * @example "https://www.procountor.com/webhooks"
         */
        url?: string;
        /**
         * Webhook subscription type
         * @example "INVOICE_PAYMENT_CREATED"
         */
        eventType?: (
          | "INVOICE_PAYMENT_CREATED"
          | "DIRECTBANKDATATRANSFER_PAYMENT_CREATED"
          | "INVOICE_PAYMENTEVENTS_DELETED"
          | "PAYMENT_UPDATED"
          | "PAYMENT_DELETED"
          | "USER_UPDATED"
          | "DIRECT_SALARY_PAYMENTS_CREATED"
          | "DIRECT_SALARY_PAYMENTS_CANCELED"
        )[];
        /**
         * Order the results by webhook creation date
         * @default "DESC"
         * @example "ASC"
         */
        orderByCreatedDate?: "ASC" | "DESC";
        /**
         * Page size for the results. Maximum value: 200.
         * @format int32
         * @max 200
         * @default 50
         * @example 20
         */
        size?: number;
        /**
         * Page number for the results
         * @format int32
         * @default 0
         * @example 2
         */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<WebhookSearchResult, ErrorMessages>({
        path: `/webhooks`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Webhooks allows to subscribe to chosen resource and getting information about this resource state change
     *
     * @tags Webhooks
     * @name AddWebhook
     * @summary Add new webhook.
     * @request POST:/webhooks
     * @secure
     * @response `200` `CreatedWebhookResponse` Webhook was successfully created
     * @response `400` `ErrorMessages` Request contains invalid data
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights
     */
    addWebhook: (data: Webhook, params: RequestParams = {}) =>
      this.request<CreatedWebhookResponse, ErrorMessages>({
        path: `/webhooks`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  users = {
    /**
     * @description Returns details of the currently logged in user based on the Access token. Use this endpoint for obtaining the companyId of the current environment.
     *
     * @tags Users
     * @name GetCurrentUser
     * @summary Get the current user.
     * @request GET:/users
     * @secure
     * @response `200` `User` The user was successfully returned.
     * @response `403` `ErrorMessages` Insufficient user rights.
     */
    getCurrentUser: (params: RequestParams = {}) =>
      this.request<User, ErrorMessages>({
        path: `/users`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for updating user information.
     *
     * @tags Users
     * @name UpdateUserInfo
     * @summary Update user data.
     * @request PUT:/users
     * @secure
     * @response `202` `TransactionIdentifier` Request for confirmation updating user data sent successfully.
     * @response `400` `ErrorMessages` User information contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     */
    updateUserInfo: (data: User, params: RequestParams = {}) =>
      this.request<TransactionIdentifier, ErrorMessages>({
        path: `/users`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Confirm to make an action related to the given identifier.
     *
     * @tags Users
     * @name Confirm
     * @summary Confirmation of action with the given identifier.
     * @request PUT:/users/{transactionIdentifier}/confirm
     * @secure
     * @response `200` `InfoMessage` Action performed successfully.
     * @response `202` `InfoMessage` Transaction not confirmed yet.
     * @response `403` `ErrorMessages` Transaction not belong to the user or insufficient user rights.
     * @response `404` `ErrorMessages` Element not found or request contains invalid data.
     * @response `406` `ErrorMessages` Transaction rejected.
     * @response `408` `ErrorMessages` Transaction expired.
     * @response `409` `ErrorMessages` Transaction already processed.
     */
    confirm: (transactionIdentifier: string, params: RequestParams = {}) =>
      this.request<InfoMessage, ErrorMessages>({
        path: `/users/${transactionIdentifier}/confirm`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns details of user rights for the currently logged in user.
     *
     * @tags Users
     * @name GetCurrentUserRights
     * @summary Get the current user rights.
     * @request GET:/users/rights
     * @secure
     * @response `200` `UserPrivileges` The user rights was successfully returned.
     */
    getCurrentUserRights: (params: RequestParams = {}) =>
      this.request<UserPrivileges, any>({
        path: `/users/rights`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a user profile based on the given user ID. Same company users only.
     *
     * @tags Users
     * @name GetUserProfile
     * @summary Get a user profile.
     * @request GET:/users/profiles/{userId}
     * @secure
     * @response `200` `UserProfile` The user was successfully returned.
     * @response `404` `ErrorMessages` User with given id not found.
     */
    getUserProfile: (userId: number, params: RequestParams = {}) =>
      this.request<UserProfile, ErrorMessages>({
        path: `/users/profiles/${userId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  referencepayments = {
    /**
     * No description
     *
     * @tags Reference payments
     * @name AllocateAllocationMetadata
     * @summary Allocate metadata to a reference payment
     * @request PUT:/referencepayments/{referencePaymentId}/metadata
     * @secure
     * @response `200` `InfoMessage` Metadata allocated successfully
     * @response `400` `ErrorMessages` Metadata contains invalid data
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights
     * @response `404` `ErrorMessages` Reference payment not found
     */
    allocateAllocationMetadata: (referencePaymentId: number, data: AllocationMetadata, params: RequestParams = {}) =>
      this.request<InfoMessage, ErrorMessages>({
        path: `/referencepayments/${referencePaymentId}/metadata`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reference payments
     * @name DeleteAllocationMetadata
     * @summary Delete the metadata for a reference payment
     * @request DELETE:/referencepayments/{referencePaymentId}/metadata
     * @secure
     * @response `204` `DataModel` Metadata deleted successfully
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights
     * @response `404` `ErrorMessages` Reference payment not found
     */
    deleteAllocationMetadata: (referencePaymentId: number, params: RequestParams = {}) =>
      this.request<DataModel, ErrorMessages>({
        path: `/referencepayments/${referencePaymentId}/metadata`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all reference payments that match the request criteria. This endpoint supports accountNumber parameter in HTTP header.
     *
     * @tags Reference payments
     * @name GetReferencePayments
     * @summary Get reference payments.
     * @request GET:/referencepayments
     * @secure
     * @response `200` `ReferencePaymentsSearchResult` The reference payments were successfully returned
     * @response `400` `ErrorMessages` Request contains invalid data
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights
     */
    getReferencePayments: (
      query?: {
        /**
         * Start date of the search (value date)
         * @format date
         * @example "2016-08-31"
         */
        startDate?: string;
        /**
         * End date of the search (value date)
         * @format date
         * @example "2016-12-31"
         */
        endDate?: string;
        /**
         * Previous id for pagination
         * @format int32
         * @example 123456
         */
        previousId?: number;
        /**
         * Order the results by ID
         * @default "DESC"
         * @example "ASC"
         */
        orderById?: "ASC" | "DESC";
        /**
         * Page size for the results. Maximum value: 200.
         * @format int32
         * @max 200
         * @default 50
         * @example 20
         */
        size?: number;
        /**
         * Page number for the results
         * @format int32
         * @default 0
         * @example 2
         */
        page?: number;
        /**
         * The bank account number to use when searching for related reference payments.
         * @example "FI1234567890123456"
         */
        accountNumber?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ReferencePaymentsSearchResult, ErrorMessages>({
        path: `/referencepayments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  products = {
    /**
     * @description Returns the requested product by its id. Also accepts multiple comma-separated ids. Max 200 ids per request.
     *
     * @tags Products
     * @name GetProduct
     * @summary Get a product.
     * @request GET:/products/{productId}
     * @secure
     * @response `200` `Product` The product was successfully returned.
     * @response `400` `ErrorMessages` Request contains invalid data
     * @response `404` `ErrorMessages` Product not found.
     */
    getProduct: (
      productId: string,
      query?: {
        /**
         * Include localized product names.
         * @default false
         * @example true
         */
        includeLocalizations?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<Product, ErrorMessages>({
        path: `/products/${productId}`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a product and returns it.
     *
     * @tags Products
     * @name UpdateProduct
     * @summary Update a product.
     * @request PUT:/products/{productId}
     * @secure
     * @response `200` `Product` The product was successfully updated.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Product not found.
     */
    updateProduct: (productId: number, data: Product, params: RequestParams = {}) =>
      this.request<Product, ErrorMessages>({
        path: `/products/${productId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Remove a product by given id and returns status code 204.
     *
     * @tags Products
     * @name RemoveProductById
     * @summary Remove a product.
     * @request DELETE:/products/{productId}
     * @secure
     * @response `204` `DataModel` The product was successfully removed.
     * @response `400` `ErrorMessages` The product with product type TRAVEL cannot be removed.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Product not found.
     */
    removeProductById: (productId: number, params: RequestParams = {}) =>
      this.request<DataModel, ErrorMessages>({
        path: `/products/${productId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the requested product group by its id.
     *
     * @tags Products
     * @name GetProductGroupByGroupId
     * @summary Getting product group.
     * @request GET:/products/groups/{groupId}
     * @secure
     * @response `200` `ProductGroup` The product group was successfully returned.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Product group not found.
     */
    getProductGroupByGroupId: (groupId: number, params: RequestParams = {}) =>
      this.request<ProductGroup, ErrorMessages>({
        path: `/products/groups/${groupId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a product group name and returns it.
     *
     * @tags Products
     * @name UpdateProductGroupName
     * @summary Update a product group name.
     * @request PUT:/products/groups/{groupId}
     * @secure
     * @response `200` `ProductGroup` The product group name was successfully updated.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Product group not found.
     */
    updateProductGroupName: (groupId: number, data: ProductGroup, params: RequestParams = {}) =>
      this.request<ProductGroup, ErrorMessages>({
        path: `/products/groups/${groupId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Remove a product group (except product group with TRAVEL type) by given id and returns status code 204.
     *
     * @tags Products
     * @name RemoveProductGroupById
     * @summary Remove a product group.
     * @request DELETE:/products/groups/{groupId}
     * @secure
     * @response `204` `DataModel` The product group was successfully removed.
     * @response `400` `ErrorMessages` The product group with product type TRAVEL cannot be removed.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Product group not found.
     * @response `409` `ErrorMessages` The product group cannot be removed, because it contains related products. Error message alsowill return list of product identifiers that are linked to product group.
     */
    removeProductGroupById: (groupId: number, params: RequestParams = {}) =>
      this.request<DataModel, ErrorMessages>({
        path: `/products/groups/${groupId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a paginated list of products in the current environment, starting from "previousId" limited by "size". with a metadata about the pagination.
     *
     * @tags Products
     * @name GetProducts
     * @summary Get all products
     * @request GET:/products
     * @secure
     * @response `200` `ProductSearchResult` The products were successfully returned
     * @response `400` `ErrorMessages` Request contains invalid data
     * @response `403` `ErrorMessages` Insufficient user rights.
     */
    getProducts: (
      query?: {
        /**
         * Name of product matched by substring.
         * @example "product"
         */
        name?: string;
        /**
         * Previous Id for pagination
         * @format int32
         * @default 0
         * @example 123456
         */
        previousId?: number;
        /**
         * Page size for the results. Maximum value: 200.
         * @format int32
         * @max 200
         * @default 50
         * @example 20
         */
        size?: number;
        /**
         * Order the results by product ID
         * @example "ASC"
         */
        orderById?: "ASC" | "DESC";
        /**
         * Id of product group.
         * @example 1
         */
        group?: number[];
        /**
         * Register type of product. If not given, then SALES and PURCHASE returned as default
         * @example "TRAVEL"
         */
        type?: "SALES" | "PURCHASE" | "TRAVEL";
        /**
         * Custom code assigned by the owner of the product. Matched by substring.
         * @maxLength 40
         * @example 123
         */
        code?: string;
        /**
         * Start date of activity period. Used by TRAVEL type only. Used to search all travel product which are in active state after that date (expiration date is after that date).
         * @format date
         * @example "2016-08-31"
         */
        startDate?: string;
        /**
         * End date of activity period. Used by TRAVEL type only. Used to search all travel product which were activated before that date (start date is before that date).
         * @format date
         * @example "2016-08-31"
         */
        endDate?: string;
        /**
         * Include localized product names
         * @default false
         * @example true
         */
        includeLocalizations?: boolean;
        /**
         * Status of product
         * @example true
         */
        active?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<ProductSearchResult, ErrorMessages>({
        path: `/products`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new product and returns it.
     *
     * @tags Products
     * @name AddProduct
     * @summary Add a new product.
     * @request POST:/products
     * @secure
     * @response `200` `Product` The product was successfully created.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     */
    addProduct: (data: Product, params: RequestParams = {}) =>
      this.request<Product, ErrorMessages>({
        path: `/products`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for getting groups whose meet search criteria.
     *
     * @tags Products
     * @name GetProductGroups
     * @summary Get product groups by product type.
     * @request GET:/products/groups
     * @secure
     * @response `200` `ProductGroups` Product groups were successfully returned.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     */
    getProductGroups: (
      query?: {
        /**
         * Product type. Endpoint will return product groups for types: SALES and PURCHASE when user will not specify type.
         * @example "SALES"
         */
        type?: "SALES" | "PURCHASE" | "TRAVEL";
      },
      params: RequestParams = {},
    ) =>
      this.request<ProductGroups, ErrorMessages>({
        path: `/products/groups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Adds a product group name and returns it.
     *
     * @tags Products
     * @name AddProductGroupName
     * @summary Add a product group name.
     * @request POST:/products/groups
     * @secure
     * @response `200` `ProductGroup` The product group name was successfully added.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     */
    addProductGroupName: (data: ProductGroup, params: RequestParams = {}) =>
      this.request<ProductGroup, ErrorMessages>({
        path: `/products/groups`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  persons = {
    /**
     * @description Returns requested person's data
     *
     * @tags Persons
     * @name GetPersonById
     * @summary Get person data
     * @request GET:/persons/{id}
     * @secure
     * @response `200` `Person` The person was successfully returned.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Person was not found.
     */
    getPersonById: (id: number, params: RequestParams = {}) =>
      this.request<Person, ErrorMessages>({
        path: `/persons/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates a person and returns it.
     *
     * @tags Persons
     * @name UpdatePerson
     * @summary Update a person.
     * @request PUT:/persons/{id}
     * @secure
     * @response `200` `Person` Person was successfully updated.
     * @response `400` `ErrorMessages` Person contains invalid data.
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights.
     * @response `404` `ErrorMessages` No person found for given id.
     */
    updatePerson: (id: number, data: Person, params: RequestParams = {}) =>
      this.request<Person, ErrorMessages>({
        path: `/persons/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns default dimension for the given person and dimension ids.
     *
     * @tags Persons
     * @name GetPersonDefaultDimensionById
     * @summary Get a default dimension of a person.
     * @request GET:/persons/{id}/defaults/dimensions/{dimensionId}
     * @secure
     * @response `200` `DefaultDimension` The person default dimension was successfully returned.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` No person found for given person id or no dimension found for given person and dimension id.
     */
    getPersonDefaultDimensionById: (id: number, dimensionId: number, params: RequestParams = {}) =>
      this.request<DefaultDimension, ErrorMessages>({
        path: `/persons/${id}/defaults/dimensions/${dimensionId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates default dimension for a person with the given person and dimension ids.
     *
     * @tags Persons
     * @name UpdateDefaultDimension
     * @summary Update default dimension of a person.
     * @request PUT:/persons/{id}/defaults/dimensions/{dimensionId}
     * @secure
     * @response `200` `DefaultDimension` The person default dimension was successfully updated.
     * @response `400` `ErrorMessages` Default dimension contains invalid data.
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights.
     * @response `404` `ErrorMessages` No person found for given person id or no dimension found for given person and dimension id.
     */
    updateDefaultDimension: (id: number, dimensionId: number, data: DefaultDimension, params: RequestParams = {}) =>
      this.request<DefaultDimension, ErrorMessages>({
        path: `/persons/${id}/defaults/dimensions/${dimensionId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the list of persons with basic information: id, lastname, firstname, address, identifier, identifierType and personNumber.
     *
     * @tags Persons
     * @name GetPersons
     * @summary Get the list of persons matching search criteria.
     * @request GET:/persons
     * @secure
     * @response `200` `(PersonSearchResult)[]` List of persons was successfully returned.
     * @response `403` `ErrorMessages` Insufficient user rights.
     */
    getPersons: (
      query?: {
        /**
         * Person number
         *
         * Also partial - search matches returned.
         * @example 100015
         */
        personNumber?: string;
        /**
         * Main group name of type PERSON
         *
         * Only exact - search match returned.
         * @example "Main Group"
         */
        mainPersonGroup?: string;
        /**
         * Unique identifier of Business Partner Group of type PERSON
         * @example 123456
         */
        personGroupId?: number;
        /**
         * Include inactive persons
         * @default false
         */
        includeInactive?: boolean;
        /**
         * Page size for the results. Maximum value: 200.
         * @format int32
         * @min 1
         * @max 200
         * @default 50
         * @example 20
         */
        size?: number;
        /**
         * Page number for the results
         * @format int32
         * @min 0
         * @default 0
         * @example 2
         */
        page?: number;
        /**
         * Order the results by Person ID
         * @default "DESC"
         * @example "ASC"
         */
        orderById?: "ASC" | "DESC";
      },
      params: RequestParams = {},
    ) =>
      this.request<PersonSearchResult[], ErrorMessages>({
        path: `/persons`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a new person and returns it.
     *
     * @tags Persons
     * @name InsertPerson
     * @summary Create a new person.
     * @request POST:/persons
     * @secure
     * @response `200` `Person` Person was successfully created.
     * @response `400` `ErrorMessages` Person contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     */
    insertPerson: (data: Person, params: RequestParams = {}) =>
      this.request<Person, ErrorMessages>({
        path: `/persons`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns default products for the given person id.
     *
     * @tags Persons
     * @name GetPersonDefaultProducts
     * @summary Get a default products of a person.
     * @request GET:/persons/{id}/defaults/products
     * @secure
     * @response `200` `(DefaultProduct)[]` The person default products were successfully returned.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` No person found for given person id.
     */
    getPersonDefaultProducts: (id: number, params: RequestParams = {}) =>
      this.request<DefaultProduct[], ErrorMessages>({
        path: `/persons/${id}/defaults/products`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns default dimensions for the given person id
     *
     * @tags Persons
     * @name GetPersonDefaultDimensionsByPersonId
     * @summary Get a default dimensions of a person
     * @request GET:/persons/{id}/defaults/dimensions
     * @secure
     * @response `200` `(DefaultDimensionBasicData)[]` The person default dimensions were successfully returned.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` No person found for given person id.
     */
    getPersonDefaultDimensionsByPersonId: (id: number, params: RequestParams = {}) =>
      this.request<DefaultDimensionBasicData[], ErrorMessages>({
        path: `/persons/${id}/defaults/dimensions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  payments = {
    /**
     * @description Confirm to make an action related to the given identifier.
     *
     * @tags Payments
     * @name Confirm1
     * @summary Confirmation of action with the given identifier.
     * @request PUT:/payments/{transactionIdentifier}/confirm
     * @secure
     * @response `200` `PaymentsConfirmationResponseModels` Action performed successfully.<br> The response model depends on the transaction type that was requested to confirm: <br><b>1. For creating direct bank transfers</b> (POST /payments/directbanktransfers):   <b>PaymentSummaries</b> <br><b>2. For paying invoices</b> (POST /payments):   <b>InvoicePaymentSummaries</b> <br><b>3. For canceling a payment</b> (PUT /payments/{paymentId}/cancel):   <b>InfoMessage</b> <br><b>4. For deleting a payment</b> (DELETE /payments/{paymentId}):   <b>InfoMessage</b>
     * @response `202` `InfoMessage` Transaction not confirmed yet and transaction identifier returned.
     * @response `403` `ErrorMessages` Transaction not belong to the user, insufficient payment user rights or payment in a wrong status.
     * @response `404` `ErrorMessages` Element not found or request contains invalid data.
     * @response `406` `ErrorMessages` Transaction rejected. End user rejected the transaction.
     * @response `408` `ErrorMessages` Transaction expired. Expiration time: 5 minutes.
     * @response `409` `ErrorMessages` Transaction already processed.
     */
    confirm1: (transactionIdentifier: string, params: RequestParams = {}) =>
      this.request<PaymentsConfirmationResponseModels, ErrorMessages>({
        path: `/payments/${transactionIdentifier}/confirm`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Cancel a payment which is ready to be paid but not paid yet. Salary payment method is not supported.
     *
     * @tags Payments
     * @name CancelPayment
     * @summary Cancel a payment.
     * @request PUT:/payments/{paymentId}/cancel
     * @secure
     * @response `202` `TransactionIdentifier` Request for confirmation of cancel payment sent successfully and transaction identifier returned.
     * @response `403` `ErrorMessages` Insufficient user rights or payment in a wrong status.
     * @response `404` `ErrorMessages` Payment not found or request contains invalid data.
     */
    cancelPayment: (paymentId: number, params: RequestParams = {}) =>
      this.request<TransactionIdentifier, ErrorMessages>({
        path: `/payments/${paymentId}/cancel`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Confirm to make an action related to the given identifier.
     *
     * @tags Payments
     * @name Confirm2
     * @summary Confirmation of action with the given identifier. Supports only Finnish environments.
     * @request PUT:/payments/directsalarypayments/{transactionIdentifier}/confirm
     * @secure
     * @response `200` `DirectSalaryPaymentsConfirmationResponseModels` Action performed successfully.<br> The response model depends on the transaction type that was requested to confirm: <br><b>1. For creating direct salary payments</b> (POST /payments/directsalarypayments): <b>PaymentGroup</b> <br><b>2. For canceling a payment</b> (PUT /payments/directsalarypayments/{paymentlistId}/cancel): <b>InfoMessage</b>
     * @response `202` `InfoMessage` Transaction not confirmed yet and transaction identifier returned.
     * @response `403` `ErrorMessages` Transaction not belong to the user, insufficient payment user rights or payment in a wrong status.
     * @response `404` `ErrorMessages` Element not found or request contains invalid data.
     * @response `406` `ErrorMessages` Transaction rejected.
     * @response `408` `ErrorMessages` Transaction expired.
     * @response `409` `ErrorMessages` Transaction already processed.
     */
    confirm2: (transactionIdentifier: string, params: RequestParams = {}) =>
      this.request<DirectSalaryPaymentsConfirmationResponseModels, ErrorMessages>({
        path: `/payments/directsalarypayments/${transactionIdentifier}/confirm`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Canceling direct salary payments are possible only if all payments can be canceled.
     *
     * @tags Payments
     * @name CancelDirectSalaryPayments
     * @summary Cancel direct salary payments. Supports only Finnish environments.
     * @request PUT:/payments/directsalarypayments/{paymentListId}/cancel
     * @secure
     * @response `202` `TransactionIdentifier` Request for canceling direct salary payments sent successfully and transaction identifier returned.
     * @response `403` `ErrorMessages` Insufficient user rights or payments are already being processed.
     * @response `404` `ErrorMessages` Payment list with given id not found.
     */
    cancelDirectSalaryPayments: (paymentListId: number, params: RequestParams = {}) =>
      this.request<TransactionIdentifier, ErrorMessages>({
        path: `/payments/directsalarypayments/${paymentListId}/cancel`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all payment transactions that match the request criteria.
     *
     * @tags Payments
     * @name GetPaymentRows
     * @summary Get payment transactions.
     * @request GET:/payments
     * @secure
     * @response `200` `PaymentSearchResult` The payment transactions were successfully returned.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     */
    getPaymentRows: (
      query?: {
        /**
         * Start date of the search (value date).
         * @format date
         * @example "2016-08-31"
         */
        startDate?: string;
        /**
         * End date of the search (value date).
         * @format date
         * @example "2016-08-31"
         */
        endDate?: string;
        /**
         * Unique invoice identifier(s).
         * @example 123456
         */
        invoiceId?: number[];
        /**
         * Previous payment ID for pagination.
         * @format int32
         * @example 123456
         */
        previousId?: number;
        /**
         * Order the results by payment ID.
         * @example "ASC"
         */
        orderById?: "ASC" | "DESC";
        /**
         * Page size for the results. Maximum value: 200.
         * @format int32
         * @max 200
         * @default 50
         * @example 20
         */
        size?: number;
        /**
         * Page number for the results
         * @format int32
         * @default 0
         * @example 2
         */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaymentSearchResult, ErrorMessages>({
        path: `/payments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description All of the invoices have to be valid in order to pay. If paying one of the invoices fails, none of the invoices will be paid.The payer bank account has to be predefined in the environment to be able to use the payment.
     *
     * @tags Payments
     * @name PayInvoices
     * @summary Pay invoices.
     * @request POST:/payments
     * @secure
     * @response `202` `TransactionIdentifier` Request for pay invoices sent successfully and transaction identifier returned.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Some of invoices not found.
     */
    payInvoices: (data: InvoicePaymentList, params: RequestParams = {}) =>
      this.request<TransactionIdentifier, ErrorMessages>({
        path: `/payments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all salary payment transactions that match the request criteria.
     *
     * @tags Payments
     * @name SearchSalaryPaymentGroups
     * @summary Get salary payment transactions. Supports only Finnish environments.
     * @request GET:/payments/directsalarypayments
     * @secure
     * @response `200` `DirectSalaryPaymentGroupBaseInfoSearchResult` The salary payment transactions were successfully returned.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     */
    searchSalaryPaymentGroups: (
      query?: {
        /**
         * Start date of the search (create date).
         * @format date
         * @example "2016-08-31"
         */
        startDate?: string;
        /**
         * End date of the search (create date).
         * @format date
         * @example "2016-08-31"
         */
        endDate?: string;
        /**
         * The list name to use when searching for salary payments groups
         * @example "abc"
         */
        name?: string;
        /**
         * Previous payment ID for pagination.
         * @format int32
         * @example 123456
         */
        previousId?: number;
        /**
         * custom ID of the payment list
         * @example "123abc"
         */
        customId?: string;
        /**
         * Order the results by payment ID.
         * @example "ASC"
         */
        orderById?: "ASC" | "DESC";
        /**
         * Page size for the results. Maximum value: 200.
         * @format int32
         * @max 200
         * @default 50
         * @example 20
         */
        size?: number;
        /**
         * Page number for the results
         * @format int32
         * @default 0
         * @example 2
         */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<DirectSalaryPaymentGroupBaseInfoSearchResult, ErrorMessages>({
        path: `/payments/directsalarypayments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates direct salary payments with given data.
     *
     * @tags Payments
     * @name CreateDirectSalaryPayments
     * @summary Create direct salary payments. Supports only Finnish environments.
     * @request POST:/payments/directsalarypayments
     * @secure
     * @response `202` `TransactionIdentifier` Request for creating direct salary payments sent successfully and transaction identifier returned.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Some of required data not found.
     */
    createDirectSalaryPayments: (data: DirectSalaryPayments, params: RequestParams = {}) =>
      this.request<TransactionIdentifier, ErrorMessages>({
        path: `/payments/directsalarypayments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates direct bank transfers with given data.
     *
     * @tags Payments
     * @name CreateDirectBankTransfers
     * @summary Create direct bank transfers.
     * @request POST:/payments/directbanktransfers
     * @secure
     * @response `202` `TransactionIdentifier` Request for creating direct bank transfers sent successfully and transaction identifier returned.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Some of required data not found.
     */
    createDirectBankTransfers: (data: DirectBankTransferList, params: RequestParams = {}) =>
      this.request<TransactionIdentifier, ErrorMessages>({
        path: `/payments/directbanktransfers`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a payment transaction with provided id that matches the request criteria.
     *
     * @tags Payments
     * @name GetPaymentRowById
     * @summary Get a payment transaction.
     * @request GET:/payments/{paymentId}
     * @secure
     * @response `200` `PaymentRowInfo` The payment transaction was successfully returned.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Payment not found or user has insufficient rights.
     */
    getPaymentRowById: (paymentId: number, params: RequestParams = {}) =>
      this.request<PaymentRowInfo, ErrorMessages>({
        path: `/payments/${paymentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Remove a payment which is not queued or paid. Supports only invoice payment.
     *
     * @tags Payments
     * @name RemovePayment
     * @summary Remove a payment.
     * @request DELETE:/payments/{paymentId}
     * @secure
     * @response `202` `TransactionIdentifier` Request for confirmation of remove payment sent successfully and transaction identifier returned.
     * @response `403` `ErrorMessages` Insufficient user rights or payment in a wrong status.
     * @response `404` `ErrorMessages` Payment not found or request contains invalid data.
     */
    removePayment: (paymentId: number, params: RequestParams = {}) =>
      this.request<TransactionIdentifier, ErrorMessages>({
        path: `/payments/${paymentId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all payment error messages that match the request criteria.
     *
     * @tags Payments
     * @name GetErrorMessages
     * @summary Get error messages.
     * @request GET:/payments/errormessages
     * @secure
     * @response `200` `PaymentErrorMessageSearchResult` The payment error messages were successfully returned.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     */
    getErrorMessages: (
      query?: {
        /**
         * Start date of the search (value date).
         * @format date
         * @example "2016-08-31"
         */
        createdStartDate?: string;
        /**
         * End date of the search (value date).
         * @format date
         * @example "2016-08-31"
         */
        createdEndDate?: string;
        /**
         * Type of error message.
         * @example "PAYMENT_ERROR"
         */
        type?: "PAYMENT_ERROR" | "NETS_COLLECTION_ERROR";
        /**
         * Handling status of error message.
         * @example "UNHANDLED"
         */
        status?: "ALL" | "UNHANDLED" | "HANDLED";
        /**
         * Previous error message ID for pagination.
         * @format int32
         * @example 123456
         */
        previousId?: number;
        /**
         * Order the results by message ID.
         * @example "ASC"
         */
        orderById?: "ASC" | "DESC";
        /**
         * Page size for the results. Maximum value: 200.
         * @format int32
         * @max 200
         * @default 50
         * @example 20
         */
        size?: number;
        /**
         * Page number for the results
         * @format int32
         * @default 0
         * @example 2
         */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaymentErrorMessageSearchResult, ErrorMessages>({
        path: `/payments/errormessages`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Getting direct salary payments by given payment list id.
     *
     * @tags Payments
     * @name GetDirectSalaryPaymentsByPaymentListId
     * @summary Get direct salary payments by payment list id. Supports only Finnish environments.
     * @request GET:/payments/directsalarypayments/{paymentListId}
     * @secure
     * @response `200` `DirectSalaryPaymentGroup` Direct salary payments list with specified payment list id returned successfully.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Direct salary payments list with given payment list id not found.
     */
    getDirectSalaryPaymentsByPaymentListId: (paymentListId: number, params: RequestParams = {}) =>
      this.request<DirectSalaryPaymentGroup, ErrorMessages>({
        path: `/payments/directsalarypayments/${paymentListId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  ledgerreceipts = {
    /**
     * @description Returns the requested ledger receipt. Also accepts multiple comma-separated ids. Max 200 ids per request.Supported ledger receipt types are journals, sales invoice ledger receipts, travel invoice ledger receipts, expense invoice ledger receipts, purchase ledger invoice receipts, VAT form ledger receipts, salary ledger receipts, employer contribution ledger receipts, purchase order ledger receipts, sales order ledger receipts, bank statement as a receipt ledger receipts, receipt for opening the accounts ledger receipts, reference payment ledger receipts, tracking period opening receipt ledger receipts, self-assessed tax ledger receipts and VAT summary ledger receipts.
     *
     * @tags Ledger receipts
     * @name GetLedgerReceipt
     * @summary Get a ledger receipt.
     * @request GET:/ledgerreceipts/{receiptId}
     * @secure
     * @response `200` `LedgerReceipt` Ledger receipt was successfully returned.
     * @response `404` `ErrorMessages` Ledger receipt not found.
     */
    getLedgerReceipt: (receiptId: string, params: RequestParams = {}) =>
      this.request<LedgerReceipt, ErrorMessages>({
        path: `/ledgerreceipts/${receiptId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Supported ledger receipt types are journals, sales invoice ledger receipts, travel invoice ledger receipts, expense invoice ledger receipts and purchase ledger invoice receipts. For defining the ledger accounts, dimensions, VAT status or other accounting information for an invoice, use this endpoint.Use "createReconciliation=true" parameter to generate reconciliation row automatically. See Transaction model for more details
     *
     * @tags Ledger receipts
     * @name UpdateLedgerReceipt
     * @summary Update a ledger receipt.
     * @request PUT:/ledgerreceipts/{receiptId}
     * @secure
     * @response `200` `LedgerReceipt` Ledger receipt was successfully updated.
     * @response `400` `ErrorMessages` Ledger receipt contains invalid data.
     * @response `404` `ErrorMessages` Ledger receipt could not be updated.
     */
    updateLedgerReceipt: (
      receiptId: number,
      data: LedgerReceipt,
      query?: {
        /**
         * Enable automatic generation of reconciliation row
         * @default false
         */
        createReconciliation?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<LedgerReceipt, ErrorMessages>({
        path: `/ledgerreceipts/${receiptId}`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Receipt can be set as unfinished only if it's fiscal year and it's accounting period are open. Supported receipt types: JOURNAL.
     *
     * @tags Ledger receipts
     * @name MarkLedgerReceiptAsUnfinished
     * @summary Set specified receipt to unfinished state.
     * @request PUT:/ledgerreceipts/{receiptId}/unfinished
     * @secure
     * @response `200` `InfoMessage` The receipt was successfully marked as unfinished.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights or receipt in closed fiscal year.
     * @response `404` `ErrorMessages` Receipt not found.
     */
    markLedgerReceiptAsUnfinished: (receiptId: number, params: RequestParams = {}) =>
      this.request<InfoMessage, ErrorMessages>({
        path: `/ledgerreceipts/${receiptId}/unfinished`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Receipt can be invalidated only if it's fiscal year and it's accounting period are open. Supported receipt types: JOURNAL.
     *
     * @tags Ledger receipts
     * @name MarkLedgerReceiptAsInvalidated
     * @summary Invalidate specified receipt
     * @request PUT:/ledgerreceipts/{receiptId}/invalidate
     * @secure
     * @response `200` `InfoMessage` The receipt was successfully invalidated.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights or receipt in closed fiscal year.
     * @response `404` `ErrorMessages` Receipt not found.
     */
    markLedgerReceiptAsInvalidated: (receiptId: number, params: RequestParams = {}) =>
      this.request<InfoMessage, ErrorMessages>({
        path: `/ledgerreceipts/${receiptId}/invalidate`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Receipt can be set as approved only if it's status is UNFINISHED. Supported receipt types: JOURNAL.
     *
     * @tags Ledger receipts
     * @name ApproveInvoice
     * @summary Approve a ledger receipt.
     * @request PUT:/ledgerreceipts/{receiptId}/approve
     * @secure
     * @response `200` `InfoMessage` The receipt was successfully marked as approved.
     * @response `403` `ErrorMessages` Insufficient user rights or invalid receipt status.
     * @response `404` `ErrorMessages` Receipt not found.
     */
    approveInvoice: (receiptId: number, params: RequestParams = {}) =>
      this.request<InfoMessage, ErrorMessages>({
        path: `/ledgerreceipts/${receiptId}/approve`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Search ledger receipts. Returns a list containing basic information for the receipts. The receiptID in each result entry can be used to fetch complete receipt details with the GET /ledgerereceipts/{receiptId} endpoint. Supported ledger receipt types are journals, sales invoice ledger receipts, travel invoice ledger receipts, expense invoice ledger receipts, purchase ledger invoice receipts, VAT form ledger receipts, salary ledger receipts, employer contribution ledger receipts, purchase order ledger receipts, sales order ledger receipts, bank statement as a receipt ledger receipts, receipt for opening the accounts ledger receipts, reference payment ledger receipts, tracking period opening receipt ledger receipts, self-assessed tax ledger receipts and VAT summary ledger receipts.
     *
     * @tags Ledger receipts
     * @name SearchLedgerReceipt
     * @summary Search ledger receipts.
     * @request GET:/ledgerreceipts
     * @secure
     * @response `200` `LedgerReceiptSearchResult` Ledger receipts were successfully found.
     * @response `400` `ErrorMessages` Request contains invalid data.
     */
    searchLedgerReceipt: (
      query?: {
        /**
         * Start date of the search (ledger receipt date)
         * @format date
         * @example "2016-08-31"
         */
        startDate?: string;
        /**
         * End date of the search (ledger receipt date)
         * @format date
         * @example "2016-08-31"
         */
        endDate?: string;
        /**
         * Start date of the search (ledger created date)
         * @format date-time
         * @example "2016-08-31T00:00:00"
         */
        createdStartDate?: string;
        /**
         * End date of the search (ledger created date)
         * @format date-time
         * @example "2016-12-31T00:00:00"
         */
        createdEndDate?: string;
        /**
         * Start date of the search (ledger updated date)
         * @format date-time
         * @example "2016-08-31T00:00:00"
         */
        versionStartDate?: string;
        /**
         * End date of the search (ledger updated date)
         * @format date-time
         * @example "2016-12-31T00:00:00"
         */
        versionEndDate?: string;
        /**
         * Ledger receipt types
         * @example "JOURNAL"
         */
        types?: (
          | "JOURNAL"
          | "PURCHASE_INVOICE"
          | "SALES_INVOICE"
          | "PERIODIC_TAX_RETURN"
          | "TRAVEL_INVOICE"
          | "BILL_OF_CHARGES"
          | "VAT_FORM"
          | "SALARY"
          | "EMPLOYER_CONTRIBUTION"
          | "PURCHASE_ORDER"
          | "SALES_ORDER"
          | "BANK_STATEMENT_AS_RECEIPT"
          | "RECEIPT_FOR_OPENING_ACCOUNTS"
          | "REFERENCE_PAYMENT"
          | "TRACKING_PERIOD_OPENING_RECEIPT"
        )[];
        /**
         * Previous Id for pagination
         * @format int32
         * @example 123456
         */
        previousId?: number;
        /**
         * Order the results by ledger receipt ID
         * @default "DESC"
         * @example "ASC"
         */
        orderById?: "ASC" | "DESC";
        /**
         * Order the results by date
         * @default "DESC"
         * @example "ASC"
         */
        orderByDate?: "ASC" | "DESC";
        /**
         * Order the results by created date
         * @default "DESC"
         * @example "ASC"
         */
        orderByCreated?: "ASC" | "DESC";
        /**
         * Order the results by version (updated date)
         * @default "DESC"
         * @example "ASC"
         */
        orderByVersion?: "ASC" | "DESC";
        /**
         * Page size for the results. Maximum value: 200.
         * @format int32
         * @max 200
         * @default 50
         * @example 20
         */
        size?: number;
        /**
         * Page number for the results
         * @format int32
         * @default 0
         * @example 2
         */
        page?: number;
        /**
         * Ledger receipt status
         * @example "UNFINISHED"
         */
        status?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<LedgerReceiptSearchResult, ErrorMessages>({
        path: `/ledgerreceipts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint to create a new ledger receipt. Supports journal type ledger receipts. Use "createReconciliation=true" parameter to generate reconciliation row automatically. See Transaction model for more details
     *
     * @tags Ledger receipts
     * @name SaveLedgerReceipt
     * @summary Create a new ledger receipt.
     * @request POST:/ledgerreceipts
     * @secure
     * @response `200` `LedgerReceipt` Ledger receipt was successfully saved.
     * @response `400` `ErrorMessages` Ledger receipt contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Ledger receipt could not be saved.
     */
    saveLedgerReceipt: (
      data: LedgerReceipt,
      query?: {
        /**
         * Enable automatic generation of reconciliation row
         * @default false
         */
        createReconciliation?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<LedgerReceipt, ErrorMessages>({
        path: `/ledgerreceipts`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  invoices = {
    /**
     * @description Confirm to make an action related to the given identifier.
     *
     * @tags Invoices
     * @name Confirm3
     * @summary Confirmation of action with the given identifier.
     * @request PUT:/invoices/{transactionIdentifier}/confirm
     * @secure
     * @response `200` `InfoMessage` Action performed successfully.
     * @response `202` `InfoMessage` Transaction not confirmed yet.
     * @response `403` `ErrorMessages` Transaction not belong to the user, insufficient payment user rights or payment in a wrong status.
     * @response `404` `ErrorMessages` Element not found or request contains invalid data.
     * @response `406` `ErrorMessages` Transaction rejected.
     * @response `408` `ErrorMessages` Transaction expired.
     * @response `409` `ErrorMessages` Transaction already processed.
     */
    confirm3: (transactionIdentifier: string, params: RequestParams = {}) =>
      this.request<InfoMessage, ErrorMessages>({
        path: `/invoices/${transactionIdentifier}/confirm`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the requested invoice. Also accepts multiple comma-separated ids. Max 200 ids per request.Supports expense (bill of charges), purchase, purchase order, sales, sales order, self-assessed tax and travel invoices.
     *
     * @tags Invoices
     * @name GetInvoice
     * @summary Get an invoice.
     * @request GET:/invoices/{invoiceId}
     * @secure
     * @response `200` `Invoice` The invoice was successfully returned.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Invoice not found.
     */
    getInvoice: (invoiceId: string, params: RequestParams = {}) =>
      this.request<Invoice, ErrorMessages>({
        path: `/invoices/${invoiceId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Supports sales and sales order invoices in unfinished state, and expense claim, purchase, purchase order and travel invoices in unfinished and received states. Note that modifying invoice tax, discount, currency, accounting or row information can cause the adjoined ledger receipt to be recreated with a new ID. <br/><br/> The `version` field is also required for this endpoint.
     *
     * @tags Invoices
     * @name UpdateInvoice
     * @summary Update an invoice.
     * @request PUT:/invoices/{invoiceId}
     * @secure
     * @response `200` `Invoice` The invoice was successfully updated.
     * @response `400` `ErrorMessages` Invoice contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Invoice to update not found.
     */
    updateInvoice: (invoiceId: number, data: Invoice, params: RequestParams = {}) =>
      this.request<Invoice, ErrorMessages>({
        path: `/invoices/${invoiceId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Supports purchase, travel and expense invoices. Configure invoice circulation settings in the Procountor environment before using this.
     *
     * @tags Invoices
     * @name VerifyInvoice
     * @summary Verify an invoice.
     * @request PUT:/invoices/{invoiceId}/verify
     * @secure
     * @response `200` `InfoMessage` The invoice was successfully verified.
     * @response `403` `ErrorMessages` Insufficient user rights or invalid invoice status.
     * @response `404` `ErrorMessages` Invoice not found.
     */
    verifyInvoice: (invoiceId: number, data: CheckingEvent, params: RequestParams = {}) =>
      this.request<InfoMessage, ErrorMessages>({
        path: `/invoices/${invoiceId}/verify`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Invoice can be set as unfinished only if it's fiscal year and it's accounting period are open. Supported invoice types: BILL_OF_CHARGES, PURCHASE_INVOICE, SALES_INVOICE, TRAVEL_INVOICE.
     *
     * @tags Invoices
     * @name MarkInvoiceAsUnfinished
     * @summary Set specified invoice to unfinished state.
     * @request PUT:/invoices/{invoiceId}/unfinished
     * @secure
     * @response `200` `InfoMessage` The invoice was successfully marked as unfinished.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights or invoice in closed fiscal year.
     * @response `404` `ErrorMessages` Invoice not found.
     */
    markInvoiceAsUnfinished: (invoiceId: number, params: RequestParams = {}) =>
      this.request<InfoMessage, ErrorMessages>({
        path: `/invoices/${invoiceId}/unfinished`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Supports sales invoices. Only invoices with status as 'NOT_SENT' and 'SENT' can be send.
     *
     * @tags Invoices
     * @name Send
     * @summary Send a sales invoice to customer.
     * @request PUT:/invoices/{invoiceId}/send
     * @secure
     * @response `200` `InfoMessage` Request to send the invoice processed correctly.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights, invalid invoice status or not supported invoice type.
     * @response `404` `ErrorMessages` Invoice not found.
     */
    send: (invoiceId: number, params: RequestParams = {}) =>
      this.request<InfoMessage, ErrorMessages>({
        path: `/invoices/${invoiceId}/send`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Supports travel, expense and purchase invoices. Invoice circulation needs to be configured and enabled in Procountor settings. For travel and expanse invoices it marks invoice status as 'RECEIVED' when it is in 'UNFINISHED' status.
     *
     * @tags Invoices
     * @name SendToCirculation
     * @summary Send an invoice to circulation.
     * @request PUT:/invoices/{invoiceId}/sendToCirculation
     * @secure
     * @response `200` `InfoMessage` The invoice was successfully send to circulation.
     * @response `403` `ErrorMessages` Insufficient user rights, invalid invoice status or empty list of approvers when invoice circulation is enabled.
     * @response `404` `ErrorMessages` Invoice not found or the user has no rights to view invoices.
     */
    sendToCirculation: (invoiceId: number, params: RequestParams = {}) =>
      this.request<InfoMessage, ErrorMessages>({
        path: `/invoices/${invoiceId}/sendToCirculation`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Invoice can be set as rejected only if it's fiscal year and it's accounting period are open. Supports purchase, sales, travel and expense (bill of charges) invoices.
     *
     * @tags Invoices
     * @name RejectInvoice
     * @summary Set specified invoice to rejected state / payment denied.
     * @request PUT:/invoices/{invoiceId}/reject
     * @secure
     * @response `200` `InfoMessage` The invoice was successfully rejected.
     * @response `403` `ErrorMessages` Invoice status cannot be changed.
     * @response `404` `ErrorMessages` Invoice not found or insufficient user rights.
     */
    rejectInvoice: (invoiceId: number, data: CheckingEvent, params: RequestParams = {}) =>
      this.request<InfoMessage, ErrorMessages>({
        path: `/invoices/${invoiceId}/reject`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Mark payment events as paid. Supported invoice types: SALES_INVOICE, PURCHASE_INVOICE, TRAVEL_INVOICE, SALARY, PERIODIC_TAX_RETURN, BILL_OF_CHARGES. Payment event should always be requested with an invoice currency. In case if currency on the invoice and in the environment are different, amount is converted to environment currency using currency rate from the invoice.
     *
     * @tags Invoices
     * @name MarkInvoiceAsPaid
     * @summary Mark as paid.
     * @request PUT:/invoices/{invoiceId}/paymentevents/markpaid
     * @secure
     * @response `200` `PaymentEvent` Request to mark invoice as paid processed correctly.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights or invoice in wrong status.
     * @response `404` `ErrorMessages` Invoice not found.
     */
    markInvoiceAsPaid: (
      invoiceId: number,
      data: MarkInvoiceAsPaid,
      query?: {
        /** Supported only for SALES_INVOICE type. Default is false. When marking the overdue sales invoice as paid, if you want to automatically include a penal expense in the business partner's next sales invoice, then call the endpoint with addPenalExpense=true. Automatic handling of collection and penal costs setting must be enabled prior to this and penal expense product must be already defined. */
        addPenalExpense?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaymentEvent, ErrorMessages>({
        path: `/invoices/${invoiceId}/paymentevents/markpaid`,
        method: "PUT",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description The notes of an invoice can be modified regardless of the invoice status. Supported invoice types: BILL_OF_CHARGES, PURCHASE_INVOICE, SALES_INVOICE, TRAVEL_INVOICE.
     *
     * @tags Invoices
     * @name AddNotesToInvoice
     * @summary Update notes for the specified invoice.
     * @request PUT:/invoices/{invoiceId}/notes
     * @secure
     * @response `200` `InfoMessage` The invoice notes were successfully updated.
     * @response `400` `ErrorMessages` Request contains invalid data or invoice type not supported.
     * @response `404` `ErrorMessages` Invoice not found or insufficient user rights.
     */
    addNotesToInvoice: (invoiceId: number, data: InvoiceNotes, params: RequestParams = {}) =>
      this.request<InfoMessage, ErrorMessages>({
        path: `/invoices/${invoiceId}/notes`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Invoice can be set as invalidated only if it's fiscal year and it's accounting period are open. Supported invoice types: BILL_OF_CHARGES, PURCHASE_INVOICE, SALES_INVOICE, TRAVEL_INVOICE.
     *
     * @tags Invoices
     * @name MarkInvoiceAsInvalidated
     * @summary Set specified invoice to invalidated state.
     * @request PUT:/invoices/{invoiceId}/invalidate
     * @secure
     * @response `200` `InfoMessage` The invoice was successfully marked as invalidated.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights or invoice in closed fiscal year.
     * @response `404` `ErrorMessages` Invoice not found.
     */
    markInvoiceAsInvalidated: (invoiceId: number, params: RequestParams = {}) =>
      this.request<InfoMessage, ErrorMessages>({
        path: `/invoices/${invoiceId}/invalidate`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Sets the invoice comment as read by current user. Supported invoice types are TRAVEL_INVOICE, BILL_OF_CHARGES and PURCHASE_INVOICE.
     *
     * @tags Invoices
     * @name SetCommentReadByUser
     * @summary Marks comment as read.
     * @request PUT:/invoices/{invoiceId}/comments/{commentId}/read
     * @secure
     * @response `200` `InfoMessage` Comment marked as read.
     * @response `400` `ErrorMessages` Only tagged user can mark comment as read.
     * @response `404` `ErrorMessages` Comment not found for invoice.
     */
    setCommentReadByUser: (invoiceId: number, commentId: number, params: RequestParams = {}) =>
      this.request<InfoMessage, ErrorMessages>({
        path: `/invoices/${invoiceId}/comments/${commentId}/read`,
        method: "PUT",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Supports purchase, travel, expense and sales invoices. Configure invoice circulation settings in the Procountor environment before using this. Note that for sales invoice comment will be ignored.
     *
     * @tags Invoices
     * @name ApproveInvoice1
     * @summary Approve an invoice.
     * @request PUT:/invoices/{invoiceId}/approve
     * @secure
     * @response `200` `InfoMessage` The invoice was successfully approved.
     * @response `403` `ErrorMessages` Insufficient user rights or invalid invoice status.
     * @response `404` `ErrorMessages` Invoice not found.
     */
    approveInvoice1: (invoiceId: number, data: CheckingEvent, params: RequestParams = {}) =>
      this.request<InfoMessage, ErrorMessages>({
        path: `/invoices/${invoiceId}/approve`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Search invoices. Returns a list containing basic information for the invoices. The ID in each result entry can be used to fetch complete invoice details with the GET /invoices/{invoiceId} endpoint. Supports purchase, purchase order, sales, sales order, self-assessed tax, travel and expense (bill of charges) invoices.
     *
     * @tags Invoices
     * @name SearchInvoice
     * @summary Search invoices.
     * @request GET:/invoices
     * @secure
     * @response `200` `InvoiceSearchResult` Invoices were successfully found.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Invoice not found.
     */
    searchInvoice: (
      query?: {
        /**
         * Invoice status
         * @example "UNFINISHED"
         */
        status?: (
          | "EMPTY"
          | "UNFINISHED"
          | "NOT_SENT"
          | "SENT"
          | "RECEIVED"
          | "PAID"
          | "PAYMENT_DENIED"
          | "VERIFIED"
          | "APPROVED"
          | "INVALIDATED"
          | "PAYMENT_QUEUED"
          | "PARTLY_PAID"
          | "PAYMENT_SENT_TO_BANK"
          | "MARKED_PAID"
          | "STARTED"
          | "INVOICED"
          | "OVERRIDDEN"
          | "DELETED"
          | "UNSAVED"
          | "PAYMENT_TRANSACTION_REMOVED"
        )[];
        /**
         * Start date of the search (invoice billing date)
         * @format date
         * @example "2016-08-31"
         */
        startDate?: string;
        /**
         * End date of the search (invoice billing date)
         * @format date
         * @example "2016-08-31"
         */
        endDate?: string;
        /**
         * Start date of the search (invoice created date)
         * @format date-time
         * @example "2016-08-31T00:00:00"
         */
        createdStartDate?: string;
        /**
         * End date of the search (invoice created date)
         * @format date-time
         * @example "2016-12-31T00:00:00"
         */
        createdEndDate?: string;
        /**
         * Start date of the search (invoice updated date)
         * @format date-time
         * @example "2016-08-31T00:00:00"
         */
        versionStartDate?: string;
        /**
         * End date of the search (invoice updated date)
         * @format date-time
         * @example "2016-12-31T00:00:00"
         */
        versionEndDate?: string;
        /**
         * Invoice types. Supports more than one invoice status, separated by comma
         * @example "SALES_INVOICE"
         */
        types?: (
          | "PERIODIC_TAX_RETURN"
          | "PURCHASE_INVOICE"
          | "PURCHASE_ORDER"
          | "SALES_INVOICE"
          | "SALES_ORDER"
          | "TRAVEL_INVOICE"
          | "BILL_OF_CHARGES"
        )[];
        /**
         * Search invoices with given business partner ID
         * @format int32
         * @example 123456
         */
        businessPartnerId?: number;
        /**
         * Search invoices with given factoring contract Id
         * @format int32
         * @example 123456
         */
        factoringContractId?: number;
        /**
         * Search invoices with given original invoice number
         * @example 123456
         */
        originalInvoiceNumber?: string;
        /**
         * Search invoices with given invoice number
         * @format int32
         * @example 123456
         */
        invoiceNumber?: number;
        /**
         * Previous invoice ID for pagination
         * @format int32
         * @example 123456
         */
        previousId?: number;
        /**
         * Order the results by invoice ID
         * @default "DESC"
         * @example "ASC"
         */
        orderById?: "ASC" | "DESC";
        /**
         * Order the results by date
         * @default "DESC"
         * @example "ASC"
         */
        orderByDate?: "ASC" | "DESC";
        /**
         * Order the results by created date
         * @default "DESC"
         * @example "ASC"
         */
        orderByCreated?: "ASC" | "DESC";
        /**
         * Order the results by version (updated date)
         * @default "DESC"
         * @example "ASC"
         */
        orderByVersion?: "ASC" | "DESC";
        /**
         * Page size for the results. Maximum value: 200.
         * @format int32
         * @max 200
         * @default 50
         * @example 20
         */
        size?: number;
        /**
         * Page number for the results
         * @format int32
         * @default 0
         * @example 2
         */
        page?: number;
        /**
         * Invoice channel
         * @example "EMAIL"
         */
        invoiceChannel?: ("EMAIL" | "MAIL" | "ELECTRONIC_INVOICE" | "EDIFACT" | "PAPER_INVOICE" | "NO_SENDING")[];
      },
      params: RequestParams = {},
    ) =>
      this.request<InvoiceSearchResult, ErrorMessages>({
        path: `/invoices`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Supports expense claim, purchase, sales, sales order, purchase order and travel invoices.
     *
     * @tags Invoices
     * @name SaveInvoice
     * @summary Create a new invoice.
     * @request POST:/invoices
     * @secure
     * @response `200` `Invoice` The invoice was successfully saved.
     * @response `400` `ErrorMessages` Invoice contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Invoice could not be saved.
     */
    saveInvoice: (
      data: Invoice,
      query?: {
        /** Supported only for SALES_INVOICE type. Default is false. If true, automatically adds the collection cost(s), if payment reminders were sent earlier to the business partner and/or penal cost, if the business partner had paid the earlier invoice late. These costs are added only if Automatic handling of collection and penal costs setting is enabled, and collection costs product and penal expense product have been defined. */
        addCollectionPenalCosts?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<Invoice, ErrorMessages>({
        path: `/invoices`,
        method: "POST",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns comments for the given invoice. Supported invoice types: TRAVEL_INVOICE, BILL_OF_CHARGES and PURCHASE_INVOICE.
     *
     * @tags Invoices
     * @name GetInvoiceComments
     * @summary Get invoice comments.
     * @request GET:/invoices/{invoiceId}/comments
     * @secure
     * @response `200` `Comments` The invoice was successfully returned.
     * @response `404` `ErrorMessages` Invoice could not be found.
     */
    getInvoiceComments: (
      invoiceId: number,
      query?: {
        /** If true, only those comments that have tagged users and comments have been read by all tagged users are returned. Comments without tagged users aren't returned. If false, only those comments that have tagged users but comments have not been read by all tagged users are returned. Comments without tagged users aren't returned. */
        readByAllTaggedUsers?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<Comments, ErrorMessages>({
        path: `/invoices/${invoiceId}/comments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Add comment to an invoice identified by id. Supported invoice types: TRAVEL_INVOICE, BILL_OF_CHARGES and PURCHASE_INVOICE
     *
     * @tags Invoices
     * @name SaveInvoiceComment
     * @summary Adds comment to invoice.
     * @request POST:/invoices/{invoiceId}/comments
     * @secure
     * @response `200` `Comment` Invoice was successfully commented.
     * @response `400` `ErrorMessages` Comment was not posted in a valid format.
     * @response `404` `ErrorMessages` Invoice could not be found.
     */
    saveInvoiceComment: (invoiceId: number, data: Comment, params: RequestParams = {}) =>
      this.request<Comment, ErrorMessages>({
        path: `/invoices/${invoiceId}/comments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the requested invoice transactions.
     *
     * @tags Invoices
     * @name GetInvoiceTransactions
     * @summary Get an invoice transactions.
     * @request GET:/invoices/{invoiceId}/transactions
     * @secure
     * @response `200` `InvoiceTransactions` The invoice transactions was successfully returned.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Invoice or invoice transactions not found.
     */
    getInvoiceTransactions: (invoiceId: number, params: RequestParams = {}) =>
      this.request<InvoiceTransactions, ErrorMessages>({
        path: `/invoices/${invoiceId}/transactions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns payment events for the requested invoice.
     *
     * @tags Invoices
     * @name SearchPaymentEvents
     * @summary Get payment events.
     * @request GET:/invoices/{invoiceId}/paymentevents
     * @secure
     * @response `200` `PaymentEventSearchResult` The payment events for the given invoice was successfully returned.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Invoice not found.
     */
    searchPaymentEvents: (
      invoiceId: number,
      query?: {
        /**
         * Previous invoice ID for pagination
         * @format int32
         * @example 123456
         */
        previousId?: number;
        /**
         * Order the results by invoice ID
         * @default "DESC"
         * @example "ASC"
         */
        orderById?: "ASC" | "DESC";
        /**
         * Page size for the results. Maximum value: 200.
         * @format int32
         * @max 200
         * @default 50
         * @example 20
         */
        size?: number;
        /**
         * Page number for the results
         * @format int32
         * @default 0
         * @example 2
         */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaymentEventSearchResult, ErrorMessages>({
        path: `/invoices/${invoiceId}/paymentevents`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns single payment event for given payment event id and invoice id.
     *
     * @tags Invoices
     * @name GetPaymentEventByIdAndInvoiceId
     * @summary Get payment event by specified payment event id and invoice id.
     * @request GET:/invoices/{invoiceId}/paymentevents/{paymentEventId}
     * @secure
     * @response `200` `PaymentEvent` The single payment event for the given invoice id and payment event id was successfully returned.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Payment event or invoice related to payment event not found.
     */
    getPaymentEventByIdAndInvoiceId: (invoiceId: number, paymentEventId: number, params: RequestParams = {}) =>
      this.request<PaymentEvent, ErrorMessages>({
        path: `/invoices/${invoiceId}/paymentevents/${paymentEventId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Remove a payment event which is not actually related to paying through the software i.e. with the status 'marked paid'. For other payments please use DELETE payments/{paymentId} endpoint.
     *
     * @tags Invoices
     * @name RemovePaymentEvent
     * @summary Remove a payment event.
     * @request DELETE:/invoices/{invoiceId}/paymentevents/{paymentEventId}
     * @secure
     * @response `202` `TransactionIdentifier` Request for confirmation of remove payment event sent successfully.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights or payment in a wrong status.
     * @response `404` `ErrorMessages` Payment not found or request contains invalid data.
     */
    removePaymentEvent: (invoiceId: number, paymentEventId: number, params: RequestParams = {}) =>
      this.request<TransactionIdentifier, ErrorMessages>({
        path: `/invoices/${invoiceId}/paymentevents/${paymentEventId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns an invoice page image based on given invoice ID and page number.
     *
     * @tags Invoices
     * @name GetInvoiceImage
     * @summary Get an invoice page image.
     * @request GET:/invoices/{invoiceId}/image
     * @secure
     * @response `200` `Attachment` The invoice image was successfully returned.
     * @response `404` `ErrorMessages` Invoice not found or invoice page image does not exist.
     */
    getInvoiceImage: (
      invoiceId: number,
      query?: {
        /**
         * The invoice page number.
         * @format int32
         * @default 1
         * @example 2
         */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<Attachment, ErrorMessages>({
        path: `/invoices/${invoiceId}/image`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the requested invoice comment. Supported invoice types: TRAVEL_INVOICE, BILL_OF_CHARGES and PURCHASE_INVOICE
     *
     * @tags Invoices
     * @name GetCommentById
     * @summary Get comment for given invoice and comment identifiers.
     * @request GET:/invoices/{invoiceId}/comments/{commentId}
     * @secure
     * @response `200` `CommentWithTaggedUsers` Comment were successfully returned.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `404` `ErrorMessages` Invoice or comment could not be found.
     */
    getCommentById: (invoiceId: number, commentId: number, params: RequestParams = {}) =>
      this.request<CommentWithTaggedUsers, ErrorMessages>({
        path: `/invoices/${invoiceId}/comments/${commentId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns users who can be tagged for the given invoice. Supported invoice types: TRAVEL_INVOICE, BILL_OF_CHARGES and PURCHASE_INVOICE
     *
     * @tags Invoices
     * @name GetTaggeableUsers
     * @summary Get list of users who can be tagged in given invoice.
     * @request GET:/invoices/{invoiceId}/comments/taggableusers
     * @secure
     * @response `200` `TaggableUsers` Taggable users were successfully returned.
     * @response `404` `ErrorMessages` Invoice could not be found.
     */
    getTaggeableUsers: (invoiceId: number, params: RequestParams = {}) =>
      this.request<TaggableUsers, ErrorMessages>({
        path: `/invoices/${invoiceId}/comments/taggableusers`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns list of invoice ids that are waiting for currently logged in user's verification (also if they are substitutes).
     *
     * @tags Invoices
     * @name GetInvoicesForPersonalVerifications
     * @summary Get list of ids of invoices which waiting for verification.
     * @request GET:/invoices/personalverifications
     * @secure
     * @response `200` `InvoiceIds` The invoice image was successfully returned.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     */
    getInvoicesForPersonalVerifications: (
      query: {
        /**
         * Invoice type.
         * @example "PURCHASE_INVOICE"
         */
        types: "PURCHASE_INVOICE" | "TRAVEL_INVOICE" | "BILL_OF_CHARGES";
      },
      params: RequestParams = {},
    ) =>
      this.request<InvoiceIds, ErrorMessages>({
        path: `/invoices/personalverifications`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns list of invoice ids that are waiting for currently logged in user's approval (also if they are substitutes).
     *
     * @tags Invoices
     * @name GetInvoicesForPersonalApprovals
     * @summary Get list of ids of invoices which waiting for approval.
     * @request GET:/invoices/personalapprovals
     * @secure
     * @response `200` `InvoiceIds` The invoice image was successfully returned.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     */
    getInvoicesForPersonalApprovals: (
      query: {
        /**
         * Invoice type.
         * @example "PURCHASE_INVOICE"
         */
        types: "PURCHASE_INVOICE" | "TRAVEL_INVOICE" | "BILL_OF_CHARGES";
      },
      params: RequestParams = {},
    ) =>
      this.request<InvoiceIds, ErrorMessages>({
        path: `/invoices/personalapprovals`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  fiscalyears = {
    /**
     * @description Currently, the only allowed operation is to change tracking period status from open to pending.
     *
     * @tags Fiscal years
     * @name UpdateFiscalYear
     * @summary Update fiscal years.
     * @request PUT:/fiscalyears/{fiscalYearId}/trackingPeriods/{trackingPeriodId}
     * @secure
     * @response `200` `InfoMessage` Fiscal period was successfully marked as pending.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Fiscal period not found.
     * @response `409` `ErrorMessages` The request could not be completed due to a conflict with the current state of the resource.
     */
    updateFiscalYear: (
      fiscalYearId: number,
      trackingPeriodId: number,
      data: TrackingPeriod,
      params: RequestParams = {},
    ) =>
      this.request<InfoMessage, ErrorMessages>({
        path: `/fiscalyears/${fiscalYearId}/trackingPeriods/${trackingPeriodId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Lists fiscal years ordered by their start date, from newest to oldest. Tracking periods, if exist, are in chronological order. Fiscal years can be edited on the Fiscal years page in Procountor.
     *
     * @tags Fiscal years
     * @name GetFiscalYears
     * @summary List fiscal years.
     * @request GET:/fiscalyears
     * @secure
     * @response `200` `FiscalYears` Fiscal years were successfully returned.
     */
    getFiscalYears: (params: RequestParams = {}) =>
      this.request<FiscalYears, any>({
        path: `/fiscalyears`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  dimensions = {
    /**
     * @description Returns a specified dimension with its dimension items.
     *
     * @tags Dimensions
     * @name GetDimension
     * @summary Get a dimension with dimension items.
     * @request GET:/dimensions/{dimensionId}
     * @secure
     * @response `200` `Dimension` Dimensions were successfully returned.
     * @response `404` `ErrorMessages` Dimension not found.
     */
    getDimension: (dimensionId: number, params: RequestParams = {}) =>
      this.request<Dimension, ErrorMessages>({
        path: `/dimensions/${dimensionId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint allows to update a dimension name
     *
     * @tags Dimensions
     * @name UpdateDimension
     * @summary Update dimension.
     * @request PUT:/dimensions/{dimensionId}
     * @secure
     * @response `200` `DimensionName` The dimension was successfully updated.
     * @response `400` `ErrorMessages` The dimension contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights
     * @response `404` `ErrorMessages` Dimension could not be found.
     */
    updateDimension: (dimensionId: number, data: DimensionName, params: RequestParams = {}) =>
      this.request<DimensionName, ErrorMessages>({
        path: `/dimensions/${dimensionId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint modifies an item for dimension identified by id.
     *
     * @tags Dimensions
     * @name UpdateDimensionItem
     * @summary Update item in dimension.
     * @request PUT:/dimensions/{dimensionId}/items
     * @secure
     * @response `200` `DimensionItem` The dimension was successfully updated.
     * @response `400` `ErrorMessages` The dimension item contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights
     * @response `404` `ErrorMessages` Dimension or dimension item could not be found.
     */
    updateDimensionItem: (dimensionId: number, data: DimensionItem, params: RequestParams = {}) =>
      this.request<DimensionItem, ErrorMessages>({
        path: `/dimensions/${dimensionId}/items`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint creates a new item for dimension identified by id.
     *
     * @tags Dimensions
     * @name AddDimensionItem
     * @summary Create a new item for dimension.
     * @request POST:/dimensions/{dimensionId}/items
     * @secure
     * @response `200` `DimensionItem` The dimension was successfully created.
     * @response `400` `ErrorMessages` The dimension item contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights
     * @response `404` `ErrorMessages` Dimension item could not be found.
     */
    addDimensionItem: (dimensionId: number, data: DimensionItem, params: RequestParams = {}) =>
      this.request<DimensionItem, ErrorMessages>({
        path: `/dimensions/${dimensionId}/items`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of all dimensions and dimension items for the current company. Dimensions can be set on the Dimensions page in Procountor.
     *
     * @tags Dimensions
     * @name GetDimensions
     * @summary Get all dimensions with dimension items.
     * @request GET:/dimensions
     * @secure
     * @response `200` `(Dimension)[]` Dimensions were successfully returned.
     */
    getDimensions: (
      query?: {
        /** Name of the dimension. Supports partial search. */
        name?: string;
        /** Name of the dimension item. Supports partial search. */
        codeName?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Dimension[], any>({
        path: `/dimensions`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  company = {
    /**
     * @description Returns basic information of the currently logged in company.
     *
     * @tags Company
     * @name GetCompanyInfo
     * @summary Get current company info.
     * @request GET:/company
     * @secure
     * @response `200` `Company` Company info was successfully returned.
     * @response `403` `ErrorMessages` No access right to company information.
     * @response `404` `ErrorMessages` Company info is not available.
     */
    getCompanyInfo: (params: RequestParams = {}) =>
      this.request<Company, ErrorMessages>({
        path: `/company`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates basic information of the current company.
     *
     * @tags Company
     * @name UpdateCompanyInfo
     * @summary Update a company info.
     * @request PUT:/company
     * @secure
     * @response `200` `InfoMessage` Company info was successfully updated.
     * @response `400` `ErrorMessages` Company info contains invalid data.
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights.
     * @response `404` `ErrorMessages` Company info is not available.
     */
    updateCompanyInfo: (data: Company, params: RequestParams = {}) =>
      this.request<InfoMessage, ErrorMessages>({
        path: `/company`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of invoice templates allowed in the environment.
     *
     * @tags Company
     * @name GetCompanyInvoiceTemplates
     * @summary Get invoice templates.
     * @request GET:/company/invoicetemplates
     * @secure
     * @response `200` `InvoiceTemplate` Invoice templates was successfully returned.
     * @response `403` `ErrorMessages` No access right to invoice templates.
     */
    getCompanyInvoiceTemplates: (params: RequestParams = {}) =>
      this.request<InvoiceTemplate, ErrorMessages>({
        path: `/company/invoicetemplates`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all verifiers lists.
     *
     * @tags Company
     * @name GetVerifierList
     * @summary Get all verifiers lists.
     * @request GET:/company/invoicecirculation/verifierlists
     * @secure
     * @response `200` `(VerifierListBasic)[]` Verifiers lists was successfully returned.
     * @response `403` `ErrorMessages` No access right to company information.
     */
    getVerifierList: (params: RequestParams = {}) =>
      this.request<VerifierListBasic[], ErrorMessages>({
        path: `/company/invoicecirculation/verifierlists`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns list of verifiers.
     *
     * @tags Company
     * @name GetVerifierList1
     * @summary Get list of verifiers.
     * @request GET:/company/invoicecirculation/verifierlists/{id}
     * @secure
     * @response `200` `VerifierList` List of verifiers was successfully returned.
     * @response `403` `ErrorMessages` No access right to company information.
     * @response `404` `ErrorMessages` Verifier list not found.
     */
    getVerifierList1: (id: number, params: RequestParams = {}) =>
      this.request<VerifierList, ErrorMessages>({
        path: `/company/invoicecirculation/verifierlists/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns invoice circulation settings.
     *
     * @tags Company
     * @name GetCompanyInvoiceCirculationSettings
     * @summary Get invoice circulation settings.
     * @request GET:/company/invoicecirculation/settings
     * @secure
     * @response `200` `CirculationSettings` Invoice circulation settings was successfully returned.
     * @response `403` `ErrorMessages` No access right to invoice circulation settings.
     */
    getCompanyInvoiceCirculationSettings: (params: RequestParams = {}) =>
      this.request<CirculationSettings, ErrorMessages>({
        path: `/company/invoicecirculation/settings`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns company collection and penal expenses settings.
     *
     * @tags Company
     * @name GetCompanyCollectionPenalExpensesSettings
     * @summary Get collection and penal expenses settings.
     * @request GET:/company/expenses/collectionpenal/settings
     * @secure
     * @response `200` `CollectionsAndPenalExpenses` Delivery methods was successfully returned.
     */
    getCompanyCollectionPenalExpensesSettings: (params: RequestParams = {}) =>
      this.request<CollectionsAndPenalExpenses, any>({
        path: `/company/expenses/collectionpenal/settings`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns company's electronic invoice addresses
     *
     * @tags Company
     * @name GetEInvoiceAddresses
     * @summary Get company's electronic invoice addresses
     * @request GET:/company/einvoiceaddresses
     * @secure
     * @response `200` `EInvoiceData` Electronic invoice addresses were successfully returned.
     */
    getEInvoiceAddresses: (params: RequestParams = {}) =>
      this.request<EInvoiceData, any>({
        path: `/company/einvoiceaddresses`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a list of delivery terms allowed in the environment.
     *
     * @tags Company
     * @name GetCompanyDeliveryTerms
     * @summary Get delivery terms.
     * @request GET:/company/deliveryterms
     * @secure
     * @response `200` `DeliveryTerms` Delivery methods was successfully returned.
     * @response `403` `ErrorMessages` No access right to delivery terms.
     */
    getCompanyDeliveryTerms: (params: RequestParams = {}) =>
      this.request<DeliveryTerms, ErrorMessages>({
        path: `/company/deliveryterms`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  businesspartners = {
    /**
     * @description Endpoint returns BusinessPartner for given id with all details. Also accepts multiple comma-separated ids. Max 200 ids per request.
     *
     * @tags Business partners
     * @name GetBusinessPartner
     * @summary Get a business partner.
     * @request GET:/businesspartners/{id}
     * @secure
     * @response `200` `BusinessPartner` The partner was successfully returned.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Partner not found.
     */
    getBusinessPartner: (id: string, params: RequestParams = {}) =>
      this.request<BusinessPartner, ErrorMessages>({
        path: `/businesspartners/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description PUT /businesspartners/<id> replaces all the details of an existing business partner. Use PATCH /businesspartners/<id> if you need the previous functionality to update values of specific fields only.
     *
     * @tags Business partners
     * @name PutBusinessPartner
     * @summary Update a business partner.
     * @request PUT:/businesspartners/{id}
     * @secure
     * @response `200` `BusinessPartner` Business partner was successfully updated.
     * @response `400` `ErrorMessages` Business partner contains invalid data.
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights.
     * @response `404` `ErrorMessages` No partner found for given id.
     */
    putBusinessPartner: (id: number, data: BusinessPartner, params: RequestParams = {}) =>
      this.request<BusinessPartner, ErrorMessages>({
        path: `/businesspartners/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Supported customer and supplier business partners. The fields that are supported are: id, name, type (CUSTOMER and SUPPLIER only), address (but NOT billing address nor delivery address), invoicing info and payment info. To update a partner, it's required to provide version, which is the last modification time. It can be provided as query param or in request body.
     *
     * @tags Business partners
     * @name UpdateBusinessPartner
     * @summary Update a business partner.
     * @request PATCH:/businesspartners/{id}
     * @secure
     * @response `200` `DataModel` Business partner was successfully updated.
     * @response `400` `ErrorMessages` Business partner contains invalid data.
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights.
     * @response `404` `ErrorMessages` No partner found for given id.
     */
    updateBusinessPartner: (
      id: number,
      data: BusinessPartner,
      query?: {
        /** Business partner last modification time. It is required if not filled in the request body. */
        version?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<DataModel, ErrorMessages>({
        path: `/businesspartners/${id}`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns default dimension for a business partner with the given partner and dimension ID.
     *
     * @tags Business partners
     * @name GetDefaultDimension
     * @summary Get default dimension of business partner.
     * @request GET:/businesspartners/{id}/defaults/dimensions/{dimensionId}
     * @secure
     * @response `200` `DefaultDimension` The partner default dimension was successfully returned.
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights.
     * @response `404` `ErrorMessages` No dimension found for given partner and dimension id.
     */
    getDefaultDimension: (id: number, dimensionId: number, params: RequestParams = {}) =>
      this.request<DefaultDimension, ErrorMessages>({
        path: `/businesspartners/${id}/defaults/dimensions/${dimensionId}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Updates default dimension for a business partner with the given partner and dimension ID.
     *
     * @tags Business partners
     * @name UpdateDefaultDimension1
     * @summary Update default dimension of business partner.
     * @request PUT:/businesspartners/{id}/defaults/dimensions/{dimensionId}
     * @secure
     * @response `200` `DefaultDimension` The partner default dimension was successfully updated.
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights.
     * @response `404` `ErrorMessages` No dimension found for given partner and dimension id.
     */
    updateDefaultDimension1: (id: number, dimensionId: number, data: DefaultDimension, params: RequestParams = {}) =>
      this.request<DefaultDimension, ErrorMessages>({
        path: `/businesspartners/${id}/defaults/dimensions/${dimensionId}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns business partner group with requested group ID.
     *
     * @tags Business partners
     * @name GetPartnerGroup
     * @summary Get business partners group.
     * @request GET:/businesspartners/groups/{id}
     * @secure
     * @response `200` `BusinessPartnerGroup` Business partner group were successfully returned.
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights.
     * @response `404` `ErrorMessages` Partner group not found.
     */
    getPartnerGroup: (id: number, params: RequestParams = {}) =>
      this.request<BusinessPartnerGroup, ErrorMessages>({
        path: `/businesspartners/groups/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Update a business partner group data.
     *
     * @tags Business partners
     * @name UpdateBusinessPartnerGroup
     * @summary Update a business partner group.
     * @request PUT:/businesspartners/groups/{id}
     * @secure
     * @response `200` `BusinessPartnerGroup` Business partner group was successfully updated.
     * @response `400` `ErrorMessages` Business partner group contains invalid data.
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights.
     * @response `404` `ErrorMessages` No business partner group found for given id.
     */
    updateBusinessPartnerGroup: (id: number, data: BusinessPartnerGroup, params: RequestParams = {}) =>
      this.request<BusinessPartnerGroup, ErrorMessages>({
        path: `/businesspartners/groups/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns basic information: register id, name, billing address, id, customer no, partner type, active/inactive. This endpoint supports name and identifier parameters in HTTP header.
     *
     * @tags Business partners
     * @name SearchBusinessPartners
     * @summary Finds business partners matching search criteria.
     * @request GET:/businesspartners
     * @secure
     * @response `200` `BusinessPartnerSearchResult` Invoices were successfully found.
     * @response `400` `ErrorMessages` Request contains invalid data.
     */
    searchBusinessPartners: (
      query?: {
        /**
         * Business identifier type of the partner
         * @example "FN"
         */
        identifierType?: string;
        /**
         * Customer number
         * @example 100015
         */
        customerNumber?: string;
        /**
         * Main group
         * @example "Main"
         */
        mainGroup?: string;
        /**
         * Business Partner Group
         * @example "Export/Import"
         */
        partnerGroup?: string;
        /**
         * Type of business partner
         * @example "CUSTOMER"
         */
        type?: "CUSTOMER" | "SUPPLIER" | "PERSON";
        /**
         * Order the results by invoice ID
         * @default "DESC"
         * @example "ASC"
         */
        orderById?: "ASC" | "DESC";
        /**
         * Previous invoice ID for pagination
         * @format int32
         * @example 123456
         */
        previousId?: number;
        /**
         * Status of business partner
         * @default true
         */
        active?: boolean;
        /**
         * Start date of the search (business partner updated date)
         * @format date-time
         * @example "2016-08-31T00:00"
         */
        versionStartDate?: string;
        /**
         * End date of the search (business partner updated date)
         * @format date-time
         * @example "2016-12-31T00:00"
         */
        versionEndDate?: string;
        /**
         * Page size for the results. Maximum value: 200.
         * @format int32
         * @max 200
         * @default 50
         * @example 20
         */
        size?: number;
        /**
         * Page number for the results
         * @format int32
         * @default 0
         * @example 2
         */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BusinessPartnerSearchResult, ErrorMessages>({
        path: `/businesspartners`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Supports customer and supplier business partners.
     *
     * @tags Business partners
     * @name InsertBusinessPartner
     * @summary Add a business partner.
     * @request POST:/businesspartners
     * @secure
     * @response `200` `BusinessPartner` Business partner was successfully added.
     * @response `400` `ErrorMessages` Business partner contains invalid data.
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights.
     */
    insertBusinessPartner: (data: BusinessPartner, params: RequestParams = {}) =>
      this.request<BusinessPartner, ErrorMessages>({
        path: `/businesspartners`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns business partner groups ordered by group ID.
     *
     * @tags Business partners
     * @name GetPartnerGroups
     * @summary Finds business partners groups matching search criteria.
     * @request GET:/businesspartners/groups
     * @secure
     * @response `200` `BusinessPartnerGroupSearchResult` Business partner groups were successfully returned.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights.
     */
    getPartnerGroups: (
      query?: {
        /**
         * Business partner group name. Uses substring matching.
         * @example "Test group"
         */
        name?: string;
        /**
         * Business partner group type.
         * @example "CUSTOMER"
         */
        type?: "CUSTOMER" | "SUPPLIER" | "PERSON";
        /** Status of business partner group. */
        active?: boolean;
        /**
         * Page size for the results. Maximum value: 200.
         * @format int32
         * @max 200
         * @default 50
         * @example 20
         */
        size?: number;
        /**
         * Page number for the results
         * @format int32
         * @default 0
         * @example 2
         */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BusinessPartnerGroupSearchResult, ErrorMessages>({
        path: `/businesspartners/groups`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new business partner group with given data.
     *
     * @tags Business partners
     * @name CreateBusinessPartnerGroup
     * @summary Create a new business partner group.
     * @request POST:/businesspartners/groups
     * @secure
     * @response `200` `BusinessPartnerGroup` Business partner group was successfully created.
     * @response `400` `ErrorMessages` Business partner group contains invalid data.
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights.
     */
    createBusinessPartnerGroup: (data: BusinessPartnerGroup, params: RequestParams = {}) =>
      this.request<BusinessPartnerGroup, ErrorMessages>({
        path: `/businesspartners/groups`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint returns default products for given business partner id with all details.
     *
     * @tags Business partners
     * @name GetDefaultProducts
     * @summary Get a business partner default products.
     * @request GET:/businesspartners/{id}/defaults/products
     * @secure
     * @response `200` `(DefaultProduct)[]` The partner was successfully returned.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` No partner found for given id.
     */
    getDefaultProducts: (id: number, params: RequestParams = {}) =>
      this.request<DefaultProduct[], ErrorMessages>({
        path: `/businesspartners/${id}/defaults/products`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns default dimensions for a business partner with the given ID.
     *
     * @tags Business partners
     * @name GetDefaultDimensions
     * @summary Get default dimensions of business partner.
     * @request GET:/businesspartners/{id}/defaults/dimensions
     * @secure
     * @response `200` `(DefaultDimensionBasicData)[]` The partner default dimensions was successfully returned.
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights.
     */
    getDefaultDimensions: (id: number, params: RequestParams = {}) =>
      this.request<DefaultDimensionBasicData[], ErrorMessages>({
        path: `/businesspartners/${id}/defaults/dimensions`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns default accounts for a business partner with the given ID with vat information. Default accounts are not available for business partner type 'PERSON'
     *
     * @tags Business partners
     * @name GetDefaultAccounts
     * @summary Get default accounts of business partner.
     * @request GET:/businesspartners/{id}/defaults/accounts
     * @secure
     * @response `200` `BusinessPartnerDefaultAccounts` Default accounts were successfully returned.
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights.
     * @response `404` `ErrorMessages` No partner found for given id or partner type is 'PERSON'.
     */
    getDefaultAccounts: (id: number, params: RequestParams = {}) =>
      this.request<BusinessPartnerDefaultAccounts, ErrorMessages>({
        path: `/businesspartners/${id}/defaults/accounts`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns basic information from the person register for the currently logged in user. Includes eg. name, address, invoicing information and payment information. For more information, you can call GET /persons/{id}
     *
     * @tags Business partners
     * @name GetPersonalDetails
     * @summary Get person details for the current user.
     * @request GET:/businesspartners/personaldetails
     * @secure
     * @response `200` `PersonalDetails` Person details were successfully returned.
     * @response `404` `ErrorMessages` Person not found.
     */
    getPersonalDetails: (params: RequestParams = {}) =>
      this.request<PersonalDetails, ErrorMessages>({
        path: `/businesspartners/personaldetails`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  bankstatements = {
    /**
     * @description Using this endpoint you can update already assigned product to the bank statement event by sending bank statement identifier, event identifier and new product identifier.
     *
     * @tags Bank statements
     * @name AllocateProductToEvent
     * @summary Allocate a product to a bank statement event.
     * @request PUT:/bankstatements/{statementId}/events/{eventId}/products
     * @secure
     * @response `200` `InfoMessage` Product allocated to an event successfully.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Product, event or statement not found.
     */
    allocateProductToEvent: (statementId: number, eventId: number, data: number, params: RequestParams = {}) =>
      this.request<InfoMessage, ErrorMessages>({
        path: `/bankstatements/${statementId}/events/${eventId}/products`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint can be used to remove already allocated product from the event by sending bank statement identifier, event identifier and new product identifier.
     *
     * @tags Bank statements
     * @name DeleteProductAllocationFromEvent
     * @summary Delete allocation of a product from a bank statement event.
     * @request DELETE:/bankstatements/{statementId}/events/{eventId}/products
     * @secure
     * @response `204` `void` Product unallocated successfully.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Event or statement not found.
     */
    deleteProductAllocationFromEvent: (statementId: number, eventId: number, params: RequestParams = {}) =>
      this.request<void, ErrorMessages>({
        path: `/bankstatements/${statementId}/events/${eventId}/products`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank statements
     * @name AllocateAllocationMetadata1
     * @summary Allocate metadata to a bank statement event.
     * @request PUT:/bankstatements/{statementId}/events/{eventId}/metadata
     * @secure
     * @response `200` `InfoMessage` Metadata allocated successfully
     * @response `400` `ErrorMessages` Metadata contains invalid data.
     * @response `404` `InfoMessage` Bank statement not found
     */
    allocateAllocationMetadata1: (
      statementId: number,
      eventId: number,
      data: AllocationMetadata,
      params: RequestParams = {},
    ) =>
      this.request<InfoMessage, ErrorMessages | InfoMessage>({
        path: `/bankstatements/${statementId}/events/${eventId}/metadata`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Bank statements
     * @name DeleteAllocationMetadata1
     * @summary Delete the metadata for a bank statement event.
     * @request DELETE:/bankstatements/{statementId}/events/{eventId}/metadata
     * @secure
     * @response `204` `DataModel` Metadata deleted successfully
     * @response `404` `ErrorMessages` Bank statement event payment not found
     */
    deleteAllocationMetadata1: (statementId: number, eventId: number, params: RequestParams = {}) =>
      this.request<DataModel, ErrorMessages>({
        path: `/bankstatements/${statementId}/events/${eventId}/metadata`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns all bank statements that match the request criteria. Each BankStatementEvent can have a list of child events. In that case, the event model contains an additional "event" property with an array of BankStatementEvents as its value. This endpoint supports accountNumber parameter in HTTP header.
     *
     * @tags Bank statements
     * @name GetBankStatements
     * @summary Get bank statements.
     * @request GET:/bankstatements
     * @secure
     * @response `200` `BankStatementsSearchResult` The bank statements were successfully returned.
     * @response `400` `ErrorMessages` Request contains invalid data.
     */
    getBankStatements: (
      query?: {
        /**
         * Start date of the search (invoice billing date)
         * @format date
         * @example "2016-08-31"
         */
        startDate?: string;
        /**
         * End date of the search (invoice billing date)
         * @format date
         * @example "2016-08-31"
         */
        endDate?: string;
        /**
         * Previous invoice ID for pagination
         * @format int32
         * @example 123456
         */
        previousId?: number;
        /**
         * Order the results by invoice ID
         * @example "ASC"
         */
        orderById?: "ASC" | "DESC";
        /**
         * Order the results by start date
         * @default "DESC"
         * @example "ASC"
         */
        orderByStartDate?: "ASC" | "DESC";
        /**
         * Page size for the results. Maximum value: 200.
         * @format int32
         * @max 200
         * @default 50
         * @example 20
         */
        size?: number;
        /**
         * Page number for the results
         * @format int32
         * @default 0
         * @example 2
         */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<BankStatementsSearchResult, ErrorMessages>({
        path: `/bankstatements`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  bankaccounts = {
    /**
     * @description This endpoint returns detailed information about the bank account with given id.
     *
     * @tags Bank accounts
     * @name GetBankAccount
     * @summary Get the bank account information.
     * @request GET:/bankaccounts/{id}
     * @secure
     * @response `200` `CompanyBankAccount` The bank account was successfully returned.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Bank account not found.
     */
    getBankAccount: (id: number, params: RequestParams = {}) =>
      this.request<CompanyBankAccount, ErrorMessages>({
        path: `/bankaccounts/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for updating company bank account. Returns updated bank information.
     *
     * @tags Bank accounts
     * @name UpdateBankAccount
     * @summary Update company bank account.
     * @request PUT:/bankaccounts/{id}
     * @secure
     * @response `200` `CompanyBankAccount` The bank account was successfully updated.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Bank account not found.
     * @response `409` `ErrorMessages` Bank account already in use.
     */
    updateBankAccount: (id: number, data: CompanyBankAccount, params: RequestParams = {}) =>
      this.request<CompanyBankAccount, ErrorMessages>({
        path: `/bankaccounts/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the list of bank accounts for the current environment. This endpoint can be used for getting the data based on certain search criteria.
     *
     * @tags Bank accounts
     * @name GetBankAccounts
     * @summary Get the bank accounts.
     * @request GET:/bankaccounts
     * @secure
     * @response `200` `CompanyBankAccountSearchResult` The bank accounts was successfully returned.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` The given previousId is not identifier of existing bank account.
     */
    getBankAccounts: (
      query?: {
        /**
         * Previous bank account ID for pagination. If this field is set and results are ordered by order number, value has to an identifier of existing bank account in the given company.
         * @format int32
         * @example 123456
         */
        previousId?: number;
        /**
         * Order the results by bank account ID
         * @example "ASC"
         */
        orderById?: "ASC" | "DESC";
        /**
         * Order the results by bank account order number
         * @default "ASC"
         * @example "ASC"
         */
        orderByOrderNo?: "ASC" | "DESC";
        /**
         * Page size for the results. Maximum value: 200.
         * @format int32
         * @max 200
         * @default 50
         * @example 20
         */
        size?: number;
        /**
         * Page number for the results
         * @format int32
         * @default 0
         * @example 2
         */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CompanyBankAccountSearchResult, ErrorMessages>({
        path: `/bankaccounts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Endpoint for creating new company bank account. Returns created bank information.
     *
     * @tags Bank accounts
     * @name CreateBankAccount
     * @summary Create new company bank account.
     * @request POST:/bankaccounts
     * @secure
     * @response `200` `CompanyBankAccount` The bank account was successfully created.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `409` `ErrorMessages` Bank account already in use.
     */
    createBankAccount: (data: CompanyBankAccount, params: RequestParams = {}) =>
      this.request<CompanyBankAccount, ErrorMessages>({
        path: `/bankaccounts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  reports = {
    /**
     * @description Returns a report generated on the basis of the given parameters.
     *
     * @tags Reports
     * @name GetLedgerAccountsReport
     * @summary Get ledger accounts report.
     * @request POST:/reports/ledgeraccounts
     * @secure
     * @response `200` `LedgerAccountsReportResponse` Report successfully returned.
     * @response `400` `ErrorMessages` Request contains invalid data
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights
     */
    getLedgerAccountsReport: (data: LedgerAccountsReportRequest, params: RequestParams = {}) =>
      this.request<LedgerAccountsReportResponse, ErrorMessages>({
        path: `/reports/ledgeraccounts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a report generated on the basis of the given parameters.
     *
     * @tags Reports
     * @name GetGeneralLedgerReport
     * @summary Get general ledger report.
     * @request POST:/reports/generalledger/{id}
     * @secure
     * @response `200` `GeneralLedgerReportResponse` Report successfully returned.
     * @response `400` `ErrorMessages` Request contains invalid data
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights
     */
    getGeneralLedgerReport: (id: number, data: GeneralLedgerReportRequest, params: RequestParams = {}) =>
      this.request<GeneralLedgerReportResponse, ErrorMessages>({
        path: `/reports/generalledger/${id}`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns a report generated on the basis of the given parameters.
     *
     * @tags Reports
     * @name GetAccountingReport
     * @summary Get accounting reports.
     * @request POST:/reports/accounting
     * @secure
     * @response `200` `AccountingReportResponse` Report successfully returned.
     * @response `400` `ErrorMessages` Request contains invalid data
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights
     */
    getAccountingReport: (data: AccountingReportRequest, params: RequestParams = {}) =>
      this.request<AccountingReportResponse, ErrorMessages>({
        path: `/reports/accounting`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  factoringcontracts = {
    /**
     * @description Allows to get all new factoring contract for company.
     *
     * @tags Factoring contracts
     * @name GetFactoringContracts
     * @summary Get factoring contract. Supports only Finnish environments.
     * @request GET:/factoringcontracts
     * @secure
     * @response `200` `FactoringContractSearchResult` Factoring contract was successfully returned.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights or external financing has not been enabled for your company.
     */
    getFactoringContracts: (
      query?: {
        /**
         * The factoring company code to use when searching for factoring contracts.
         * @example "AK"
         */
        financingCompanyId?: string;
        /**
         * Page size for the results. Maximum value: 200.
         * @format int32
         * @max 200
         * @default 50
         * @example 20
         */
        size?: number;
        /**
         * Page number for the results
         * @format int32
         * @default 0
         * @example 2
         */
        page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<FactoringContractSearchResult, ErrorMessages>({
        path: `/factoringcontracts`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Allows to add new factoring contract and use it on sales invoices.
     *
     * @tags Factoring contracts
     * @name AddFactoringContract
     * @summary Add new factoring contract. Supports only Finnish environments.
     * @request POST:/factoringcontracts
     * @secure
     * @response `200` `FactoringContract` Factoring contract was successfully created.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` User rights check failed: Insufficient user rights.
     */
    addFactoringContract: (data: FactoringContract, params: RequestParams = {}) =>
      this.request<FactoringContract, ErrorMessages>({
        path: `/factoringcontracts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  attachments = {
    /**
     * @description Returns a list containing basic information for the attachments. The ID in each result entry can be used to fetch complete attachment details with the GET /attachments/{attachmentId} endpoint. The document management need to be active in order to use this endpoint, it can be set on to an environment from Management -> Company info -> Usage settings -> Documents -> Activate Documents in environment. There is a fee associated with having 'Document management' on for non Solo environments! This endpoint supports username parameter in HTTP header.
     *
     * @tags Attachments
     * @name GetAttachments
     * @summary Search attachments.
     * @request GET:/attachments
     * @secure
     * @response `200` `AttachmentSearchResult` Attachments successfully returned.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     */
    getAttachments: (
      query?: {
        /**
         * Start date of the search (Attached date)
         * @format date
         * @example "2016-08-31"
         */
        createdStartDate?: string;
        /**
         * End date of the search (Attached date)
         * @format date
         * @example "2016-08-31"
         */
        createdEndDate?: string;
        /**
         * Minimum size of attachment in bytes
         * @format int32
         * @example 64
         */
        minSize?: number;
        /**
         * Maximum size of attachment in bytes
         * @format int32
         * @example 64
         */
        maxSize?: number;
        /**
         * Name of the attachment file
         * @example "attachment.txt"
         */
        name?: string;
        /**
         * Attachment type
         * @example "SALES_INVOICE"
         */
        type?: (
          | "SALES_INVOICE"
          | "SALES_ORDER"
          | "OFFER"
          | "PURCHASE_INVOICE"
          | "PURCHASE_ORDER"
          | "TRAVEL_INVOICE"
          | "BILL_OF_CHARGES"
          | "JOURNAL"
          | "SALARY"
          | "PERIODIC_TAX_RETURN"
          | "REFERENCE_PAYMENT"
          | "BANK_STATEMENT_AS_RECEIPT"
          | "VAT_SUMMARY"
          | "BANK_STATEMENT_EVENT"
          | "SALES_PRODUCT_REGISTER"
          | "PURCHASE_PRODUCT_REGISTER"
          | "CUSTOMER_BUSINESS_PARTNER_REGISTER"
          | "SUPPLIER_BUSINESS_PARTNER_REGISTER"
          | "PERSON_BUSINESS_PARTNER_REGISTER"
          | "EMPLOYEE_INFO"
          | "ENVIRONMENT"
          | "NETS_COLLECTION"
          | "COST_RECEIPT"
          | "REFERENCE_PAYMENT_EVENT"
        )[];
        /**
         * Attachment reference ID
         * @format int32
         * @example 567829
         */
        referenceId?: number;
        /**
         * Order the results by attachment ID
         * @example "ASC"
         */
        orderById?: "ASC" | "DESC";
        /**
         * Order the results by attachment date
         * @example "ASC"
         */
        orderByCreatedDate?: "ASC" | "DESC";
        /**
         * Order the results by attachment name
         * @example "ASC"
         */
        orderByName?: "ASC" | "DESC";
        /**
         * Order the results by attachment size
         * @example "ASC"
         */
        orderBySize?: "ASC" | "DESC";
        /**
         * Page size for the results. Maximum value: 200.
         * @format int32
         * @max 200
         * @default 50
         * @example 20
         */
        size?: number;
        /**
         * Page number for the results
         * @format int32
         * @default 0
         * @example 2
         */
        page?: number;
        /**
         * Previous attachment ID for pagination
         * @format int32
         * @example 123
         */
        previousId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<AttachmentSearchResult, ErrorMessages>({
        path: `/attachments`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Using this endpoint you can add an attachment. The attachment can be of any type but limited to max 10000000 bytes. Content-type for the request is multipart/form-data. Type for the meta data is application/json, see Attachment model.
     *
     * @tags Attachments
     * @name SaveAttachment
     * @summary Add a new attachment.
     * @request POST:/attachments
     * @secure
     * @response `200` `Attachment` Attachment was successfully added.
     * @response `400` `ErrorMessages` File size too big.
     */
    saveAttachment: (
      data: {
        meta: Attachment;
        /** @format binary */
        file: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<Attachment, ErrorMessages>({
        path: `/attachments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns an attachment based on given attachment ID. Both attachment metadata (application/json) and the file itself will be returned. Content-type for the response is multipart/mixed.
     *
     * @tags Attachments
     * @name GetAttachment
     * @summary Get an attachment.
     * @request GET:/attachments/{attachmentId}
     * @secure
     * @response `200` `Attachment` Attachment was successfully found.
     * @response `404` `ErrorMessages` Attachment not found.
     */
    getAttachment: (attachmentId: number, params: RequestParams = {}) =>
      this.request<Attachment, ErrorMessages>({
        path: `/attachments/${attachmentId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Deletes an attachment based on a given attachment ID.
     *
     * @tags Attachments
     * @name DeleteAttachment
     * @summary Delete an attachment.
     * @request DELETE:/attachments/{attachmentId}
     * @secure
     * @response `204` `DataModel` Attachment was successfully deleted.
     * @response `403` `ErrorMessages` Insufficient user rights or this attachment is not editable.
     * @response `404` `ErrorMessages` Attachment not found.
     */
    deleteAttachment: (attachmentId: number, params: RequestParams = {}) =>
      this.request<DataModel, ErrorMessages>({
        path: `/attachments/${attachmentId}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Renames an attachment based on the given attachment ID. The file extension can't be changed. Other properties than the filename can't be changed.
     *
     * @tags Attachments
     * @name RenameAttachment
     * @summary Renames an attachment.
     * @request PATCH:/attachments/{attachmentId}
     * @secure
     * @response `200` `Attachment` Attachment was successfully renamed.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Attachment for given id has not been found
     */
    renameAttachment: (
      attachmentId: number,
      data: AttachmentRename,
      query?: {
        /**
         * Name of the attachment file
         * @example "example-pdf2.pdf"
         */
        name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Attachment, ErrorMessages>({
        path: `/attachments/${attachmentId}`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  vats = {
    /**
     * @description Returns VAT percentages and vat statuses for the current company.
     *
     * @tags VATs
     * @name GetVatStatusesForCompany
     * @summary Get VAT percentages and vat statuses for the current company.
     * @request GET:/vats/default
     * @secure
     * @response `200` `VatInformation` The VATs were successfully returned
     */
    getVatStatusesForCompany: (params: RequestParams = {}) =>
      this.request<VatInformation, any>({
        path: `/vats/default`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns VAT percentages available for the given country.
     *
     * @tags VATs
     * @name GetVatStatusesForCountry
     * @summary Get VAT percentages for a country.
     * @request GET:/vats/country
     * @secure
     * @response `200` `VatPercentages` The VATs for selected country were successfully returned.
     * @response `400` `ErrorMessages` The country code is invalid.
     */
    getVatStatusesForCountry: (
      query: {
        /**
         * Country code in ISO 3166-1 alpha-2 format.
         * @example "DK"
         */
        countryCode: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<VatPercentages, ErrorMessages>({
        path: `/vats/country`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  status = {
    /**
     * @description Returns basic information about the current API status.
     *
     * @tags Health Status
     * @name GetStatus
     * @summary Get information about API health status.
     * @request GET:/status
     * @secure
     * @response `200` `Status` API status was successfully returned.
     */
    getStatus: (params: RequestParams = {}) =>
      this.request<Status, any>({
        path: `/status`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  sessioninfo = {
    /**
     * @description Returns basic information about the current session.
     *
     * @tags Session Information
     * @name GetSessionInfo
     * @summary Get information about current session.
     * @request GET:/sessioninfo
     * @secure
     * @response `200` `SessionInfo` Session info was successfully returned.
     */
    getSessionInfo: (params: RequestParams = {}) =>
      this.request<SessionInfo, any>({
        path: `/sessioninfo`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  payrolls = {
    /**
     * @description Return the Salary Types list.
     *
     * @tags Payrolls
     * @name GetSalaryTypes
     * @summary Get the list of salary types matching search criteria.
     * @request GET:/payrolls/salarytypes
     * @secure
     * @response `200` `SalaryTypeSearchResult` List of salary types was successfully returned.
     * @response `403` `ErrorMessages` Insufficient user rights.
     */
    getSalaryTypes: (
      query?: {
        /**
         * Salary Type name
         *
         * Also partial - search matches returned.
         * @example "Time-rate pay"
         */
        name?: string;
        /**
         * Salary type code
         * @example 1000
         */
        code?: number;
        /**
         * Salary category
         * @example "TAX"
         */
        category?:
          | "SALARY_FOR_TIME_WORKED"
          | "OTHER_TAXABLE_EARNINGS"
          | "FRINGE_BENEFITS"
          | "TAX_FREE_ITEMS"
          | "TAX"
          | "DEDUCTIONS_FROM_NET_PAY"
          | "INFORMATIVE_ITEMS"
          | "EMPLOYER_PAYMENTS";
        /**
         * Income Type name
         *
         * Also partial - search matches returned.
         * @example "Time-rate pay"
         */
        incomeType?: string;
        /**
         * Income type code
         * @example 201
         */
        incomeTypeCode?: number;
        /**
         * Page size for the results. Maximum value: 200.
         * @format int32
         * @min 1
         * @max 200
         * @default 50
         * @example 20
         */
        size?: number;
        /**
         * Page number for the results
         * @format int32
         * @min 0
         * @default 0
         * @example 2
         */
        page?: number;
        /**
         * Order the results by salary type code
         * @default "ASC"
         * @example "ASC"
         */
        orderByCode?: "ASC" | "DESC";
      },
      params: RequestParams = {},
    ) =>
      this.request<SalaryTypeSearchResult, ErrorMessages>({
        path: `/payrolls/salarytypes`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns salaries basic info.
     *
     * @tags Payrolls
     * @name GetSalariesBasicInfo
     * @summary Get salaries basic info.
     * @request GET:/payrolls/salariesbasicinfo
     * @secure
     * @response `200` `SalariesBasicInfo` The salaries basic info was successfully returned.
     * @response `403` `ErrorMessages` Insufficient user rights.
     * @response `404` `ErrorMessages` Salaries basic info yearly figures not found.
     */
    getSalariesBasicInfo: (
      query?: {
        /**
         * Year from which yearly figures will be returned. If not set returns yearly figures from current year.
         * @example 2023
         */
        year?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<SalariesBasicInfo, ErrorMessages>({
        path: `/payrolls/salariesbasicinfo`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns basic data of all labor union settings.
     *
     * @tags Payrolls
     * @name GetLaborUnionSettingsBasicData
     * @summary Find list of labor union settings basic data.
     * @request GET:/payrolls/laborunionsettings
     * @secure
     * @response `200` `(LaborUnionSettingsBasicData)[]` Labor union settings were successfully returned.
     * @response `403` `ErrorMessages` Insufficient user rights.
     */
    getLaborUnionSettingsBasicData: (params: RequestParams = {}) =>
      this.request<LaborUnionSettingsBasicData[], ErrorMessages>({
        path: `/payrolls/laborunionsettings`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns the list of employees with information: id, lastname, firstname, ssn, address, personNumber, salaryChannel, automatedTaxCard and active.
     *
     * @tags Employees
     * @name GetEmployee
     * @summary Get the list of employees matching search criteria.
     * @request GET:/payrolls/employees
     * @secure
     * @response `200` `(EmployeeSearchResult)[]` Employees were successfully returned.
     * @response `403` `ErrorMessages` Insufficient user rights.
     */
    getEmployee: (
      query?: {
        /**
         * Person number
         *
         * Also partial - search matches returned.
         * @example "CUST12367Z"
         */
        personNumber?: string;
        /**
         * Unique identifier of Business Partner Group of type PERSON
         * @example 123456
         */
        personGroupId?: number;
        /**
         * Include inactive persons
         * @default false
         */
        includeInactive?: boolean;
        /**
         * Salary channel
         * @example "EMAIL"
         */
        salaryChannel?: "NO_SENDING" | "MAIL" | "EMAIL" | "PAPER" | "MOBILE" | "ESALARY";
        /**
         * Page size for the results. Maximum value: 200.
         * @format int32
         * @min 1
         * @max 200
         * @default 50
         * @example 20
         */
        size?: number;
        /**
         * Page number for the results
         * @format int32
         * @min 0
         * @default 0
         * @example 2
         */
        page?: number;
        /**
         * Order the results by Employee ID
         * @default "DESC"
         * @example "ASC"
         */
        orderById?: "ASC" | "DESC";
      },
      params: RequestParams = {},
    ) =>
      this.request<EmployeeSearchResult[], ErrorMessages>({
        path: `/payrolls/employees`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
  currencies = {
    /**
     * @description Returns all available currencies.
     *
     * @tags Currencies
     * @name GetCurrencies
     * @summary Get all available currencies.
     * @request GET:/currencies
     * @secure
     * @response `200` `Currencies` The currencies were successfully returned.
     */
    getCurrencies: (params: RequestParams = {}) =>
      this.request<Currencies, any>({
        path: `/currencies`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description This endpoint returns last currency rates for the base company according to the following codes:1 - Procountor Accounting Exchange Rate, 2 - Average Rate, 3 - Buy Rate, 4 - Sell Rate, 5 - Cash Buy Rate, 6 - Cash sale exchange rate
     *
     * @tags Currencies
     * @name GetCompanyLatestRates
     * @summary List currency rates for the company base currency.
     * @request GET:/currencies/latest
     * @secure
     * @response `200` `CurrencyGroupRates` List of currency rates for base currency.
     * @response `400` `ErrorMessages` When 'rateType' param is not valid. Allowed only: [1,2,3,4,5,6].
     */
    getCompanyLatestRates: (
      query?: {
        /**
         * Rate type. Only the following numbers can be used: 1, 2, 3, 4, 5, 6.
         * @default 1
         */
        rateType?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<CurrencyGroupRates, ErrorMessages>({
        path: `/currencies/latest`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns an exchange rate between base and target currencies provided in parameters. Date of the rate and type of the rate can also be selected
     *
     * @tags Currencies
     * @name GetCurrencyExchangeRate
     * @summary Get a currency exchange rate.
     * @request GET:/currencies/exchangerate
     * @secure
     * @response `200` `CurrencyExchangeRate` The currency exchange rate was successfully returned.
     * @response `400` `ErrorMessages` Exchange query contains invalid data.
     * @response `404` `ErrorMessages` Exchange rate was not found for provided currency.
     */
    getCurrencyExchangeRate: (
      query: {
        /**
         * Base currency for conversion.
         * @example "DKK"
         */
        baseCurrency: string;
        /**
         * Target currency for conversion.
         * @example "EUR"
         */
        currency: string;
        /**
         * Day for the rate.
         * @format date
         * @example "2011-10-01"
         */
        day: string;
        /**
         * Type of the rate.
         * @example "CASH_BUYING_RATE"
         */
        rateType:
          | "PROCOUNTOR_ACCOUNTING_EXCHANGE_RATE"
          | "ACCOUNT_CURRENCY_AVERAGE_RATE"
          | "ACCOUNT_CURRENCY_BUYING_RATE"
          | "ACCOUNT_CURRENCY_SELLING_RATE"
          | "CASH_BUYING_RATE"
          | "CASH_CURRENCY_SALE_EXCHANGE_RATE";
      },
      params: RequestParams = {},
    ) =>
      this.request<CurrencyExchangeRate, ErrorMessages>({
        path: `/currencies/exchangerate`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description Returns currency for the current company.
     *
     * @tags Currencies
     * @name GetCurrenciesForCompany
     * @summary Get currency of the current company.
     * @request GET:/currencies/company
     * @secure
     * @response `200` `CompanyCurrency` The currency was successfully returned.
     */
    getCurrenciesForCompany: (params: RequestParams = {}) =>
      this.request<CompanyCurrency, any>({
        path: `/currencies/company`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  coa = {
    /**
     * @description Returns the chart of accounts for the current environment. It can be modified on the Chart of accounts page in Procountor.
     *
     * @tags Chart of accounts
     * @name GetChartOfAccount
     * @summary Get the chart of accounts.
     * @request GET:/coa
     * @secure
     * @response `200` `LedgerAccounts` The chart of accounts was successfully returned.
     */
    getChartOfAccount: (params: RequestParams = {}) =>
      this.request<LedgerAccounts, any>({
        path: `/coa`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
  sie = {
    /**
     * @description Returns a SIE file for given accounting period start date and export end date.
     *
     * @tags SIE file
     * @name GetSieFile
     * @summary Get SIE file.
     * @request GET:/SIE/file
     * @secure
     * @response `200` `File` SIE file successfully returned.
     * @response `400` `ErrorMessages` Request contains invalid data.
     * @response `403` `ErrorMessages` Insufficient user rights.
     */
    getSieFile: (
      query: {
        /**
         * Start date of accounting period
         * @format date
         * @example "2022-01-31"
         */
        accountingPeriodStart: string;
        /**
         * End date of the export
         * @format date
         * @example "2022-01-31"
         */
        exportEndDate: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, ErrorMessages>({
        path: `/SIE/file`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * @description Returns details about SIE export availability.
     *
     * @tags SIE file
     * @name GetSieAvailability
     * @summary Get information about SIE export availability.
     * @request GET:/SIE/availability
     * @secure
     * @response `200` `SieAvailabilityResponse` SIE export availability information was successfully returned.
     * @response `403` `ErrorMessages` Insufficient user rights.
     */
    getSieAvailability: (params: RequestParams = {}) =>
      this.request<SieAvailabilityResponse, ErrorMessages>({
        path: `/SIE/availability`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
