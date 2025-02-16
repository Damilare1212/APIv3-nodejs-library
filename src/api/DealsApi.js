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
    define(['ApiClient', 'model/Body', 'model/Body1', 'model/Deal', 'model/DealAttributes', 'model/DealsList', 'model/ErrorModel', 'model/InlineResponse201', 'model/Pipeline'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body'), require('../model/Body1'), require('../model/Deal'), require('../model/DealAttributes'), require('../model/DealsList'), require('../model/ErrorModel'), require('../model/InlineResponse201'), require('../model/Pipeline'));
  } else {
    // Browser globals (root is window)
    if (!root.SibApiV3Sdk) {
      root.SibApiV3Sdk = {};
    }
    root.SibApiV3Sdk.DealsApi = factory(root.SibApiV3Sdk.ApiClient, root.SibApiV3Sdk.Body, root.SibApiV3Sdk.Body1, root.SibApiV3Sdk.Deal, root.SibApiV3Sdk.DealAttributes, root.SibApiV3Sdk.DealsList, root.SibApiV3Sdk.ErrorModel, root.SibApiV3Sdk.InlineResponse201, root.SibApiV3Sdk.Pipeline);
  }
}(this, function(ApiClient, Body, Body1, Deal, DealAttributes, DealsList, ErrorModel, InlineResponse201, Pipeline) {
  'use strict';

  /**
   * Deals service.
   * @module api/DealsApi
   * @version 8.4.2
   */

  /**
   * Constructs a new DealsApi. 
   * @alias module:api/DealsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get deal attributes
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DealAttributes} and HTTP response
     */
    this.crmAttributesDealsGetWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DealAttributes;

      return this.apiClient.callApi(
        '/crm/attributes/deals', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get deal attributes
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DealAttributes}
     */
    this.crmAttributesDealsGet = function() {
      return this.crmAttributesDealsGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all deals
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterAttributes Filter by attrbutes. If you have filter for owner on your side please send it as `attributes.owner`.\"
     * @param {String} opts.filterLinkedCompaniesIds Filter by linked companies ids
     * @param {String} opts.filterLinkedContactsIds Filter by linked companies ids
     * @param {Number} opts.offset Index of the first document of the page
     * @param {Number} opts.limit Number of documents per page (default to 50)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed
     * @param {String} opts.sortBy The field used to sort field names.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DealsList} and HTTP response
     */
    this.crmDealsGetWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter[attributes]': opts['filterAttributes'],
        'filter[linkedCompaniesIds]': opts['filterLinkedCompaniesIds'],
        'filter[linkedContactsIds]': opts['filterLinkedContactsIds'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'sort': opts['sort'],
        'sortBy': opts['sortBy'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DealsList;

      return this.apiClient.callApi(
        '/crm/deals', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get all deals
     * @param {Object} opts Optional parameters
     * @param {String} opts.filterAttributes Filter by attrbutes. If you have filter for owner on your side please send it as `attributes.owner`.\"
     * @param {String} opts.filterLinkedCompaniesIds Filter by linked companies ids
     * @param {String} opts.filterLinkedContactsIds Filter by linked companies ids
     * @param {Number} opts.offset Index of the first document of the page
     * @param {Number} opts.limit Number of documents per page (default to 50)
     * @param {module:model/String} opts.sort Sort the results in the ascending/descending order. Default order is **descending** by creation if `sort` is not passed
     * @param {String} opts.sortBy The field used to sort field names.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DealsList}
     */
    this.crmDealsGet = function(opts) {
      return this.crmDealsGetWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete a deal
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.crmDealsIdDeleteWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling crmDealsIdDelete");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/crm/deals/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a deal
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.crmDealsIdDelete = function(id) {
      return this.crmDealsIdDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a deal
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Deal} and HTTP response
     */
    this.crmDealsIdGetWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling crmDealsIdGet");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Deal;

      return this.apiClient.callApi(
        '/crm/deals/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a deal
     * @param {String} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Deal}
     */
    this.crmDealsIdGet = function(id) {
      return this.crmDealsIdGetWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update a deal
     * @param {String} id 
     * @param {module:model/Body1} body Updated deal details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.crmDealsIdPatchWithHttpInfo = function(id, body) {
      var postBody = body;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling crmDealsIdPatch");
      }

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling crmDealsIdPatch");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/crm/deals/{id}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a deal
     * @param {String} id 
     * @param {module:model/Body1} body Updated deal details.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.crmDealsIdPatch = function(id, body) {
      return this.crmDealsIdPatchWithHttpInfo(id, body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create a deal
     * @param {module:model/Body} body Deal create data.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/InlineResponse201} and HTTP response
     */
    this.crmDealsPostWithHttpInfo = function(body) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling crmDealsPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse201;

      return this.apiClient.callApi(
        '/crm/deals', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create a deal
     * @param {module:model/Body} body Deal create data.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse201}
     */
    this.crmDealsPost = function(body) {
      return this.crmDealsPostWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get pipeline stages
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Pipeline} and HTTP response
     */
    this.crmPipelineDetailsGetWithHttpInfo = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['api-key', 'partner-key'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Pipeline;

      return this.apiClient.callApi(
        '/crm/pipeline/details', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get pipeline stages
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Pipeline}
     */
    this.crmPipelineDetailsGet = function() {
      return this.crmPipelineDetailsGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
