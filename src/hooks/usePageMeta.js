import { useEffect } from 'react';

const SITE_NAME = 'Bệnh viện Quân y 4';
const HOME_TITLE = 'Cổng thông tin điện tử Bệnh viện Quân y 4';
const DEFAULT_DESCRIPTION =
  'Bệnh viện Quân y 4/Cục Hậu cần - Kỹ thuật là bệnh viện tuyến cuối Quân khu 4, chăm sóc sức khỏe cho cán bộ, chiến sĩ quân đội và nhân dân.';

function setMetaTag(selector, attr, name, content) {
  let tag = document.querySelector(selector);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

/**
 * Đặt <title> và mô tả riêng cho từng trang.
 * @param {string} title - Tiêu đề riêng của trang (vd: "Tin tức - Sự kiện").
 * @param {string} [description] - Mô tả riêng (tùy chọn).
 */
export default function usePageMeta(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : HOME_TITLE;
    const desc = description || DEFAULT_DESCRIPTION;

    document.title = fullTitle;
    setMetaTag('meta[name="description"]', 'name', 'description', desc);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', desc);
  }, [title, description]);
}
