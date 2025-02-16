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
    define(['ApiClient', 'model/GetExtendedListCampaignStats', 'model/GetList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GetExtendedListCampaignStats'), require('./GetList'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.GetExtendedList = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.GetExtendedListCampaignStats, root.SibApiV3Sdk.GetList);
  }
}(this, function(ApiClient, GetExtendedListCampaignStats, GetList) {
  'use strict';

  /**
   * The GetExtendedList model module.
   * @module model/GetExtendedList
   * @version 8.4.2
   */

  /**
   * Constructs a new <code>GetExtendedList</code>.
   * @alias module:model/GetExtendedList
   * @class
   * @extends module:model/GetList
   * @param id {Number} ID of the list
   * @param name {String} Name of the list
   * @param totalBlacklisted {Number} Number of blacklisted contacts in the list
   * @param totalSubscribers {Number} Number of contacts in the list
   * @param uniqueSubscribers {Number} Number of unique contacts in the list
   * @param folderId {Number} ID of the folder
   * @param createdAt {String} Creation UTC date-time of the list (YYYY-MM-DDTHH:mm:ss.SSSZ)
   */
  var exports = function(id, name, totalBlacklisted, totalSubscribers, uniqueSubscribers, folderId, createdAt) {
    GetList.call(this, id, name, totalBlacklisted, totalSubscribers, uniqueSubscribers);
    this.folderId = folderId;
    this.createdAt = createdAt;
  };

  /**
   * Constructs a <code>GetExtendedList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetExtendedList} obj Optional instance to populate.
   * @return {module:model/GetExtendedList} The populated <code>GetExtendedList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      GetList.constructFromObject(data, obj);
      if (data.hasOwnProperty('folderId'))
        obj.folderId = ApiClient.convertToType(data['folderId'], 'Number');
      if (data.hasOwnProperty('createdAt'))
        obj.createdAt = ApiClient.convertToType(data['createdAt'], 'String');
      if (data.hasOwnProperty('campaignStats'))
        obj.campaignStats = ApiClient.convertToType(data['campaignStats'], [GetExtendedListCampaignStats]);
      if (data.hasOwnProperty('dynamicList'))
        obj.dynamicList = ApiClient.convertToType(data['dynamicList'], 'Boolean');
    }
    return obj;
  }

  exports.prototype = Object.create(GetList.prototype);
  exports.prototype.constructor = exports;
  /**
   * ID of the folder
   * @member {Number} folderId
   */
  exports.prototype.folderId = undefined;

  /**
   * Creation UTC date-time of the list (YYYY-MM-DDTHH:mm:ss.SSSZ)
   * @member {String} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * @member {Array.<module:model/GetExtendedListCampaignStats>} campaignStats
   */
  exports.prototype.campaignStats = undefined;

  /**
   * Status telling if the list is dynamic or not (true=dynamic, false=not dynamic)
   * @member {Boolean} dynamicList
   */
  exports.prototype.dynamicList = undefined;


  return exports;

}));
