import { Injectable } from '@angular/core';
import { Language } from '../model/interfaces/selection-item';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faClock, faBars, faFaceSmile, faFaceFrown, faCloudDownloadAlt, faChevronRight, faChevronLeft, faChevronDown, faChevronUp, faInfo, faChartArea, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class StaticService {

  public static languages: Language[] = [
    { value: 'nl', label: 'NL' },
    { value: 'en', label: 'EN' },
  ];

  public static icons: {[k: string]: IconDefinition} = { 
    clock: faClock, 
    menu: faBars, 
    wifi: faFaceSmile, 
    nowifi: faFaceFrown, 
    loading: faCloudDownloadAlt,
    left: faChevronLeft,
    right: faChevronRight,
    up: faChevronUp,
    down: faChevronDown,
    info: faInfo,
    chart: faChartArea,
    more: faEllipsisH
  };


}
