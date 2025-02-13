/**
 * 특정 날짜에 대한 input[type="date"].value 타입의 문자열 반환
 * @param {Date} date 구해야 할 특정일의 Date 객체
 * @returns YYYY-MM-DD
 */
function getFormattedDateString(date = new Date(), separator = '.', yearTwoDisit = true) {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }

  let year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  if (isNaN(year) || isNaN(month) || isNaN(day)) {
    return '';
  }

  if (yearTwoDisit) {
    year = year.toString().slice(-2);
  }
  return [year, month, day].join(separator);
}

/**
 * 전달하는 날짜가 특정 기간 안에 속하는지 판단하여 결과 반환
 * @param {string | Date} date 비교할 날짜
 * @param {string | Date} start 시작일
 * @param {string | Date} end 종료일
 * @param {Boolean} ignoreTime 시간은 무시하고 날짜만 비교할 경우 true
 * @returns {Boolean} true: date 는 start ~ end 범위 안에 있음
 */
function isDateInRange(date, [start, end], ignoreTime = true) {
  if (ignoreTime) {
    // 시간 무시 - 비교할 날짜의 시간값을 통일
    date.setHours(0, 0, 0, 0);
    start.setHours(0, 0, 0, 0);
    end.setHours(0, 0, 0, 0);
  }
  return start <= date && date <= end;
}

export default {
  getFormattedDateString,
  isDateInRange,
};
