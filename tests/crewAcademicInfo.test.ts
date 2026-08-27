import assert from 'node:assert/strict';
import { test } from 'node:test';
import { formatAdmissionYear, formatCrewAcademicInfo } from '../src/utils/crewAcademicInfo';

test('two/four-digit years and full student numbers display only the admission-year suffix', () => {
  for (const input of ['21', '2021', '202112345', 202112345, '2021년', '21학번']) {
    assert.equal(formatAdmissionYear(input), '21');
  }
  assert.equal(formatAdmissionYear('2000'), '00'); // Valid year, not the legacy 0000 placeholder.
});

test('missing, malformed and legacy placeholder values are never shown as 00', () => {
  for (const input of ['', null, undefined, '00', '0000', '20211', 'invalid2021', 0]) {
    assert.equal(formatAdmissionYear(input), null);
    assert.equal(formatCrewAcademicInfo('', input), '학번 미등록');
  }
});

test('homepage, crewbook/detail and project cards share safe academic labels', () => {
  assert.equal(formatCrewAcademicInfo(' 소프트웨어학과 ', '202112345', false), '소프트웨어학과 21');
  assert.equal(formatCrewAcademicInfo('소프트웨어학과', '2021'), '소프트웨어학과 21학번');
  assert.equal(formatCrewAcademicInfo(null, '2021'), '21학번');
  assert.equal(formatCrewAcademicInfo('소프트웨어학과', undefined, false), '소프트웨어학과 학번 미등록');
  assert.ok(!formatCrewAcademicInfo('', '202112345').includes('12345'));
});
