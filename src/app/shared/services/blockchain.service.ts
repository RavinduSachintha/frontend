import { Injectable } from '@angular/core';
import { HttpResolverService } from './http-resolver.service';
import { BackendURLS } from '../utils/backend-urls.enum';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  constructor(private httpResolverService: HttpResolverService) { }

  getOngoingTransactionCount(): number {
    return 18;
  }

  getRegisteredNotaryCount(): number {
    return 3012;
  }

  getLandsCount(): number {
    return 30120;
  }

  getLandByID(id: string) {
    return this.httpResolverService.realizarHttpPost(
      BackendURLS.blockchain_query_land, { id: id }
    );
  }

  getAllLands() {
    return this.httpResolverService.realizarHttpPost(
      BackendURLS.blockchain_query_all_lands, { }
    );
  }

  getHistoryForLand(id: string) {
    return this.httpResolverService.realizarHttpPost(
      BackendURLS.blockchain_get_history_for_land, { id: id }
    );
  }

  // sendEmail() {
  //   return this.httpResolverService.realizarHttpGet(BackendURLS.blockchain_get_test);
  // }

}
