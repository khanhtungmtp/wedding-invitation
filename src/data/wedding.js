/** Demo audio — replace with your hosted MP3 if desired */
export const MUSIC_URL =
  'https://github.com/khanhtungmtp/wedding-invitation/raw/refs/heads/master/src/assets/thefateofophelia.mp3'

export const COUPLE = {
  bride: 'Minh Anh',
  groom: 'Hữu Quốc',
}

/** Wedding day start (local) — 23/05/2027 */
export const WEDDING_DATE_ISO = '2027-05-23T09:30:00'

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
    lines: ['Kính mời quý khách dự tiệc cùng gia đình chúng tôi'],
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
    'https://cdn.pixabay.com/photo/2017/06/07/11/58/color-in-the-sea-2380142_1280.jpg',
  groomFallback:
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=900&q=85',
  brideFallback:
    'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=900&q=85',
  gallery: [
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80',
    'https://i.pinimg.com/736x/84/a0/16/84a0168942aeea0d3d93307c403b9b3c.jpg',
    'https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=900&q=80',
    'https://anhquanweddingstudio.com/wp-content/uploads/2024/03/059A2508.jpg',
    'https://i.pinimg.com/originals/6b/23/37/6b233755ef3b0b65d41a558f16f0cb06.jpg',
    'https://i.pinimg.com/736x/a1/a8/7b/a1a87b256cd9ea472e27403471d08d6a.jpg',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80',
    'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=900&q=80',
  ],
}
