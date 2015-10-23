/**
 * @overview  Metric handler.
 * @author    Chao Wang (hit9)
 * @copyright 2015 Eleme, Inc. All rights reserved.
 */

app.handler('metric', function(handler, util) {
  /**
   * Get metric names
   * @param {Object} params
   * @param {Function} cb // function(err, data)
   */
  handler.getNames = function(params, cb) {
    return util.get(util.url('/api/metric/names', params), cb);
  };
  /**
   * Get metric data
   * @param {Object} params
   * @param {Function} cb
   */
  handler.getData = function(params, cb) {
    return util.get(util.url('/api/metric/data', params), cb);
  };
});
