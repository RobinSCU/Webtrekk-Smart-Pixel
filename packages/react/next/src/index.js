import AutoTracking from './components/WebtrekkAutoTracking';
import InitData from '../../shared/src/components/Data/WebtrekkInitData';
import AdvancedData from '../../shared/src/components/Data/WebtrekkAdvancedData';
import CampaignData from '../../shared/src/components/Data/WebtrekkCampaignData';
import CustomerData from '../../shared/src/components/Data/WebtrekkCustomerData';
import OrderData from '../../shared/src/components/Data/WebtrekkOrderData';
import PageData from '../../shared/src/components/Data/WebtrekkPageData';
import ProductData from '../../shared/src/components/Data/WebtrekkProductData';
import SessionData from '../../shared/src/components/Data/WebtrekkSessionData';
import Teaser from '../../shared/src/components/WebtrekkTeaser';
import ProductList from '../../shared/src/components/WebtrekkProductList';
import ContentEngagement from '../../shared/src/components/WebtrekkContentEngagement';
import Extension from '../../shared/src/components/WebtrekkExtension';
import SmartPixelReact from '../../shared/src/WebtrekkSmartPixelReact';
import middleware from '../../shared/src/webtrekkMiddleware';
import reducer from '../../shared/src/webtrekkReducer';

export const WebtrekkAutoTracking = AutoTracking;
export const WebtrekkInitData = InitData;
export const WebtrekkAdvancedData = AdvancedData;
export const WebtrekkCampaignData = CampaignData;
export const WebtrekkCustomerData = CustomerData;
export const WebtrekkOrderData = OrderData;
export const WebtrekkPageData = PageData;
export const WebtrekkProductData = ProductData;
export const WebtrekkSessionData = SessionData;
export const WebtrekkTeaser = Teaser;
export const WebtrekkProductList = ProductList;
export const WebtrekkContentEngagement = ContentEngagement;
export const WebtrekkExtension = Extension;
export const WebtrekkSmartPixelReact = SmartPixelReact;
export const webtrekkMiddleware = middleware;
export const webtrekkReducer = reducer;

// compatibility for v0
export const webtrekkSmartPixelReact = WebtrekkSmartPixelReact;

export default {
    WebtrekkAutoTracking,
    WebtrekkInitData,
    WebtrekkAdvancedData,
    WebtrekkCampaignData,
    WebtrekkCustomerData,
    WebtrekkOrderData,
    WebtrekkPageData,
    WebtrekkProductData,
    WebtrekkSessionData,
    WebtrekkTeaser,
    WebtrekkProductList,
    WebtrekkContentEngagement,
    WebtrekkExtension,
    WebtrekkSmartPixelReact,
    webtrekkMiddleware,
    webtrekkReducer,

    // compatibility for v0
    webtrekkSmartPixelReact
};
