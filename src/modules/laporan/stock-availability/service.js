import {inject, Lazy} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import {RestService} from '../../../utils/rest-service';
import { Container } from 'aurelia-dependency-injection';
import { Config } from "aurelia-api";

const serviceUriMonitoring = 'inventories/monitoring';
const serviceUriStock = 'inventories/monitoring/stock-availability';  

export class Service extends RestService{
  
  constructor(http, aggregator, config, api) {
    super(http, aggregator, config, "inventory");
  }  

  getStorageInInventory(storageId)
  {
    var endpoint = `${serviceUriStock}?storageId=${storageId}`; 
    return super.get(endpoint);
  }

  getNearestStockInInventory(arg)
  {
    var endpoint = `${serviceUriMonitoring}/nearest-storage-stock?storageCode=${arg.storageCode}&itemCode=${arg.itemCode}`;
    return super.get(endpoint);
  }
   
}