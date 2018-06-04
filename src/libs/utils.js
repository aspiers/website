/**
 * Prepare a date as a valid MySql Timestamp
 * @param date
 * @returns {string}
 */
const formatMysqlTimestamp = (date) => {
  let d = new Date();
  if (date) {
    d = new Date(date);
  }
  return d
    .toISOString()
    .slice(0, 19)
    .replace('T', ' ');
};

/**
 * Common signature for awaiting Promise.all and resolving with all results
 * @param promises
 * @returns {Promise<any>}
 */
const collectAllPromises = async (promises) => {
  return new Promise((resolve) => {
    Promise.all(promises).then((resolved) => {
      resolve(resolved);
    });
  });
};

const getArrayChunks = (chunk, chunkSize = 100) => {
  let i = 0;
  let j = 0;
  let chunks = [];
  for (i = 0, j = chunk.length; i < j; i += chunkSize) {
    let slice = chunk.slice(i, i + chunkSize);
    chunks.push(slice);
  }
  return chunks;
};

module.exports = {
  getArrayChunks,
  formatMysqlTimestamp,
  collectAllPromises
};