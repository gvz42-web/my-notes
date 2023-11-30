export default function (text, length, clamp = '...') {
  return text.length > length ? text.slice(0, length) + clamp : text
}
