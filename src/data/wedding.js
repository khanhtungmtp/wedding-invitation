/** Demo audio — replace with your hosted MP3 if desired */
export const MUSIC_URL =
  'https://github.com/khanhtungmtp/wedding-invitation/raw/refs/heads/master/src/assets/thefateofophelia.mp3'

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

export const GROOM_FAMILY = {
  title: 'Nhà trai',
  parents: 'Ông Nguyễn Văn A — Bà Trần Thị B',
  address: '123 Đường Hoa Lan, Quận 7, TP.HCM',
  ceremonyTime: '09:30 — Lễ vu quy',
  note: 'Trân trọng kính mời quý khách đến dự lễ tại tư gia nhà trai.',
}

export const BRIDE_FAMILY = {
  title: 'Nhà gái',
  parents: 'Ông Phạm Văn C — Bà Lê Thị D',
  address: '456 Đường Mai Vàng, Quận 3, TP.HCM',
  ceremonyTime: '10:00 — Đón dâu',
  note: 'Trân trọng kính mời quý khách đến dự lễ tại tư gia nhà gái.',
}

export const INVITATION_CONTENT = {
  greeting:
    'Trân trọng kính mời Quý khách đến dự buổi tiệc chung vui cùng gia đình chúng tôi.',
  body: `Với tất cả sự trân trọng, chúng tôi — ${COUPLE.groom} & ${COUPLE.bride} — xin gửi lời mời thân mật đến Quý khách, mong được đón tiếp trong ngày vui trọng đại của hai chúng tôi.`,
  schedule: [
    { label: 'Đón khách', time: '09:00' },
    { label: 'Lễ thành hôn', time: '09:30 — 10:30' },
    { label: 'Tiệc cưới', time: '11:00 — 14:00' },
  ],
  closing:
    'Sự hiện diện của Quý khách là niềm vinh hạnh và món quà quý giá nhất đối với chúng tôi. Xin chân thành cảm ơn!',
}

export const WEDDING_EVENTS = [
  {
    key: 'ceremony',
    title: 'Lễ thành hôn',
    lines: ['Trang trọng — ấm áp — sum họp'],
    detail: VENUE.name,
    time: VENUE.ceremonyTime,
  },
  {
    key: 'reception',
    title: 'Tiệc cưới',
    lines: ['Kính mời quý khách dự tiệc buffet'],
    detail: VENUE.name,
    time: VENUE.receptionTime,
  },
]

export const BANK_INFO = {
  bankName: 'Vietcombank',
  accountName: 'HUU QUOC / MINH ANH',
  accountNumber: '1030034140',
}

export const IMAGES = {
  groom:
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85',
  bride:
    'https://images.unsplash.com/photo-1523438885200-e635ba54c084?auto=format&fit=crop&w=900&q=85',
  groomFallback:
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=900&q=85',
  brideFallback:
    'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=900&q=85',
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
