/*
 * SendinBlue API
 * SendinBlue provide a RESTFul API that can be used with any languages. With this API, you will be able to :   - Manage your campaigns and get the statistics   - Manage your contacts   - Send transactional Emails and SMS   - and much more...  You can download our wrappers at https://github.com/orgs/sendinblue  **Possible responses**   | Code | Message |   | :-------------: | ------------- |   | 200  | OK. Successful Request  |   | 201  | OK. Successful Creation |   | 202  | OK. Request accepted |   | 204  | OK. Successful Update/Deletion  |   | 400  | Error. Bad Request  |   | 401  | Error. Authentication Needed  |   | 402  | Error. Not enough credit, plan upgrade needed  |   | 403  | Error. Permission denied  |   | 404  | Error. Object does not exist |   | 405  | Error. Method not allowed  |   | 406  | Error. Not Acceptable  | 
 *
 * OpenAPI spec version: 3.0.0
 * Contact: contact@sendinblue.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.26
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/GetCampaignStats'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetCampaignStats'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetExtendedListCampaignStats = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.GetCampaignStats);
  }
}(this, function(ApiClient, GetCampaignStats) {
  'use strict';

  /**
   * The GetExtendedListCampaignStats model module.
   * @module model/GetExtendedListCampaignStats
   * @version 8.4.2
   */

  /**
   * Constructs a new <code>GetExtendedListCampaignStats</code>.
   * @alias module:model/GetExtendedListCampaignStats
   * @class
   * @param campaignId {Number} ID of the campaign
   * @param stats {module:model/GetCampaignStats} 
   */
  var exports = function(campaignId, stats) {
    this.campaignId = campaignId;
    this.stats = stats;
  };

  /**
   * Constructs a <code>GetExtendedListCampaignStats</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetExtendedListCampaignStats} obj Optional instance to populate.
   * @return {module:model/GetExtendedListCampaignStats} The populated <code>GetExtendedListCampaignStats</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('campaignId'))
        obj.campaignId = ApiClient.convertToType(data['campaignId'], 'Number');
      if (data.hasOwnProperty('stats'))
        obj.stats = GetCampaignStats.constructFromObject(data['stats']);
    }
    return obj;
  }

  /**
   * ID of the campaign
   * @member {Number} campaignId
   */
  exports.prototype.campaignId = undefined;

  /**
   * @member {module:model/GetCampaignStats} stats
   */
  exports.prototype.stats = undefined;


  return exports;

}));
