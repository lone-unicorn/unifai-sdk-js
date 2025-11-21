import { Signer, SendConfig } from '../types';

export interface TransactionResult {
    hash?: string[];
    error?: any;
    data?: { [key: string]: any };
}

export interface TransactionInfo {
    index: number;
    hash: string;
}

export interface FailedTransactionInfo {
    index: number;
    error: string;
}

export interface BatchInfo {
    batchIndex: number;
    hashes: string[];
}

export interface FailedBatchInfo {
    batchIndex: number;
    error: string;
    txCount: number;
}

export interface BaseTransactionHandler {
    sendTransaction(tx: any, signer: Signer, config?: SendConfig): Promise<{ hash?: string; data?: any }>;
}

