/** Demo audio — replace with your hosted MP3 if desired */
export const MUSIC_URL =
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'

export const COUPLE = {
  bride: 'Minh Anh',
  groom: 'Hữu Quốc',
}

/** Wedding day start (local) — 23/05/2026 */
export const WEDDING_DATE_ISO = '2026-05-23T09:30:00'

export const SAVE_THE_DATE_TEXT =
  'Chúng mình hân hạnh mời bạn đến chung vui trong ngày trọng đại của hai đứa.'

export const VENUE = {
  name: 'White Palace — Grand Ballroom',
  address: '588 Phạm Văn Đồng, Hiệp Bình Chánh, TP. Thủ Đức, TP.HCM',
  ceremonyTime: '09:30 — 10:30',
  receptionTime: '11:00 — 14:00',
}

export const MAPS_QUERY = `${VENUE.name}, ${VENUE.address}`

export const BANK_INFO = {
  bankName: 'Vietcombank (demo)',
  accountName: 'HUU QUOC / MINH ANH',
  accountNumber: '0123456789',
}

/** Hero & gallery imagery — curated placeholder photography */
export const IMAGES = {
  hero:
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85',
  heroFallback:
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=85',
  gallery: [
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1523438885200-e635ba54c084?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1460978812857-470ed1c77af8?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1469379570809-613eab77afc7?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1520854221050-0f463caf18a4?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=900&q=80',
  ],
}

export const STORY_MILESTONES = [
  {
    year: '2019',
    title: 'Lần đầu gặp gỡ',
    body: 'Một buổi chiều mưa nhẹ, hai đường thẳng vô tình song song rồi chạm nhau.',
  },
  {
    year: '2021',
    title: 'Chính thức yêu',
    body: 'Từ những tin nhắn muộn đến những chuyến đi nhỏ — mình chọn nhau mỗi ngày.',
  },
  {
    year: '2024',
    title: 'Cầu hôn',
    body: 'Dưới ánh đèn ấm và tiếng cười thân quen, câu “Đồng ý nhé?” được đáp lại bằng nước mắt hạnh phúc.',
  },
  {
    year: '2026',
    title: 'Thề nguyền trọn đời',
    body: 'Chúng mình sẽ về chung một nhà — và mong bạn chứng kiến khoảnh khắc ấy.',
  },
]

export const EVENT_BLOCKS = [
  {
    key: 'ceremony',
    title: 'Lễ vu quy',
    lines: ['Trang trọng — ấm áp — sum họp'],
    detail: `${VENUE.name}`,
    time: VENUE.ceremonyTime,
  },
  {
    key: 'party',
    title: 'Tiệc cưới',
    lines: ['Kính mời quý khách dự tiệc buffet'],
    detail: `${VENUE.name}`,
    time: VENUE.receptionTime,
  },
  {
    key: 'groom',
    title: 'Nhà trai',
    lines: ['Ông Nguyễn Văn A — Bà Trần Thị B'],
    detail: 'Trân trọng kính mời',
    time: '',
  },
  {
    key: 'bride',
    title: 'Nhà gái',
    lines: ['Ông Phạm Văn C — Bà Lê Thị D'],
    detail: 'Trân trọng kính mời',
    time: '',
  },
]

export const DEMO_WISHES = [
  {
    id: 'w1',
    name: 'Lan Phương',
    message:
      'Chúc hai em một hành trình thật êm đềm — giận nhau ít thôi, yêu nhau nhiều vào!',
    createdAt: '2026-05-01T10:20:00',
  },
  {
    id: 'w2',
    name: 'Tuấn Kiệt',
    message:
      'Happy wedding! Mong buổi tiệc ấm áp và đầy tiếng cười — hẹn gặp trên dance floor nhé!',
    createdAt: '2026-05-03T14:05:00',
  },
  {
    id: 'w3',
    name: 'Mẹ của Anh',
    message:
      'Con trai và con dâu của mẹ — luôn nắm tay nhau qua sóng gió nhỏ trong đời nhé.',
    createdAt: '2026-05-06T09:15:00',
  },
]
