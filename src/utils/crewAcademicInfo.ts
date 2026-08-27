/** Render the admission-year suffix only; never display a complete student ID. */
export function formatAdmissionYear(value: unknown): string | null {
  if (typeof value !== 'string' && typeof value !== 'number') return null;
  const text = String(value).trim().replace(/\s*(?:학번|년)$/, '').trim();
  if (/^\d{2}$/.test(text)) return text === '00' ? null : text;
  if (/^(?:19|20)\d{2}(?:\d{5})?$/.test(text)) return text.slice(2, 4);
  return null;
}

export function formatCrewAcademicInfo(
  department: unknown,
  year: unknown,
  showSuffix = true,
): string {
  const label = formatAdmissionYear(year);
  const yearLabel = label === null ? '학번 미등록' : `${label}${showSuffix ? '학번' : ''}`;
  return [typeof department === 'string' ? department.trim() : '', yearLabel]
    .filter(Boolean).join(' ');
}
