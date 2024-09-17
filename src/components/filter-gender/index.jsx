// filter-gender.js
export default function FilterGender(list, gender) {
  if (!gender) return list; // Trả về tất cả nếu không có gender
  return list.filter((user) => user.gender === gender); // Lọc theo gender
}
