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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SibApiV3Sdk);
  }
}(this, function(expect, SibApiV3Sdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SibApiV3Sdk.CompaniesApi();
  });

  describe('(package)', function() {
    describe('CompaniesApi', function() {
      describe('companiesAttributesGet', function() {
        it('should call companiesAttributesGet successfully', function(done) {
          // TODO: uncomment companiesAttributesGet call and complete the assertions
          /*

          instance.companiesAttributesGet().then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SibApiV3Sdk.CompanyAttributes);

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('companiesGet', function() {
        it('should call companiesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for companiesGet call and complete the assertions
          /*
          var opts = {};
          opts.filters = "filters_example";
          opts.linkedContactsIds = 789;
          opts.linkedDealsIds = "linkedDealsIds_example";
          opts.page = 789;
          opts.limit = 50;
          opts.sort = "sort_example";
          opts.sortBy = "sortBy_example";

          instance.companiesGet(opts).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SibApiV3Sdk.CompaniesList);
            {
              let dataCtr = data.items;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(SibApiV3Sdk.Company);
                expect(data.id).to.be.a('string');
                expect(data.id).to.be("629475917295261d9b1f4403");
                expect(data.attributes).to.be.a(Object);
                expect(data.attributes).to.be({"created_at":"2022-01-13T19:04:24.376+05:30","domain":"xyz","last_updated_at":"2022-04-01T18:47:48.283+05:30","name":"text","number_of_contacts":0,"owner":"62260474111b1101704a9d85","owner_assign_date":"2022-04-01T18:21:13.379+05:30","phone_number":8171844192,"revenue":10});
                {
                  let dataCtr = data.linkedContactsIds;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('number');
                    expect(data).to.be(0);
                  }
                }
                {
                  let dataCtr = data.linkedDealsIds;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }

                      }
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('companiesIdDelete', function() {
        it('should call companiesIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for companiesIdDelete call
          /*
          var id = "id_example";

          instance.companiesIdDelete(id).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('companiesIdGet', function() {
        it('should call companiesIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for companiesIdGet call and complete the assertions
          /*
          var id = "id_example";

          instance.companiesIdGet(id).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SibApiV3Sdk.Company);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("629475917295261d9b1f4403");
            expect(data.attributes).to.be.a(Object);
            expect(data.attributes).to.be({"created_at":"2022-01-13T19:04:24.376+05:30","domain":"xyz","last_updated_at":"2022-04-01T18:47:48.283+05:30","name":"text","number_of_contacts":0,"owner":"62260474111b1101704a9d85","owner_assign_date":"2022-04-01T18:21:13.379+05:30","phone_number":8171844192,"revenue":10});
            {
              let dataCtr = data.linkedContactsIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(0);
              }
            }
            {
              let dataCtr = data.linkedDealsIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('companiesIdPatch', function() {
        it('should call companiesIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for companiesIdPatch call and complete the assertions
          /*
          var id = "id_example";
          var body = new SibApiV3Sdk.Body3();
          body.name = "company";
          body.attributes = {"category":"label_2","domain":"xyz","date":"2022-05-04T00:00:00+05:30","industry":"flipkart","number_of_contacts":1,"number_of_employees":100,"owner":"5b1a17d914b73d35a76ca0c7","phone_number":"81718441912","revenue":10000.34222};

          instance.companiesIdPatch(id, body).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SibApiV3Sdk.Company);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("629475917295261d9b1f4403");
            expect(data.attributes).to.be.a(Object);
            expect(data.attributes).to.be({"created_at":"2022-01-13T19:04:24.376+05:30","domain":"xyz","last_updated_at":"2022-04-01T18:47:48.283+05:30","name":"text","number_of_contacts":0,"owner":"62260474111b1101704a9d85","owner_assign_date":"2022-04-01T18:21:13.379+05:30","phone_number":8171844192,"revenue":10});
            {
              let dataCtr = data.linkedContactsIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('number');
                expect(data).to.be(0);
              }
            }
            {
              let dataCtr = data.linkedDealsIds;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('companiesLinkUnlinkIdPatch', function() {
        it('should call companiesLinkUnlinkIdPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for companiesLinkUnlinkIdPatch call
          /*
          var id = "id_example";
          var body = new SibApiV3Sdk.Body4();
          body.linkContactIds = [1,2,3];
          body.unlinkContactIds = [4,5,6];
          body.linkDealsIds = ["61a5ce58c5d4795761045990","61a5ce58c5d4795761045991","61a5ce58c5d4795761045992"];
          body.unlinkDealsIds = ["61a5ce58c5d4795761045994","61a5ce58c5d479576104595","61a5ce58c5d4795761045996"];

          instance.companiesLinkUnlinkIdPatch(id, body).then(function(data) {

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('companiesPost', function() {
        it('should call companiesPost successfully', function(done) {
          // TODO: uncomment, update parameter values for companiesPost call and complete the assertions
          /*
          var body = new SibApiV3Sdk.Body2();
          body.name = "company";
          body.attributes = {"domain":"https://example.com","industry":"Fabric","owner":"60e68d60582a3b006f524197"};

          instance.companiesPost(body).then(function(data) {
            // TODO: update response assertions
            expect(data).to.be.a(SibApiV3Sdk.InlineResponse200);
            expect(data.id).to.be.a('string');
            expect(data.id).to.be("61a5cd07ca1347c82306ad06");

            done();
          }, function(error) {
            done(error);
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
