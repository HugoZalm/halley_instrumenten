import { Injectable } from '@angular/core';
import { Language } from '../model/interfaces';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight, faChevronLeft, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faInfo, faChartArea, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
// import { faClock, faFaceSmile, faFaceFrown, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class StaticService {

  public static languages: Language[] = [
    { value: 'nl', label: 'NL' },
    { value: 'en', label: 'EN' },
  ];

  public static icons: {[k: string]: IconDefinition} = { 
    menu: faBars, 
    right: faChevronRight,
    left: faChevronLeft,
    down: faChevronDown,
    up: faChevronUp,
    info: faInfo,
    chart: faChartArea,
    more: faEllipsisH,
    // clock: faClock, 
    // wifi: faFaceSmile, 
    // nowifi: faFaceFrown, 
    // loading: faCloudDownloadAlt,
  };


}
