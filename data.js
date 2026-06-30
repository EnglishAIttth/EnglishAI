// English Learning Database
const ALPHABET_DATA = [
    { letter: 'A', phonetic: '/eɪ/', word: 'Apple', wordPhonetic: '/ˈæpl/', translation: 'Quả táo', emoji: '🍎', example: 'An apple a day keeps the doctor away.', exampleTranslation: 'Mỗi ngày một quả táo giúp bạn tránh xa bác sĩ.' },
    { letter: 'B', phonetic: '/biː/', word: 'Banana', wordPhonetic: '/bəˈnɑːnə/', translation: 'Quả chuối', emoji: '🍌', example: 'Monkeys love eating bananas.', exampleTranslation: 'Những chú khỉ rất thích ăn chuối.' },
    { letter: 'C', phonetic: '/siː/', word: 'Cat', wordPhonetic: '/kæt/', translation: 'Con mèo', emoji: '🐱', example: 'The cat is sleeping on the sofa.', exampleTranslation: 'Con mèo đang ngủ trên ghế sofa.' },
    { letter: 'D', phonetic: '/diː/', word: 'Dog', wordPhonetic: '/dɒɡ/', translation: 'Con chó', emoji: '🐶', example: 'Dogs are loyal friends.', exampleTranslation: 'Chó là những người bạn trung thành.' },
    { letter: 'E', phonetic: '/iː/', word: 'Elephant', wordPhonetic: '/ˈelɪfənt/', translation: 'Con voi', emoji: '🐘', example: 'The elephant is very big.', exampleTranslation: 'Con voi rất là to lớn.' },
    { letter: 'F', phonetic: '/ef/', word: 'Fish', wordPhonetic: '/fɪʃ/', translation: 'Con cá', emoji: '🐟', example: 'Fish swim in the water.', exampleTranslation: 'Cá bơi dưới nước.' },
    { letter: 'G', phonetic: '/dʒiː/', word: 'Grapes', wordPhonetic: '/ɡreɪps/', translation: 'Quả nho', emoji: '🍇', example: 'I like sweet purple grapes.', exampleTranslation: 'Tôi thích những quả nho tím ngọt ngào.' },
    { letter: 'H', phonetic: '/eɪtʃ/', word: 'House', wordPhonetic: '/haʊs/', translation: 'Ngôi nhà', emoji: '🏠', example: 'This is my warm little house.', exampleTranslation: 'Đây là ngôi nhà nhỏ ấm áp của tôi.' },
    { letter: 'I', phonetic: '/aɪ/', word: 'Ice-cream', wordPhonetic: '/ˈaɪs kriːm/', translation: 'Kem', emoji: '🍦', example: 'I love eating ice-cream in summer.', exampleTranslation: 'Tôi thích ăn kem vào mùa hè.' },
    { letter: 'J', phonetic: '/dʒeɪ/', word: 'Jellyfish', wordPhonetic: '/ˈdʒelifɪʃ/', translation: 'Con sứa', emoji: '🪼', example: 'Jellyfish glow in the dark ocean.', exampleTranslation: 'Sứa phát sáng trong lòng đại dương tăm tối.' },
    { letter: 'K', phonetic: '/keɪ/', word: 'Key', wordPhonetic: '/kiː/', translation: 'Chìa khóa', emoji: '🔑', example: 'Don\'t forget your house key.', exampleTranslation: 'Đừng quên chìa khóa nhà của bạn.' },
    { letter: 'L', phonetic: '/el/', word: 'Lion', wordPhonetic: '/ˈlaɪən/', translation: 'Sư tử', emoji: '🦁', example: 'The lion is the king of the jungle.', exampleTranslation: 'Sư tử là chúa tể của rừng xanh.' },
    { letter: 'M', phonetic: '/em/', word: 'Monkey', wordPhonetic: '/ˈmʌŋki/', translation: 'Con khỉ', emoji: '🐒', example: 'The monkey climbs trees fast.', exampleTranslation: 'Con khỉ trèo cây rất nhanh.' },
    { letter: 'N', phonetic: '/en/', word: 'Nest', wordPhonetic: '/nest/', translation: 'Tổ chim', emoji: '🪹', example: 'There are three eggs in the nest.', exampleTranslation: 'Có ba quả trứng ở trong tổ chim.' },
    { letter: 'O', phonetic: '/əʊ/', word: 'Orange', wordPhonetic: '/ˈɒrɪndʒ/', translation: 'Quả cam', emoji: '🍊', example: 'Orange juice is rich in Vitamin C.', exampleTranslation: 'Nước cam rất giàu Vitamin C.' },
    { letter: 'P', phonetic: '/piː/', word: 'Penguin', wordPhonetic: '/ˈpeŋɡwɪn/', translation: 'Chim cánh cụt', emoji: '🐧', example: 'Penguins cannot fly but swim well.', exampleTranslation: 'Chim cánh cụt không thể bay nhưng bơi rất giỏi.' },
    { letter: 'Q', phonetic: '/kjuː/', word: 'Queen', wordPhonetic: '/kwiːn/', translation: 'Nữ hoàng', emoji: '👑', example: 'The queen wears a golden crown.', exampleTranslation: 'Nữ hoàng đội một chiếc vương miện vàng.' },
    { letter: 'R', phonetic: '/ɑː(r)/', word: 'Rabbit', wordPhonetic: '/ˈræbɪt/', translation: 'Con thỏ', emoji: '🐰', example: 'The rabbit eats carrots.', exampleTranslation: 'Con thỏ ăn cà rốt.' },
    { letter: 'S', phonetic: '/es/', word: 'Sun', wordPhonetic: '/sʌn/', translation: 'Mặt trời', emoji: '☀️', example: 'The sun rises in the East.', exampleTranslation: 'Mặt trời mọc ở hướng Đông.' },
    { letter: 'T', phonetic: '/tiː/', word: 'Tiger', wordPhonetic: '/ˈtaɪɡə(r)/', translation: 'Con hổ', emoji: '🐯', example: 'Tigers have black stripes.', exampleTranslation: 'Hổ có những vằn màu đen.' },
    { letter: 'U', phonetic: '/juː/', word: 'Umbrella', wordPhonetic: '/ʌmˈbrelə/', translation: 'Cây dù / ô', emoji: '☂️', example: 'Take an umbrella, it is raining.', exampleTranslation: 'Hãy mang theo ô, trời đang mưa đó.' },
    { letter: 'V', phonetic: '/viː/', word: 'Violin', wordPhonetic: '/ˌvaɪəˈlɪn/', translation: 'Đàn vĩ cầm', emoji: '🎻', example: 'She plays the violin beautifully.', exampleTranslation: 'Cô ấy chơi đàn vĩ cầm rất hay.' },
    { letter: 'W', phonetic: '/ˈdʌbljuː/', word: 'Watermelon', wordPhonetic: '/ˈwɔːtəmelən/', translation: 'Dưa hấu', emoji: '🍉', example: 'Watermelon is sweet and juicy.', exampleTranslation: 'Dưa hấu rất ngọt và nhiều nước.' },
    { letter: 'X', phonetic: '/eks/', word: 'Xylophone', wordPhonetic: '/ˈzaɪləfəʊn/', translation: 'Đàn mộc cầm', emoji: '🪘', example: 'Children like playing the xylophone.', exampleTranslation: 'Trẻ em thích chơi đàn mộc cầm.' },
    { letter: 'Y', phonetic: '/waɪ/', word: 'Yacht', wordPhonetic: '/jɒt/', translation: 'Du thuyền', emoji: '⛵', example: 'They sail on a luxury yacht.', exampleTranslation: 'Họ đi du thuyền trên một chiếc du thuyền sang trọng.' },
    { letter: 'Z', phonetic: '/zed/', word: 'Zebra', wordPhonetic: '/ˈzebrə/', translation: 'Ngựa vằn', emoji: '🦓', example: 'Zebras live in the savanna.', exampleTranslation: 'Ngựa vằn sống ở thảo nguyên.' }
];

const IPA_DATA = {
    vowels: [
        { sound: 'iː', type: 'Nguyên âm đơn dài', guide: 'Mở miệng tự nhiên, môi hơi kéo sang hai bên như đang mỉm cười. Phát âm âm /i/ kéo dài hơi.', examples: [{ word: 'see', ipa: '/siː/', trans: 'nhìn' }, { word: 'meet', ipa: '/miːt/', trans: 'gặp gỡ' }, { word: 'key', ipa: '/kiː/', trans: 'chìa khóa' }] },
        { sound: 'ɪ', type: 'Nguyên âm đơn ngắn', guide: 'Mở miệng nhỏ hơn âm /iː/, môi thư giãn. Phát âm âm /i/ thật ngắn, dứt khoát.', examples: [{ word: 'sit', ipa: '/sɪt/', trans: 'ngồi' }, { word: 'him', ipa: '/hɪm/', trans: 'anh ấy' }, { word: 'big', ipa: '/bɪɡ/', trans: 'to lớn' }] },
        { sound: 'uː', type: 'Nguyên âm đơn dài', guide: 'Môi tròn và chu ra phía trước. Phát âm âm /u/ kéo dài hơi từ sâu trong cổ họng.', examples: [{ word: 'blue', ipa: '/bluː/', trans: 'màu xanh' }, { word: 'food', ipa: '/fuːd/', trans: 'thức ăn' }, { word: 'shoe', ipa: '/ʃuː/', trans: 'chiếc giày' }] },
        { sound: 'ʊ', type: 'Nguyên âm đơn ngắn', guide: 'Môi hơi tròn nhưng không chu ra. Phát âm âm /u/ thật ngắn và dứt khoát.', examples: [{ word: 'book', ipa: '/bʊk/', trans: 'cuốn sách' }, { word: 'good', ipa: '/ɡʊd/', trans: 'tốt' }, { word: 'foot', ipa: '/fʊt/', trans: 'bàn chân' }] },
        { sound: 'e', type: 'Nguyên âm đơn ngắn', guide: 'Mở miệng rộng hơn âm /ɪ/ một chút. Phát âm âm /e/ ngắn, gọn gàng.', examples: [{ word: 'pen', ipa: '/pen/', trans: 'bút viết' }, { word: 'bed', ipa: '/bed/', trans: 'chiếc giường' }, { word: 'help', ipa: '/help/', trans: 'giúp đỡ' }] },
        { sound: 'ə', type: 'Nguyên âm lười', guide: 'Mở miệng nhỏ, môi và lưỡi thả lỏng hoàn toàn. Phát âm âm nhẹ như "ơ" Việt Nam.', examples: [{ word: 'about', ipa: '/əˈbaʊt/', trans: 'về' }, { word: 'teacher', ipa: '/ˈtiːtʃə(r)/', trans: 'giáo viên' }, { word: 'banana', ipa: '/bəˈnɑːnə/', trans: 'quả chuối' }] },
        { sound: 'ɜː', type: 'Nguyên âm đơn dài', guide: 'Mở miệng tương tự âm /ə/ nhưng lưỡi hơi cong lên. Phát âm âm "ơ" kéo dài.', examples: [{ word: 'girl', ipa: '/ɡɜːl/', trans: 'cô gái' }, { word: 'bird', ipa: '/bɜːd/', trans: 'con chim' }, { word: 'learn', ipa: '/lɜːn/', trans: 'học tập' }] },
        { sound: 'ɔː', type: 'Nguyên âm đơn dài', guide: 'Tròn môi, lưỡi hơi kéo về phía sau. Phát âm âm "o" tròn và kéo dài.', examples: [{ word: 'door', ipa: '/dɔː(r)/', trans: 'cửa ra vào' }, { word: 'water', ipa: '/ˈwɔːtə(r)/', trans: 'nước' }, { word: 'ball', ipa: '/bɔːl/', trans: 'quả bóng' }] },
        { sound: 'æ', type: 'Nguyên âm bẹt', guide: 'Mở miệng rộng hết cỡ về cả chiều dọc và ngang. Phát âm lai giữa âm /a/ và /e/.', examples: [{ word: 'cat', ipa: '/kæt/', trans: 'con mèo' }, { word: 'sad', ipa: '/sæd/', trans: 'buồn bã' }, { word: 'apple', ipa: '/ˈæpl/', trans: 'quả táo' }] },
        { sound: 'ʌ', type: 'Nguyên âm đơn ngắn', guide: 'Mở miệng nhỏ hơn âm /æ/, hơi lai giữa âm /a/ và /ă/. Phát âm dứt khoát.', examples: [{ word: 'cup', ipa: '/kʌp/', trans: 'cái cốc' }, { word: 'bus', ipa: '/bʌs/', trans: 'xe buýt' }, { word: 'sun', ipa: '/sʌn/', trans: 'mặt trời' }] },
        { sound: 'ɑː', type: 'Nguyên âm đơn dài', guide: 'Mở miệng rộng tự nhiên theo chiều dọc. Phát âm âm /a/ kéo dài hơi từ cổ họng.', examples: [{ word: 'car', ipa: '/kɑː(r)/', trans: 'xe hơi' }, { word: 'father', ipa: '/ˈfɑːðə(r)/', trans: 'bố' }, { word: 'star', ipa: '/stɑː(r)/', trans: 'ngôi sao' }] },
        { sound: 'ɒ', type: 'Nguyên âm đơn ngắn', guide: 'Mở miệng tròn, lưỡi hạ thấp. Phát âm âm /o/ thật ngắn và dứt khoát.', examples: [{ word: 'hot', ipa: '/hɒt/', trans: 'nóng' }, { word: 'box', ipa: '/bɒks/', trans: 'chiếc hộp' }, { word: 'dog', ipa: '/dɒɡ/', trans: 'con chó' }] }
    ],
    diphthongs: [
        { sound: 'ɪə', type: 'Nguyên âm đôi', guide: 'Phát âm âm /ɪ/ rồi chuyển dần sang âm /ə/. Đọc nối mượt mà.', examples: [{ word: 'here', ipa: '/hɪə(r)/', trans: 'ở đây' }, { word: 'near', ipa: '/nɪə(r)/', trans: 'gần' }, { word: 'beer', ipa: '/bɪə(r)/', trans: 'bia' }] },
        { sound: 'eə', type: 'Nguyên âm đôi', guide: 'Phát âm âm /e/ rồi chuyển dần sang âm /ə/. Đọc nối mượt mà.', examples: [{ word: 'hair', ipa: '/heə(r)/', trans: 'tóc' }, { word: 'there', ipa: '/ðeə(r)/', trans: 'đằng kia' }, { word: 'wear', ipa: '/weə(r)/', trans: 'mặc' }] },
        { sound: 'ʊə', type: 'Nguyên âm đôi', guide: 'Phát âm âm /ʊ/ rồi chuyển dần sang âm /ə/. Đọc nối mượt mà.', examples: [{ word: 'tour', ipa: '/tʊə(r)/', trans: 'chuyến du lịch' }, { word: 'poor', ipa: '/pʊə(r)/', trans: 'nghèo' }, { word: 'cure', ipa: '/kjʊə(r)/', trans: 'chữa trị' }] },
        { sound: 'eɪ', type: 'Nguyên âm đôi', guide: 'Phát âm âm /e/ rồi chuyển dần sang âm /ɪ/. Giống âm "ây" nhưng kéo dài hơi.', examples: [{ word: 'day', ipa: '/deɪ/', trans: 'ngày' }, { word: 'say', ipa: '/seɪ/', trans: 'nói' }, { word: 'train', ipa: '/treɪn/', trans: 'tàu hỏa' }] },
        { sound: 'ɔɪ', type: 'Nguyên âm đôi', guide: 'Phát âm âm /ɔː/ rồi chuyển dần sang âm /ɪ/. Giống âm "oi" kéo dài.', examples: [{ word: 'boy', ipa: '/bɔɪ/', trans: 'cậu bé' }, { word: 'toy', ipa: '/tɔɪ/', trans: 'đồ chơi' }, { word: 'coin', ipa: '/kɔɪ/', trans: 'tiền xu' }] },
        { sound: 'aɪ', type: 'Nguyên âm đôi', guide: 'Phát âm âm /ɑː/ rồi chuyển dần sang âm /ɪ/. Giống âm "ai" kéo dài.', examples: [{ word: 'my', ipa: '/maɪ/', trans: 'của tôi' }, { word: 'fly', ipa: '/flaɪ/', trans: 'bay' }, { word: 'night', ipa: '/naɪt/', trans: 'ban đêm' }] },
        { sound: 'əʊ', type: 'Nguyên âm đôi', guide: 'Phát âm âm /ə/ rồi chuyển dần sang âm /ʊ/. Giống âm "âu" kéo dài.', examples: [{ word: 'go', ipa: '/ɡəʊ/', trans: 'đi' }, { word: 'no', ipa: '/nəʊ/', trans: 'không' }, { word: 'home', ipa: '/həʊm/', trans: 'nhà' }] },
        { sound: 'aʊ', type: 'Nguyên âm đôi', guide: 'Phát âm âm /ɑː/ rồi chuyển dần sang âm /ʊ/. Giống âm "ao" kéo dài.', examples: [{ word: 'now', ipa: '/naʊ/', trans: 'bây giờ' }, { word: 'cow', ipa: '/kaʊ/', trans: 'con bò' }, { word: 'house', ipa: '/haʊs/', trans: 'ngôi nhà' }] }
    ],
    consonants: [
        { sound: 'p', type: 'Phụ âm vô thanh', guide: 'Mím chặt hai môi, nén hơi lại rồi bật mạnh hơi ra ngoài (không rung dây thanh).', examples: [{ word: 'pen', ipa: '/pen/', trans: 'bút' }, { word: 'map', ipa: '/mæp/', trans: 'bản đồ' }] },
        { sound: 'b', type: 'Phụ âm hữu thanh', guide: 'Khẩu hình tương tự âm /p/ nhưng rung dây thanh quản khi bật âm.', examples: [{ word: 'bed', ipa: '/bed/', trans: 'giường' }, { word: 'cab', ipa: '/kæb/', trans: 'taxi' }] },
        { sound: 't', type: 'Phụ âm vô thanh', guide: 'Đặt đầu lưỡi ở chân răng trên, bật hơi mạnh ra ngoài (không rung dây thanh).', examples: [{ word: 'tea', ipa: '/tiː/', trans: 'trà' }, { word: 'cat', ipa: '/kæt/', trans: 'con mèo' }] },
        { sound: 'd', type: 'Phụ âm hữu thanh', guide: 'Khẩu hình tương tự âm /t/ nhưng rung dây thanh quản khi bật âm.', examples: [{ word: 'dog', ipa: '/dɒɡ/', trans: 'con chó' }, { word: 'red', ipa: '/red/', trans: 'màu đỏ' }] },
        { sound: 'f', type: 'Phụ âm vô thanh', guide: 'Đặt răng hàm trên chạm nhẹ vào môi dưới, đẩy hơi thoát ra qua kẽ răng.', examples: [{ word: 'fish', ipa: '/fɪʃ/', trans: 'con cá' }, { word: 'safe', ipa: '/seɪf/', trans: 'an toàn' }] },
        { sound: 'v', type: 'Phụ âm hữu thanh', guide: 'Khẩu hình tương tự âm /f/ nhưng rung dây thanh quản khi đẩy hơi.', examples: [{ word: 'van', ipa: '/væn/', trans: 'xe tải' }, { word: 'love', ipa: '/lʌv/', trans: 'yêu' }] },
        { sound: 'k', type: 'Phụ âm vô thanh', guide: 'Nâng phần sau của lưỡi chạm ngạc mềm, bật hơi mạnh ra từ cổ họng.', examples: [{ word: 'key', ipa: '/kiː/', trans: 'chìa khóa' }, { word: 'book', ipa: '/bʊk/', trans: 'sách' }] },
        { sound: 'ɡ', type: 'Phụ âm hữu thanh', guide: 'Khẩu hình tương tự âm /k/ nhưng rung dây thanh quản khi bật âm.', examples: [{ word: 'go', ipa: '/ɡəʊ/', trans: 'đi' }, { word: 'bag', ipa: '/bæɡ/', trans: 'cái túi' }] },
        { sound: 's', type: 'Phụ âm vô thanh', guide: 'Đặt hai hàm răng gần chạm nhau, đẩy hơi nhẹ qua khe giữa hai răng.', examples: [{ word: 'sun', ipa: '/sʌn/', trans: 'mặt trời' }, { word: 'bus', ipa: '/bʌs/', trans: 'xe buýt' }] },
        { sound: 'z', type: 'Phụ âm hữu thanh', guide: 'Khẩu hình tương tự âm /s/ nhưng rung dây thanh quản khi đẩy hơi.', examples: [{ word: 'zoo', ipa: '/zuː/', trans: 'sở thú' }, { word: 'buzz', ipa: '/bʌz/', trans: 'tiếng vo ve' }] },
        { sound: 'ʃ', type: 'Phụ âm vô thanh', guide: 'Chu môi tròn ra phía trước, đẩy hơi mạnh qua kẽ răng (âm "xì" nặng).', examples: [{ word: 'she', ipa: '/ʃiː/', trans: 'cô ấy' }, { word: 'fish', ipa: '/fɪʃ/', trans: 'con cá' }] },
        { sound: 'ʒ', type: 'Phụ âm hữu thanh', guide: 'Khẩu hình tương tự âm /ʃ/ nhưng rung dây thanh quản khi đẩy hơi.', examples: [{ word: 'vision', ipa: '/ˈvɪʒn/', trans: 'tầm nhìn' }, { word: 'casual', ipa: '/ˈkæʒuəl/', trans: 'bình thường' }] },
        { sound: 'tʃ', type: 'Phụ âm vô thanh', guide: 'Phát âm âm /t/ rồi chuyển nhanh sang âm /ʃ/, bật hơi mạnh ra ngoài.', examples: [{ word: 'chair', ipa: '/tʃeə(r)/', trans: 'cái ghế' }, { word: 'much', ipa: '/mʌtʃ/', trans: 'nhiều' }] },
        { sound: 'dʒ', type: 'Phụ âm hữu thanh', guide: 'Khẩu hình tương tự âm /tʃ/ nhưng rung dây thanh quản khi bật âm.', examples: [{ word: 'job', ipa: '/dʒɒb/', trans: 'công việc' }, { word: 'page', ipa: '/peɪdʒ/', trans: 'trang giấy' }] },
        { sound: 'θ', type: 'Phụ âm vô thanh', guide: 'Đặt đầu lưỡi giữa hai hàm răng, đẩy hơi nhẹ ra ngoài qua kẽ răng.', examples: [{ word: 'thin', ipa: '/θɪn/', trans: 'mỏng, gầy' }, { word: 'bath', ipa: '/bɑːθ/', trans: 'bồn tắm' }] },
        { sound: 'ð', type: 'Phụ âm hữu thanh', guide: 'Khẩu hình tương tự âm /θ/ nhưng rung dây thanh quản khi đẩy hơi.', examples: [{ word: 'this', ipa: '/ðɪs/', trans: 'cái này' }, { word: 'mother', ipa: '/ˈmʌðə(r)/', trans: 'mẹ' }] },
        { sound: 'm', type: 'Phụ âm mũi', guide: 'Mím môi, đẩy hơi thoát ra hoàn toàn bằng đường mũi (rung thanh quản).', examples: [{ word: 'my', ipa: '/maɪ/', trans: 'của tôi' }, { word: 'him', ipa: '/hɪm/', trans: 'anh ấy' }] },
        { sound: 'n', type: 'Phụ âm mũi', guide: 'Đặt đầu lưỡi chạm nướu răng trên, đẩy hơi thoát ra bằng đường mũi.', examples: [{ word: 'no', ipa: '/nəʊ/', trans: 'không' }, { word: 'sun', ipa: '/sʌn/', trans: 'mặt trời' }] },
        { sound: 'ŋ', type: 'Phụ âm mũi', guide: 'Chặn hơi ở phần cuống lưỡi và ngạc mềm, đẩy hơi thoát ra bằng đường mũi.', examples: [{ word: 'sing', ipa: '/sɪŋ/', trans: 'hát' }, { word: 'ring', ipa: '/rɪŋ/', trans: 'nhẫn' }] },
        { sound: 'h', type: 'Phụ âm vô thanh', guide: 'Mở miệng tự nhiên, thở hơi nhẹ ra từ cổ họng giống như đang thở dài.', examples: [{ word: 'home', ipa: '/həʊm/', trans: 'nhà' }, { word: 'hat', ipa: '/hæt/', trans: 'cái mũ' }] },
        { sound: 'l', type: 'Phụ âm bên', guide: 'Đặt đầu lưỡi chạm chân răng trên, luồng hơi đi ra qua hai bên cạnh lưỡi.', examples: [{ word: 'love', ipa: '/lʌv/', trans: 'yêu thương' }, { word: 'ball', ipa: '/bɔːl/', trans: 'quả bóng' }] },
        { sound: 'r', type: 'Phụ âm tiếp cận', guide: 'Cong đầu lưỡi về phía sau nhưng không chạm ngạc, đẩy hơi nhẹ ra ngoài.', examples: [{ word: 'red', ipa: '/red/', trans: 'màu đỏ' }, { word: 'run', ipa: '/rʌn/', trans: 'chạy' }] },
        { sound: 'w', type: 'Bán nguyên âm', guide: 'Tròn môi giống như phát âm âm /uː/ rồi mở nhanh môi để phát âm.', examples: [{ word: 'wet', ipa: '/wet/', trans: 'ẩm ướt' }, { word: 'win', ipa: '/wɪn/', trans: 'chiến thắng' }] },
        { sound: 'j', type: 'Bán nguyên âm', guide: 'Khẩu hình tương tự âm /iː/ rồi mở nhanh miệng để phát âm giống âm "d" nhẹ.', examples: [{ word: 'yes', ipa: '/jes/', trans: 'vâng, có' }, { word: 'you', ipa: '/juː/', trans: 'bạn' }] }
    ]
};

const GRAMMAR_DATA = [
    {
        id: 'present_simple',
        title: '1. Thì Hiện Tại Đơn (Present Simple)',
        desc: 'Dùng để diễn tả một sự thật hiển nhiên, một thói quen hoặc hành động lặp đi lặp lại ở hiện tại.',
        formula: {
            positive: 'S + V(s/es) | S + To Be (am/is/are)',
            negative: 'S + do/does + not + V_bare | S + To Be + not',
            question: 'Do/Does + S + V_bare? | To Be + S?'
        },
        signals: 'every day, always, usually, often, sometimes, never...',
        examples: [
            { eng: 'I walk to school every day.', vi: 'Tôi đi bộ đến trường mỗi ngày.' },
            { eng: 'The sun rises in the East.', vi: 'Mặt trời mọc ở hướng Đông.' }
        ]
    },
    {
        id: 'present_continuous',
        title: '2. Thì Hiện Tại Tiếp Diễn (Present Continuous)',
        desc: 'Dùng để diễn tả hành động đang xảy ra ngay tại thời điểm nói hoặc xung quanh thời điểm nói.',
        formula: {
            positive: 'S + am/is/are + V-ing',
            negative: 'S + am/is/are + not + V-ing',
            question: 'Am/Is/Are + S + V-ing?'
        },
        signals: 'now, right now, at the moment, Look!, Listen!...',
        examples: [
            { eng: 'I am learning English right now.', vi: 'Tôi đang học tiếng Anh ngay bây giờ.' },
            { eng: 'They are playing football at the moment.', vi: 'Lúc này họ đang chơi bóng đá.' }
        ]
    },
    {
        id: 'present_perfect',
        title: '3. Thì Hiện Tại Hoàn Thành (Present Perfect)',
        desc: 'Diễn tả hành động đã xảy ra trong quá khứ nhưng kết quả vẫn còn liên quan hoặc ảnh hưởng tới hiện tại.',
        formula: {
            positive: 'S + have/has + V3/ed',
            negative: 'S + have/has + not + V3/ed',
            question: 'Have/Has + S + V3/ed?'
        },
        signals: 'since, for, already, yet, just, ever, never, so far, recently...',
        examples: [
            { eng: 'I have lived here for five years.', vi: 'Tôi đã sống ở đây được 5 năm.' },
            { eng: 'She has already finished her homework.', vi: 'Cô ấy đã hoàn thành xong bài tập về nhà.' }
        ]
    },
    {
        id: 'present_perfect_continuous',
        title: '4. Thì Hiện Tại Hoàn Thành Tiếp Diễn (Present Perfect Continuous)',
        desc: 'Diễn tả hành động bắt đầu trong quá khứ, diễn ra liên tục và vẫn đang tiếp diễn ở hiện tại (nhấn mạnh tính liên tục).',
        formula: {
            positive: 'S + have/has + been + V-ing',
            negative: 'S + have/has + not + been + V-ing',
            question: 'Have/Has + S + been + V-ing?'
        },
        signals: 'all day, all week, since, for, recently...',
        examples: [
            { eng: 'I have been waiting for you for two hours.', vi: 'Tôi đã chờ bạn liên tục suốt hai tiếng đồng hồ rồi.' },
            { eng: 'It has been raining all morning.', vi: 'Trời đã mưa liên tục cả buổi sáng.' }
        ]
    },
    {
        id: 'past_simple',
        title: '5. Thì Quá Khứ Đơn (Past Simple)',
        desc: 'Dùng để diễn tả hành động đã xảy ra và kết thúc hoàn toàn trong quá khứ.',
        formula: {
            positive: 'S + V2/ed | S + was/were',
            negative: 'S + did + not + V_bare | S + was/were + not',
            question: 'Did + S + V_bare? | Was/Were + S?'
        },
        signals: 'yesterday, ago, last night/week/year, in + năm quá khứ...',
        examples: [
            { eng: 'I watched a good movie yesterday.', vi: 'Hôm qua tôi đã xem một bộ phim rất hay.' },
            { eng: 'Did you go to the party last week?', vi: 'Tuần trước bạn có đi dự tiệc không?' }
        ]
    },
    {
        id: 'past_continuous',
        title: '6. Thì Quá Khứ Tiếp Diễn (Past Continuous)',
        desc: 'Diễn tả hành động đang xảy ra tại một thời điểm cụ thể trong quá khứ, hoặc một hành động đang xảy ra thì hành động khác cắt ngang.',
        formula: {
            positive: 'S + was/were + V-ing',
            negative: 'S + was/were + not + V-ing',
            question: 'Was/Were + S + V-ing?'
        },
        signals: 'at + giờ + thời gian quá khứ (at 8 PM yesterday), when, while...',
        examples: [
            { eng: 'I was watching TV at 8 PM yesterday.', vi: 'Tôi đang xem TV lúc 8 giờ tối ngày hôm qua.' },
            { eng: 'While they were playing, it started to rain.', vi: 'Trong khi họ đang chơi thì trời bắt đầu mưa.' }
        ]
    },
    {
        id: 'past_perfect',
        title: '7. Thì Quá Khứ Hoàn Thành (Past Perfect)',
        desc: 'Diễn tả một hành động đã xảy ra và hoàn thành TRƯỚC một hành động khác trong quá khứ.',
        formula: {
            positive: 'S + had + V3/ed',
            negative: 'S + had + not + V3/ed',
            question: 'Had + S + V3/ed?'
        },
        signals: 'before, after, by the time, when...',
        examples: [
            { eng: 'He had gone out before I arrived.', vi: 'Anh ấy đã đi ra ngoài trước khi tôi đến.' },
            { eng: 'By the time we got to the cinema, the movie had started.', vi: 'Vào lúc chúng tôi đến rạp chiếu phim, bộ phim đã bắt đầu rồi.' }
        ]
    },
    {
        id: 'past_perfect_continuous',
        title: '8. Thì Quá Khứ Hoàn Thành Tiếp Diễn (Past Perfect Continuous)',
        desc: 'Diễn tả hành động xảy ra liên tục kéo dài trước một hành động quá khứ khác (nhấn mạnh tính liên tục của quá trình).',
        formula: {
            positive: 'S + had + been + V-ing',
            negative: 'S + had + not + been + V-ing',
            question: 'Had + S + been + V-ing?'
        },
        signals: 'before, until then, for + khoảng thời gian...',
        examples: [
            { eng: 'She had been working for three hours before she took a break.', vi: 'Cô ấy đã làm việc liên tục suốt ba tiếng trước khi nghỉ giải lao.' }
        ]
    },
    {
        id: 'future_simple',
        title: '9. Thì Tương Lai Đơn (Future Simple)',
        desc: 'Dùng để diễn tả hành động sẽ xảy ra trong tương lai quyết định ngay lúc nói, lời hứa hoặc dự đoán không căn cứ.',
        formula: {
            positive: 'S + will + V_bare',
            negative: 'S + will + not + V_bare (will not = won\'t)',
            question: 'Will + S + V_bare?'
        },
        signals: 'tomorrow, next week, in the future, think, believe...',
        examples: [
            { eng: 'I think it will rain tomorrow.', vi: 'Tôi nghĩ ngày mai trời sẽ mưa.' },
            { eng: 'I will help you with your homework.', vi: 'Tôi sẽ giúp bạn làm bài tập về nhà.' }
        ]
    },
    {
        id: 'future_continuous',
        title: '10. Thì Tương Lai Tiếp Diễn (Future Continuous)',
        desc: 'Diễn tả một hành động đang xảy ra tại một thời điểm cụ thể trong tương lai.',
        formula: {
            positive: 'S + will + be + V-ing',
            negative: 'S + will + not + be + V-ing',
            question: 'Will + S + be + V-ing?'
        },
        signals: 'at this time tomorrow, at + giờ + thời gian tương lai...',
        examples: [
            { eng: 'I will be flying to London at this time tomorrow.', vi: 'Tôi sẽ đang bay đến Luân Đôn vào giờ này ngày mai.' },
            { eng: 'She will be studying in the library tonight.', vi: 'Cô ấy sẽ đang học bài trong thư viện tối nay.' }
        ]
    },
    {
        id: 'future_perfect',
        title: '11. Thì Tương Lai Hoàn Thành (Future Perfect)',
        desc: 'Diễn tả một hành động sẽ được hoàn thành trước một thời điểm cụ thể ở tương lai.',
        formula: {
            positive: 'S + will + have + V3/ed',
            negative: 'S + will + not + have + V3/ed',
            question: 'Will + S + have + V3/ed?'
        },
        signals: 'by, by the time, by the end of + thời gian tương lai...',
        examples: [
            { eng: 'I will have finished my project by next Monday.', vi: 'Tôi sẽ hoàn thành xong dự án của mình trước thứ Hai tới.' },
            { eng: 'They will have left by the time you arrive.', vi: 'Họ sẽ đã rời đi vào lúc bạn đến.' }
        ]
    },
    {
        id: 'future_perfect_continuous',
        title: '12. Thì Tương Lai Hoàn Thành Tiếp Diễn (Future Perfect Continuous)',
        desc: 'Diễn tả một hành động xảy ra liên tục kéo dài đến một thời điểm cụ thể trong tương lai.',
        formula: {
            positive: 'S + will + have + been + V-ing',
            negative: 'S + will + not + have + been + V-ing',
            question: 'Will + S + have + been + V-ing?'
        },
        signals: 'by, by the time + for + khoảng thời gian...',
        examples: [
            { eng: 'By next month, I will have been working here for a year.', vi: 'Tính đến tháng sau, tôi sẽ làm việc ở đây liên tục tròn một năm.' }
        ]
    },
    {
        id: 'future_simple_past',
        title: '13. Tương Lai Đơn Trong Quá Khứ (Future Simple in the Past)',
        desc: 'Diễn tả một sự việc sẽ xảy ra trong tương lai nhìn từ một thời điểm trong quá khứ (thường dùng trong câu gián tiếp).',
        formula: {
            positive: 'S + would + V_bare',
            negative: 'S + would + not + V_bare',
            question: 'Would + S + V_bare?'
        },
        signals: 'said that, thought that, promised that...',
        examples: [
            { eng: 'He said he would visit me the next day.', vi: 'Anh ấy nói anh ấy sẽ đến thăm tôi vào ngày hôm sau.' },
            { eng: 'I knew you would pass the exam.', vi: 'Tôi đã biết là bạn sẽ thi đỗ mà.' }
        ]
    },
    {
        id: 'future_continuous_past',
        title: '14. Tương Lai Tiếp Diễn Trong Quá Khứ (Future Continuous in the Past)',
        desc: 'Diễn tả một hành động sẽ đang diễn ra tại một thời điểm cụ thể trong tương lai tính từ một mốc quá khứ.',
        formula: {
            positive: 'S + would + be + V-ing',
            negative: 'S + would + not + be + V-ing',
            question: 'Would + S + be + V-ing?'
        },
        signals: 'said that + at that time...',
        examples: [
            { eng: 'I knew that at 10 PM she would be sleeping.', vi: 'Tôi biết là lúc 10 giờ tối cô ấy sẽ đang ngủ.' }
        ]
    },
    {
        id: 'future_perfect_past',
        title: '15. Tương Lai Hoàn Thành Trong Quá Khứ (Future Perfect in the Past)',
        desc: 'Diễn tả một hành động sẽ được hoàn thành trước một thời điểm cụ thể trong tương lai tính từ quá khứ.',
        formula: {
            positive: 'S + would + have + V3/ed',
            negative: 'S + would + not + have + V3/ed',
            question: 'Would + S + have + V3/ed?'
        },
        signals: 'thought that + by the time...',
        examples: [
            { eng: 'They believed they would have completed the work by Friday.', vi: 'Họ tin rằng họ sẽ hoàn thành xong công việc trước thứ Sáu.' }
        ]
    },
    {
        id: 'future_perfect_continuous_past',
        title: '16. Tương Lai Hoàn Thành Tiếp Diễn Trong Quá Khứ (Future Perfect Continuous in the Past)',
        desc: 'Diễn tả hành động xảy ra liên tục trước một thời điểm trong tương lai nhìn từ một mốc quá khứ.',
        formula: {
            positive: 'S + would + have + been + V-ing',
            negative: 'S + would + not + have + been + V-ing',
            question: 'Would + S + have + been + V-ing?'
        },
        signals: 'said that + by + for + khoảng thời gian...',
        examples: [
            { eng: 'He said that by 2025 he would have been living in Hanoi for ten years.', vi: 'Anh ấy nói rằng tính đến năm 2025 anh ấy sẽ sống ở Hà Nội liên tục được mười năm.' }
        ]
    }
];

const EXERCISE_DATA = [
    {
        type: 'choice',
        question: 'Chọn từ thích hợp điền vào chỗ trống: "She ___ to the gym every afternoon."',
        options: ['go', 'goes', 'going', 'went'],
        answerIdx: 1,
        hint: 'Gợi ý: "She" là chủ ngữ số ít, hành động lặp lại mỗi chiều (every afternoon) dùng thì Hiện tại đơn.'
    },
    {
        type: 'choice',
        question: 'Chọn từ thích hợp điền vào chỗ trống: "We ___ learning English at the moment."',
        options: ['am', 'is', 'are', 'be'],
        answerIdx: 2,
        hint: 'Gợi ý: Trạng từ "at the moment" chỉ hành động đang xảy ra (Hiện tại tiếp diễn). Chủ ngữ "We" đi với "are".'
    },
    {
        type: 'choice',
        question: 'Chọn từ thích hợp điền vào chỗ trống: "They ___ a new car two days ago."',
        options: ['buy', 'buys', 'bought', 'buying'],
        answerIdx: 2,
        hint: 'Gợi ý: Trạng từ "two days ago" (2 ngày trước) chỉ hành động trong quá khứ. Cần dùng động từ cột 2 của "buy".'
    },
    {
        type: 'reorder',
        question: 'Sắp xếp các từ sau thành câu đúng: "English / speaks / very / she / well"',
        words: ['English', 'speaks', 'very', 'she', 'well'],
        answer: 'she speaks english very well',
        hint: 'Gợi ý: Câu khẳng định bắt đầu bằng Chủ ngữ (she) + Động từ (speaks) + Tân ngữ (English) + Trạng từ bổ nghĩa (very well).'
    },
    {
        type: 'reorder',
        question: 'Sắp xếp các từ sau thành câu đúng: "watching / they / TV / now / are"',
        words: ['watching', 'they', 'TV', 'now', 'are'],
        answer: 'they are watching tv now',
        hint: 'Gợi ý: Công thức Hiện tại tiếp diễn: S (they) + are + V-ing (watching) + Tân ngữ (TV) + Trạng từ (now).'
    },
    {
        type: 'translate',
        question: 'Dịch câu sau sang tiếng Anh: "Tôi muốn học tiếng Anh để giao tiếp với người nước ngoài."',
        answers: [
            'i want to learn english to communicate with foreigners',
            'i want to study english to talk to foreigners',
            'i want to learn english so i can speak to foreigners'
        ],
        hint: 'Gợi ý: "Muốn làm gì" = "want to V", "học tiếng Anh" = "learn/study English", "giao tiếp với" = "communicate with / talk to", "người nước ngoài" = "foreigners".'
    },
    {
        type: 'translate',
        question: 'Dịch câu sau sang tiếng Anh: "Bạn có thể nói chậm hơn một chút được không?"',
        answers: [
            'can you speak a bit slower please',
            'could you speak more slowly please',
            'can you speak slowly please',
            'could you speak slower please'
        ],
        hint: 'Gợi ý: "Bạn có thể..." = "Can you... / Could you...", "nói chậm hơn" = "speak slower / speak more slowly", "một chút" = "a bit / a little".'
    }
];

const SCENARIO_DATA = [
    {
        id: 'greeting',
        title: 'Chào hỏi & Làm quen (Greetings)',
        dialogue: [
            { speaker: 'A', text: 'Hello! How are you doing today?', ipa: '/həˈləʊ! haʊ ɑː juː ˈduːɪŋ təˈdeɪ?/', trans: 'Xin chào! Hôm nay bạn thế nào?' },
            { speaker: 'B', text: 'Hi! I am doing great, thank you. And you?', ipa: '/haɪ! aɪ æm ˈduːɪŋ ɡreɪt, θæŋk juː. ænd juː?/', trans: 'Chào bạn! Tôi rất tốt, cảm ơn. Còn bạn thì sao?' },
            { speaker: 'A', text: 'I am good. My name is Nam. What is your name?', ipa: '/aɪ æm ɡʊd. maɪ neɪm ɪz Nam. wɒt ɪz jɔː neɪm?/', trans: 'Tôi khỏe. Tên tôi là Nam. Tên bạn là gì?' },
            { speaker: 'B', text: 'Nice to meet you, Nam. I am David, from England.', ipa: '/naɪs tu miːt juː, Nam. aɪ æm ˈdeɪvɪd, frɒm ˈɪŋŋɡlənd./', trans: 'Rất vui được gặp bạn, Nam. Tôi là David, đến từ nước Anh.' },
            { speaker: 'A', text: 'Nice to meet you too, David. Welcome to Vietnam! Is this your first time here?', ipa: '/naɪs tu miːt juː tuː, ˈdeɪvɪd. ˈwelkəm tu ˌvjetˈnæm! ɪz ðɪs jɔː fɜːst taɪm hɪə(r)?/', trans: 'Tôi cũng rất vui được gặp bạn, David. Chào mừng đến với Việt Nam! Đây là lần đầu tiên bạn tới đây à?' },
            { speaker: 'B', text: 'Yes, it is my first time in Hanoi. The city is very lively and beautiful.', ipa: '/jes, ɪt ɪz maɪ fɜːst taɪm ɪn hæˈnɔɪ. ðə ˈsɪti ɪz ˈveri ˈlaɪvli ænd ˈbjuːtɪfl./', trans: 'Vâng, đây là lần đầu của tôi ở Hà Nội. Thành phố này rất nhộn nhịp và đẹp đẽ.' },
            { speaker: 'A', text: 'I am glad you like it. How long will you stay in Vietnam?', ipa: '/aɪ æm ɡlæd juː laɪk ɪt. haʊ lɒŋ wɪl juː steɪ ɪn ˌvjetˈnæm?/', trans: 'Tôi rất vui vì bạn thích nơi này. Bạn định ở lại Việt Nam trong bao lâu?' },
            { speaker: 'B', text: 'I will be here for two weeks. I plan to visit Ha Long Bay and Da Nang next.', ipa: '/aɪ wɪl bi hɪə(r) fɔː(r) tuː wiːks. aɪ plæn tu ˈvɪzɪt Ha Long Bay ænd Da Nang nekst./', trans: 'Tôi sẽ ở đây trong hai tuần. Tôi lên kế hoạch đi thăm Vịnh Hạ Long và Đà Nẵng tiếp theo.' },
            { speaker: 'A', text: 'That sounds like a wonderful trip! If you need any recommendations, just ask.', ipa: '/ðæt saʊndz laɪk ə ˈwʌndəfl trɪp! ɪf juː niːd ˈeni ˌrekəmenˈdeɪʃnz, dʒʌst ɑːsk./', trans: 'Nghe có vẻ là một chuyến đi tuyệt vời đó! Nếu cần gợi ý gì, cứ hỏi tôi nhé.' },
            { speaker: 'B', text: 'Thank you so much, Nam. That is very kind of you!', ipa: '/θæŋk juː səʊ mʌtʃ, Nam. ðæt ɪz ˈveri kaɪnd ɒv juː!/', trans: 'Cảm ơn bạn rất nhiều, Nam. Bạn thật là tốt bụng!' }
        ],
        phrases: [
            { eng: 'How is it going?', trans: 'Dạo này thế nào rồi?' },
            { eng: 'Pleasure to meet you.', trans: 'Rất hân hạnh được gặp bạn.' },
            { eng: 'Where do you come from?', trans: 'Bạn đến từ đâu?' },
            { eng: 'How long have you been in Vietnam?', trans: 'Bạn ở Việt Nam được bao lâu rồi?' }
        ]
    },
    {
        id: 'restaurant',
        title: 'Tại nhà hàng (At a Restaurant)',
        dialogue: [
            { speaker: 'Waiter', text: 'Hello! Welcome to our restaurant. Are you ready to order?', ipa: '/həˈləʊ! ˈwelkəm tu ˈaʊə(r) ˈrestrɒnt. ɑː(r) juː ˈredi tu ˈɔːdə(r)?/', trans: 'Xin chào! Chào mừng quý khách đến với nhà hàng. Quý khách đã sẵn sàng gọi món chưa?' },
            { speaker: 'Customer', text: 'Yes, please. I would like a beefsteak and a Coca-cola.', ipa: '/yes, pliːz. aɪ wʊd laɪk ə biːfsteɪk ænd ə ˈcəʊkə ˈcəʊlə./', trans: 'Vâng. Tôi muốn gọi một phần bít tết bò và một lon Coca.' },
            { speaker: 'Waiter', text: 'How would you like your steak? Rare, medium, or well-done?', ipa: '/haʊ wʊd juː laɪk jɔː steɪk? reə(r), ˈmiːdiəm, ɔː(r) wel dʌn?/', trans: 'Quý khách muốn bít tết thế nào ạ? Tái, chín vừa, hay chín kỹ?' },
            { speaker: 'Customer', text: 'Medium, please. And could I have some garlic bread on the side?', ipa: '/ˈmiːdiəm, pliːz. ænd kʊd aɪ hæv sʌm ˈɡɑːlɪk bred ɒn ðə saɪd?/', trans: 'Chín vừa nhé. Và cho tôi thêm một ít bánh mì tỏi ăn kèm được không?' },
            { speaker: 'Waiter', text: 'Certainly. Would you like a salad or French fries with that?', ipa: '/ˈsɜːtnli. wʊd juː laɪk ə ˈsæləd ɔː(r) frentʃ fraɪz wɪð ðæt?/', trans: 'Chắc chắn rồi ạ. Quý khách muốn ăn kèm xà lách trộn hay khoai tây chiên?' },
            { speaker: 'Customer', text: 'French fries, please. Also, could I get some extra napkins and hot sauce?', ipa: '/frentʃ fraɪz, pliːz. ˈɔːlsəʊ, kʊd aɪ ɡet sʌm ˈekstrə ˈnæpkɪnz ænd hɒt sɔːs?/', trans: 'Cho tôi khoai tây chiên nhé. Ngoài ra, cho tôi xin thêm ít khăn giấy và tương ớt được không?' },
            { speaker: 'Waiter', text: 'Sure thing. I will bring those out for you shortly.', ipa: '/ʃɔː(r) θɪŋ. aɪ wɪl brɪŋ ðəʊz aʊt fɔː(r) juː ˈʃɔːtli./', trans: 'Dạ được chứ ạ. Tôi sẽ mang những thứ đó ra cho quý khách ngay.' },
            { speaker: 'Customer', text: 'Thank you. By the way, does this dish contain any peanuts? I am allergic.', ipa: '/θæŋk juː. baɪ ðə weɪ, dʌz ðɪs dɪʃ kənˈteɪn ˈeni ˈpiːnʌts? aɪ æm əˈlɜːdʒɪk./', trans: 'Cảm ơn. Tiện thể cho hỏi món này có chứa đậu phộng không? Tôi bị dị ứng.' },
            { speaker: 'Waiter', text: 'No, it doesn\'t. We will make sure your meal is completely peanut-free.', ipa: '/nəʊ, ɪt dʌznt. wiː wɪl meɪk ʃɔː(r) jɔː miːl ɪz kəmˈpliːtli ˈpiːnʌt friː./', trans: 'Dạ không có đâu ạ. Chúng tôi sẽ đảm bảo bữa ăn của quý khách hoàn toàn không có đậu phộng.' },
            { speaker: 'Customer', text: 'Excellent. Thank you for your help!', ipa: '/ˈeksələnt. θæŋk juː fɔː(r) jɔː help!/', trans: 'Tuyệt vời. Cảm ơn sự giúp đỡ của bạn!' }
        ],
        phrases: [
            { eng: 'Can I see the menu, please?', trans: 'Cho tôi xem thực đơn được không?' },
            { eng: 'What do you recommend?', trans: 'Bạn gợi ý món nào ngon?' },
            { eng: 'Could we have the bill, please?', trans: 'Cho chúng tôi thanh toán hóa đơn với?' },
            { eng: 'Keep the change.', trans: 'Cứ giữ lại tiền thừa nhé (khi boa tiền).' }
        ]
    },
    {
        id: 'directions',
        title: 'Hỏi đường (Asking for Directions)',
        dialogue: [
            { speaker: 'Tourist', text: 'Excuse me, could you tell me how to get to the lake?', ipa: '/ɪkˈskjuːs miː, kʊd juː tel miː haʊ tu ɡet tu ðə leɪk?/', trans: 'Xin lỗi, bạn có thể chỉ tôi đường ra hồ được không?' },
            { speaker: 'Local', text: 'Yes. Go straight along this street for about two hundred meters.', ipa: '/yes. ɡəʊ streɪt əˈlɒŋ ðɪs striːt fɔː(r) əˈbaʊt tuː ˈhʌndrəd ˈmiːtəz./', trans: 'Vâng. Hãy đi thẳng theo con đường này khoảng hai trăm mét.' },
            { speaker: 'Tourist', text: 'Is it on the left or the right side?', ipa: '/ɪz ɪt ɒn ðə left ɔː(r) ðə raɪt saɪd?/', trans: 'Nó nằm ở bên trái hay bên phải đường vậy?' },
            { speaker: 'Local', text: 'At the traffic light, turn left. You will see a big yellow building.', ipa: '/æt ðə ˈtræfɪk laɪt, tɜːn left. juː wɪl siː ə bɪɡ ˈjeləʊ ˈbɪldɪŋ./', trans: 'Ở cột đèn giao thông tiếp theo, hãy rẽ trái. Bạn sẽ thấy một tòa nhà lớn màu vàng.' },
            { speaker: 'Tourist', text: 'Is the lake behind that building?', ipa: '/ɪz ðə leɪk bɪˈhaɪnd ðæt ˈbɪldɪŋ?/', trans: 'Hồ nước nằm ở phía sau tòa nhà đó phải không?' },
            { speaker: 'Local', text: 'Yes, just walk past the building and the lake is right in front of you.', ipa: '/yes, dʒʌst wɔːk pɑːst ðə ˈbɪldɪŋ ænd ðə leɪk ɪz raɪt ɪn frʌnt ɒv juː./', trans: 'Đúng vậy, chỉ cần đi bộ qua tòa nhà đó và hồ nước sẽ nằm ngay trước mặt bạn.' },
            { speaker: 'Tourist', text: 'Is it far? Can I walk there or should I take a taxi?', ipa: '/ɪz ɪt fɑː(r)? kæn aɪ wɔːk ðeə(r) ɔː(r) ʃʊd aɪ teɪk ə ˈtæksi?/', trans: 'Nó có xa không? Tôi đi bộ được không hay nên bắt taxi?' },
            { speaker: 'Local', text: 'It is very close, only about a five-minute walk. You don\'t need a taxi.', ipa: '/t ɪz ˈveri kləʊs, ˈəʊnli əˈbaʊt ə faɪv ˈmɪnɪt wɔːk. juː dəʊnt niːd ə ˈtæksi./', trans: 'Nó rất gần, chỉ khoảng 5 phút đi bộ thôi. Bạn không cần đi taxi đâu.' },
            { speaker: 'Tourist', text: 'Great! Thank you so much for your help.', ipa: '/ɡreɪt! θæŋk juː səʊ mʌtʃ fɔː(r) jɔː help./', trans: 'Tuyệt quá! Cảm ơn bạn rất nhiều vì đã giúp đỡ.' },
            { speaker: 'Local', text: 'You are welcome. Enjoy your walk around the lake!', ipa: '/juː ɑː(r) ˈwelkəm. ɪnˈdʒɔɪ jɔː wɔːk əˈraʊnd ðə leɪk!/', trans: 'Không có chi. Chúc bạn đi bộ quanh hồ vui vẻ nhé!' }
        ],
        phrases: [
            { eng: 'Excuse me, am I on the right way to the airport?', trans: 'Xin lỗi, tôi có đang đi đúng đường ra sân bay không?' },
            { eng: 'Is it far from here?', trans: 'Nó có xa đây không?' },
            { eng: 'How long does it take to walk there?', trans: 'Đi bộ ra đó mất bao lâu?' },
            { eng: 'Turn left at the next traffic light.', trans: 'Rẽ trái ở cột đèn giao thông tiếp theo.' }
        ]
    },
    {
        id: 'shopping',
        title: 'Mua sắm (Shopping)',
        dialogue: [
            { speaker: 'Shop Assistant', text: 'Hi there! Can I help you find anything?', ipa: '/haɪ ðeə(r)! kæn aɪ help juː faɪnd ˈenɪθɪŋ?/', trans: 'Chào anh/chị! Tôi có thể giúp tìm gì không ạ?' },
            { speaker: 'Customer', text: 'Hi, I am looking for a blue T-shirt. Do you have this in medium?', ipa: '/haɪ, aɪ æm ˈlʊkɪŋ fɔː(r) ə bluː ˈtiː ʃɜːt. duː juː hæv ðɪs ɪn ˈmiːdiəm?/', trans: 'Chào bạn, tôi đang tìm một chiếc áo thun màu xanh dương. Bạn có mẫu này size M không?' },
            { speaker: 'Shop Assistant', text: 'Yes, we do. Let me check the rack... here is a medium blue one.', ipa: '/jes, wiː duː. let miː tʃek ðə ræk... hɪə(r) ɪz ə ˈmiːdiəm bluː wʌn./', trans: 'Vâng chúng tôi có. Để tôi kiểm tra trên giá treo... đây là một chiếc size M màu xanh.' },
            { speaker: 'Customer', text: 'Thanks. Where are the changing rooms? I want to try it on.', ipa: '/θæŋks. weə(r) ɑː(r) ðə ˈtʃeɪndʒɪŋ ruːmz? aɪ wɒnt tu traɪ ɪt ɒn./', trans: 'Cảm ơn. Phòng thử đồ ở đâu vậy bạn? Tôi muốn mặc thử nó.' },
            { speaker: 'Shop Assistant', text: 'The changing rooms are right over there, next to the mirrors.', ipa: '/ðə ˈtʃeɪndʒɪŋ ruːmz ɑː(r) raɪt ˈəʊvə(r) ðeə(r), nekst tu ðə ˈmɪrəz./', trans: 'Phòng thử đồ ở ngay đằng kia kìa, kế bên mấy tấm gương.' },
            { speaker: 'Customer', text: 'It fits perfectly. Do you have it in white as well?', ipa: '/ii fɪts ˈpɜːfɪktli. duː juː hæv ɪt ɪn waɪt æz wel?/', trans: 'Nó vừa vặn hoàn hảo luôn. Bạn có mẫu này màu trắng luôn không?' },
            { speaker: 'Shop Assistant', text: 'Yes, we have it in white, black, and red. Would you like to see them?', ipa: '/jes, wiː hæv ɪt ɪn waɪt, blæk, ænd red. wʊd juː laɪk tu siː ðem?/', trans: 'Dạ có, chúng tôi có màu trắng, đen và đỏ. Bạn có muốn xem thử không?' },
            { speaker: 'Customer', text: 'No, I will just take this blue one. How much is it?', ipa: '/nəʊ, aɪ wɪl dʒʌst teɪk ðɪs bluː wʌn. haʊ mʌtʃ ɪz ɪt?/', trans: 'Không cần đâu, tôi sẽ lấy chiếc màu xanh này thôi. Giá bao nhiêu vậy?' },
            { speaker: 'Shop Assistant', text: 'It is fifteen dollars. We are having a ten percent discount today.', ipa: '/ɪt ɪz ˌfɪfˈtiːn ˈdɒləz. wiː ɑː(r) ˈhævɪŋ ə ten pə ˈsent ˈdɪskaʊnt təˈdeɪ./', trans: 'Nó có giá 15 đô la. Hôm nay chúng tôi đang có chương trình giảm giá 10%.' },
            { speaker: 'Customer', text: 'Perfect. Can I pay by credit card?', ipa: '/ˈpɜːfɪkt. kæn aɪ peɪ baɪ ˈkredɪt kɑːd?/', trans: 'Tuyệt vời. Tôi thanh toán bằng thẻ tín dụng được chứ?' },
            { speaker: 'Shop Assistant', text: 'Yes, we accept all major credit cards. Please tap here.', ipa: '/jes, wiː əkˈsept ɔːl ˈmeɪdʒə(r) ˈkredɪt kɑːdz. pliːz tæp hɪə(r)./', trans: 'Vâng, chúng tôi nhận tất cả các loại thẻ lớn. Xin mời chạm thẻ ở đây.' }
        ],
        phrases: [
            { eng: 'Can I pay by credit card?', trans: 'Tôi có thể thanh toán bằng thẻ tín dụng không?' },
            { eng: 'Do you have this in another color?', trans: 'Mẫu này có màu khác không?' },
            { eng: 'It is too expensive, can you give me a discount?', trans: 'Nó đắt quá, bạn có thể bớt giá không?' },
            { eng: 'I will take this one.', trans: 'Tôi sẽ lấy cái này.' }
        ]
    },
    {
        id: 'hotel',
        title: 'Nhận phòng khách sạn (Hotel Check-in)',
        dialogue: [
            { speaker: 'Receptionist', text: 'Welcome to Royal Hotel. How can I help you?', ipa: '/ˈwelkəm tu ˈrɔɪəl həʊˈtel. haʊ kæn aɪ help juː?/', trans: 'Chào mừng quý khách đến với Khách sạn Hoàng Gia. Tôi có thể giúp gì cho quý khách?' },
            { speaker: 'Guest', text: 'Hi, I have a reservation under the name of Nguyen.', ipa: '/haɪ, aɪ hæv ə ˌrezəˈveɪʃn ˈʌndə(r) ðə neɪm ɒv Nguyen./', trans: 'Chào bạn, tôi có đặt phòng trước dưới tên Nguyễn.' },
            { speaker: 'Receptionist', text: 'Yes, Mr. Nguyen. A double room for three nights. Is that correct?', ipa: '/jes, ˈmɪstə(r) Nguyen. ə ˈdʌbl ruːm fɔː(r) θriː naɪts. ɪz ðæt kəˈrekt?/', trans: 'Vâng, thưa ông Nguyễn. Một phòng đôi trong ba đêm. Đúng không ạ?' },
            { speaker: 'Guest', text: 'Yes, that is correct. Does the room have free Wi-Fi?', ipa: '/jes, ðæt ɪz kəˈrekt. dʌz ðə ruːm hæv friː ˈwaɪ faɪ?/', trans: 'Vâng, đúng vậy. Phòng có Wi-Fi miễn phí không bạn?' },
            { speaker: 'Receptionist', text: 'Yes, it does. The password is on the keycard pocket.', ipa: '/jes, ɪt dʌz. ðə ˈpɑːswɜːd ɪz ɒn ðə ˈkiːkɑːd ˈpɒkɪt./', trans: 'Vâng, có ạ. Mật khẩu Wi-Fi ghi ở trên phong bì đựng thẻ phòng.' },
            { speaker: 'Guest', text: 'Great. What time is breakfast served in the morning?', ipa: '/ɡreɪt. wɒt taɪm ɪz ˈbrekfəst sɜːvd ɪn ðə ˈmɔːnɪŋ?/', trans: 'Tuyệt. Bữa sáng được phục vụ vào lúc mấy giờ thế?' },
            { speaker: 'Receptionist', text: 'Breakfast is served from 6:30 to 10:00 AM in the restaurant on the first floor.', ipa: '/ˈbrekfəst ɪz sɜːvd frɒm sɪks ˈθɜːti tu ten eɪ em ɪn ðə ˈrestrɒnt ɒn ðə fɜːst flɔː(r)./', trans: 'Dạ bữa sáng phục vụ từ 6:30 đến 10:00 sáng tại nhà hàng ở tầng một.' },
            { speaker: 'Guest', text: 'Perfect. Also, can I request a room with a city view?', ipa: '/ˈpɜːfɪkt. ˈɔːlsəʊ, kæn aɪ rɪˈkwest ə ruːm wɪð ə ˈsɪti vjuː?/', trans: 'Tuyệt vời. Thêm nữa, tôi có thể yêu cầu phòng có hướng nhìn ra thành phố không?' },
            { speaker: 'Receptionist', text: 'Let me check... Yes, room 502 has a nice city view. Here is your keycard.', ipa: '/let miː tʃek... jes, ruːm faɪv əʊ tuː hæv ə naɪs ˈsɪti vjuː. hɪə(r) ɪz jɔː ˈkiːkɑːd./', trans: 'Để tôi kiểm tra xem... Vâng, phòng 502 có hướng nhìn thành phố rất đẹp. Đây là thẻ phòng của ông.' },
            { speaker: 'Guest', text: 'Thank you. Can someone help me with my bags?', ipa: '/θæŋk juː. kæn ˈsʌmwʌn help miː wɪð maɪ bæɡz?/', trans: 'Cảm ơn bạn. Có ai giúp tôi mang hành lý lên được không?' },
            { speaker: 'Receptionist', text: 'Of course, the bellboy will bring your luggage up to your room shortly.', ipa: '/ɒv kɔːs, ðə ˈbelbɔɪ wɪl brɪŋ jɔː ˈlʌɡɪdʒ ʌp tu jɔː ruːm ˈʃɔːtli./', trans: 'Dạ tất nhiên rồi, nhân viên hành lý sẽ mang đồ lên phòng cho ông ngay lập tức.' }
        ],
        phrases: [
            { eng: 'What time is check-out?', trans: 'Giờ trả phòng là mấy giờ?' },
            { eng: 'Can I leave my luggage here?', trans: 'Tôi có thể gửi hành lý ở đây được không?' },
            { eng: 'Could I have an extra key, please?', trans: 'Cho tôi xin thêm một thẻ khóa phòng được không?' },
            { eng: 'The air conditioner is not working.', trans: 'Máy điều hòa trong phòng không hoạt động.' }
        ]
    },
    {
        id: 'cafe',
        title: 'Tại quán Cà phê (At a Coffee Shop)',
        dialogue: [
            { speaker: 'Barista', text: 'Hello! What can I get for you today?', ipa: '/həˈləʊ! wɒt kæn aɪ ɡet fɔː(r) juː təˈdeɪ?/', trans: 'Xin chào! Hôm nay tôi có thể lấy nước gì cho bạn?' },
            { speaker: 'Customer', text: 'Hi! I would like a Vietnamese iced coffee with condensed milk, please.', ipa: '/haɪ! aɪ wʊd laɪk ə ˌvjetnəˈmiːz aɪst ˈkɒfi wɪð kənˈdenst mɪlk, pliːz./', trans: 'Chào bạn! Cho tôi một ly cà phê sữa đá Việt Nam nhé.' },
            { speaker: 'Barista', text: 'Sure. Do you want it sweet or less sugar?', ipa: '/ʃɔː(r). duː juː wɒnt ɪt swiːt ɔː(r) les ˈʃʊɡə(r)?/', trans: 'Dạ được. Bạn muốn ngọt nhiều hay ít đường?' },
            { speaker: 'Customer', text: 'Less sugar and lots of ice, please.', ipa: '/les ˈʃʊɡə(r) ænd lɒts ɒv aɪs, pliːz./', trans: 'Ít đường và nhiều đá nhé.' },
            { speaker: 'Barista', text: 'Got it. Would you like a pastry or a slice of cake with that?', ipa: '/ɡɒt ɪt. wʊd juː laɪk ə ˈpeɪstri ɔː(r) ə slaɪs ɒv keɪk wɪð ðæt?/', trans: 'Tôi nhớ rồi. Bạn có muốn dùng kèm bánh ngọt hay một lát bánh kem không?' },
            { speaker: 'Customer', text: 'Hmm, the chocolate croissant looks delicious. I will take one.', ipa: '/həm, ðə ˈtʃɒklət krwɑːˈsɒ̃ lʊks dɪˈlɪʃəs. aɪ wɪl teɪk wʌn./', trans: 'Ừm, bánh sừng bò sô-cô-la trông ngon quá. Cho tôi lấy một cái nhé.' },
            { speaker: 'Barista', text: 'Excellent choice. Do you want to eat here or is it to go?', ipa: '/ˈeksələnt tʃɔɪs. duː juː wɒnt tu iːt hɪə(r) ɔː(r) ɪz ɪt tu ɡəʊ?/', trans: 'Lựa chọn tuyệt vời. Bạn muốn dùng tại đây hay mang đi?' },
            { speaker: 'Customer', text: 'I will drink and eat here. Is there free Wi-Fi?', ipa: '/aɪ wɪl drɪŋk ænd iːt hɪə(r). ɪz ðeə(r) friː ˈwaɪ faɪ?/', trans: 'Tôi sẽ ăn uống ở đây luôn. Ở đây có Wi-Fi miễn phí không?' },
            { speaker: 'Barista', text: 'Yes, the Wi-Fi name is "Cafe_Free" and there is no password.', ipa: '/yes, ðə ˈwaɪ faɪ neɪm ɪz Cafe_Free ænd ðeə(r) ɪz nəʊ ˈpɑːswɜːd./', trans: 'Dạ có, tên Wi-Fi là "Cafe_Free" và không có mật khẩu đâu ạ.' },
            { speaker: 'Customer', text: 'Great, thank you. How much is the total?', ipa: '/ɡreɪt, θæŋk juː. haʊ mʌtʃ ɪz ðə ˈtəʊtl?/', trans: 'Tuyệt, cảm ơn bạn. Tổng cộng hết bao nhiêu tiền thế?' },
            { speaker: 'Barista', text: 'That will be fifty thousand Dong in total. You can pay by cash or QR code.', ipa: '/ðæt wɪl bi ˈfɪfti ˈθaʊznd dɒŋ ɪn ˈtəʊtl. juː kæn peɪ baɪ kæʃ ɔː(r) kjuː ɑː(r) kəʊd./', trans: 'Dạ của bạn tổng cộng là 50 nghìn Đồng. Bạn có thể thanh toán bằng tiền mặt hoặc quét mã QR.' }
        ],
        phrases: [
            { eng: 'Can I get this to go, please?', trans: 'Cho tôi mang đi/mang về nhé.' },
            { eng: 'Do you have free Wi-Fi here?', trans: 'Ở đây có Wi-Fi miễn phí không?' },
            { eng: 'What is the Wi-Fi password?', trans: 'Mật khẩu Wi-Fi là gì vậy?' },
            { eng: 'No sugar, please.', trans: 'Làm ơn không cho đường.' }
        ]
    },
    {
        id: 'local_food',
        title: 'Giới thiệu Ẩm thực Việt Nam (Recommending Local Food)',
        dialogue: [
            { speaker: 'Foreigner', text: 'Hi! I am new here. What Vietnamese food should I try?', ipa: '/haɪ! aɪ æm njuː hɪə(r). wɒt ˌvjetnəˈmiːz fuːd ʃʊd aɪ traɪ?/', trans: 'Chào bạn! Tôi mới đến đây. Tôi nên thử món ăn Việt Nam nào nhỉ?' },
            { speaker: 'Local', text: 'You must try Pho. It is our traditional noodle soup.', ipa: '/juː mʌst traɪ fɜː. ɪt ɪz ˈaʊə(r) trəˈdɪʃənl ˈnuːdl suːp./', trans: 'Bạn nhất định phải thử Phở nhé. Đó là món súp sợi truyền thống của chúng tôi.' },
            { speaker: 'Foreigner', text: 'Great! What else do you recommend?', ipa: '/ɡreɪt! wɒt els duː juː ˌrekəˈmend?/', trans: 'Tuyệt quá! Bạn có gợi ý thêm món nào khác nữa không?' },
            { speaker: 'Local', text: 'You should also try Banh Mi and Bun Cha. They are very popular and delicious.', ipa: '/juː ʃʊd ˈɔːlsəʊ traɪ Banh Mi ænd Bun Cha. ðeɪ ɑː(r) ˈveri ˈpɒpjələ(r) ænd dɪˈlɪʃəs./', trans: 'Bạn cũng nên thử Bánh Mì và Bún Chả. Chúng rất phổ biến và ngon miệng.' },
            { speaker: 'Foreigner', text: 'I heard about Bun Cha. Is it the one with grilled pork and noodles?', ipa: '/aɪ hɜːd əˈbaʊt Bun Cha. ɪz ɪt ðə wʌn wɪð ɡrɪld pɔːk ænd ˈnuːdlz?/', trans: 'Tôi có nghe nói về Bún Chả. Có phải món có thịt lợn nướng và bún ăn kèm không?' },
            { speaker: 'Local', text: 'Yes, that is right! You dip the noodles and herbs into a warm, sweet sauce.', ipa: '/yes, ðæt ɪz raɪt! juː dɪp ðə ˈnuːdlz ænd hɜːbz ˈɪntə ə wɔːm, swiːt sɔːs./', trans: 'Đúng rồi đó! Bạn sẽ nhúng bún và rau thơm vào một bát nước chấm ấm và ngọt nhẹ.' },
            { speaker: 'Foreigner', text: 'Sounds amazing! Where is the best place to try it near here?', ipa: '/saʊndz əˈmeɪzɪŋ! weə(r) ɪz ðə best pleɪs tu traɪ ɪt nɪə(r) hɪə(r)?/', trans: 'Nghe tuyệt thật! Quán nào ăn ngon nhất ở gần đây vậy bạn?' },
            { speaker: 'Local', text: 'There is a famous local restaurant just a ten-minute walk from here. I can write down the address.', ipa: '/ðeə(r) ɪz ə ˈfeɪməs ˈləʊkl ˈrestrɒnt dʒʌst ə ten ˈmɪnɪt wɔːk frɒm hɪə(r). aɪ kæn raɪt daʊn ðə əˈdres./', trans: 'Có một quán địa phương rất nổi tiếng cách đây chỉ 10 phút đi bộ. Tôi có thể viết lại địa chỉ cho bạn.' },
            { speaker: 'Foreigner', text: 'That would be very helpful. Thank you so much!', ipa: '/ðæt wʊd bi ˈveri ˈhelpfl. θæŋk juː səʊ mʌtʃ!/', trans: 'Thế thì giúp ích cho tôi quá. Cảm ơn bạn rất nhiều!' },
            { speaker: 'Local', text: 'You are welcome. I hope you enjoy Vietnamese food!', ipa: '/juː ɑː(r) ˈwelkəm. aɪ həʊp juː ɪnˈdʒɔɪ ˌvjetnəˈmiːz fuːd!/', trans: 'Không có chi. Hy vọng bạn sẽ thích ẩm thực Việt Nam!' }
        ],
        phrases: [
            { eng: 'Is this food spicy?', trans: 'Món này có cay không?' },
            { eng: 'I am a vegetarian.', trans: 'Tôi là người ăn chay.' },
            { eng: 'This tastes amazing!', trans: 'Món này vị ngon tuyệt cú mèo!' },
            { eng: 'Where is the best Pho restaurant?', trans: 'Quán Phở ngon nhất ở đâu vậy?' }
        ]
    },
    {
        id: 'taxi',
        title: 'Bắt xe Taxi / Grab (Taking a Taxi / Grab)',
        dialogue: [
            { speaker: 'Driver', text: 'Hello! Where are you going?', ipa: '/həˈləʊ! weə(r) ɑː juː ˈɡəʊɪŋ?/', trans: 'Xin chào! Quý khách muốn đi đâu ạ?' },
            { speaker: 'Passenger', text: 'Please take me to the Ben Thanh Market.', ipa: '/pliːz teɪk miː tuː ðə Ben Thanh ˈmɑːkɪt./', trans: 'Làm ơn chở tôi đến Chợ Bến Thành nhé.' },
            { speaker: 'Driver', text: 'Okay. It will take about fifteen minutes because of the traffic.', ipa: '/ˈəʊkeɪ. ɪt wɪl teɪk əˈbaʊt ˌfɪfˈtiːn ˈmɪnɪts bɪˈkɒz ɒv ðə ˈtræfɪk./', trans: 'Dạ được. Đi mất khoảng mười lăm phút vì tình trạng kẹt xe.' },
            { speaker: 'Passenger', text: 'No problem. Please turn on the taximeter.', ipa: '/nəʊ ˈprɒbləm. pliːz tɜːn ɒn ðə ˈtæksimiːtə(r)./', trans: 'Không sao. Làm ơn bật đồng hồ tính tiền lên giúp tôi.' },
            { speaker: 'Driver', text: 'Yes, the meter is on. Which route do you prefer? The highway or the local streets?', ipa: '/yes, ðə ˈmiːtə(r) ɪz ɒn. wɪtʃ ruːt duː juː prɪˈfɜː(r)? ðə ˈhaɪweɪ ɔː(r) ðə ˈləʊkl striːts?/', trans: 'Dạ đồng hồ đã bật rồi. Quý khách muốn đi đường nào ạ? Đường cao tốc hay đường thường?' },
            { speaker: 'Passenger', text: 'Please take the fastest route. I have an appointment.', ipa: '/pliːz teɪk ðə ˈfɑːstɪst ruːt. aɪ hæv ən əˈpɔɪntmənt./', trans: 'Làm ơn đi đường nào nhanh nhất nhé. Tôi có một cuộc hẹn.' },
            { speaker: 'Driver', text: 'Alright, I will take the highway. It is much faster.', ipa: '/ɔːlˈraɪt, aɪ wɪl teɪk ðə ˈhaɪweɪ. ɪt ɪz mʌtʃ ˈfɑːstə(r)./', trans: 'Dạ được, tôi sẽ đi đường cao tốc. Nó nhanh hơn nhiều.' },
            { speaker: 'Passenger', text: 'Great. How much is the highway toll fee?', ipa: '/ɡreɪt. haʊ mʌtʃ ɪz ðə ˈhaɪweɪ təʊl fiː?/', trans: 'Tốt quá. Cho hỏi phí qua trạm cao tốc là bao nhiêu vậy?' },
            { speaker: 'Driver', text: 'It is ten thousand Dong, and it will be added to the final fare.', ipa: '/it ɪz ten ˈθaʊznd dɒŋ, ænd ɪt wɪl bi ˈædɪd tu ðə ˈfaɪnl feə(r)./', trans: 'Dạ mười nghìn Đồng ạ, phí này sẽ được cộng vào giá cước cuối cùng.' },
            { speaker: 'Passenger', text: 'Okay, I understand.', ipa: '/ˈəʊkeɪ, aɪ ˌʌndəˈstænd./', trans: 'Tôi hiểu rồi.' },
            { speaker: 'Driver', text: 'We are here now. The total fare is sixty thousand Dong.', ipa: '/wiː ɑː(r) hɪə(r) naʊ. ðə ˈtəʊtl feə(r) ɪz ˈsɪksti ˈθaʊznd dɒŋ./', trans: 'Chúng ta đến nơi rồi ạ. Tổng cước xe là sáu mươi nghìn Đồng.' },
            { speaker: 'Passenger', text: 'Here is one hundred thousand Dong. Keep the change.', ipa: '/hɪə(r) ɪz wʌn ˈhʌndrəd ˈθaʊznd dɒŋ. kiːp ðə tʃeɪndʒ./', trans: 'Gửi tài xế một trăm nghìn Đồng. Khỏi thối tiền thừa nhé.' },
            { speaker: 'Driver', text: 'Thank you very much! Have a great day.', ipa: '/θæŋk juː ˈveri mʌtʃ! hæv ə ɡreɪt deɪ./', trans: 'Dạ cảm ơn quý khách rất nhiều! Chúc quý khách một ngày tốt lành.' }
        ],
        phrases: [
            { eng: 'Please turn on the meter.', trans: 'Làm ơn bật đồng hồ tính tiền lên giúp tôi.' },
            { eng: 'You can stop here, please.', trans: 'Làm ơn dừng xe ở đây được rồi.' },
            { eng: 'Please slow down a bit.', trans: 'Làm ơn đi chậm lại một chút.' },
            { eng: 'Keep the change.', trans: 'Cứ giữ lại tiền thừa nhé.' }
        ]
    },
    {
        id: 'airport',
        title: 'Tại Sân bay (At the Airport)',
        dialogue: [
            { speaker: 'Passenger', text: 'Excuse me, where is the check-in counter for Vietnam Airlines?', ipa: '/ɪkˈskjuːs miː, weə(r) ɪz ðə tʃek ɪn ˈkaʊntə(r) fɔː(r) Vietnam Airlines?/', trans: 'Xin lỗi, quầy làm thủ tục của Vietnam Airlines ở đâu vậy?' },
            { speaker: 'Staff', text: 'It is in Terminal 2, row G. Just go straight and turn left.', ipa: '/frɒm hɪə(r), ɪt ɪz ɪn ˈtɜːmɪnl tuː, rəʊ dʒiː. dʒʌst ɡəʊ streɪt ænd tɜːn left./', trans: 'Dạ từ đây đi tiếp thì quầy nằm ở Nhà ga 2, dãy G. Quý khách cứ đi thẳng rồi rẽ trái ạ.' },
            { speaker: 'Passenger', text: 'Thank you. I have two bags to check in. Is there any extra fee?', ipa: '/θæŋk juː. aɪ hæv tuː bæɡz tu tʃek ɪn. ɪz ðeə(r) ˈeni ˈekstrə fiː?/', trans: 'Cảm ơn bạn. Tôi có hai kiện hành lý cần ký gửi. Có bị mất thêm phí gì không?' },
            { speaker: 'Staff', text: 'Standard tickets include one checked bag. The second bag will cost thirty dollars.', ipa: '/ˈstændəd ˈtɪkɪts ɪnˈkluːd wʌn tʃekt bæɡ. ðə ˈsekənd bæɡ wɪl kɒst ˈθɜːti ˈdɒləz./', trans: 'Dạ vé tiêu chuẩn chỉ bao gồm một kiện hành lý ký gửi thôi ạ. Kiện thứ hai sẽ tốn phí 30 đô la.' },
            { speaker: 'Passenger', text: 'Oh, I see. Can I pay by credit card at the counter?', ipa: '/əʊ, aɪ siː. kæn aɪ peɪ baɪ ˈkredɪt kɑːd æt ðə ˈkaʊntə(r)?/', trans: 'Ồ tôi hiểu rồi. Tôi có thể thanh toán bằng thẻ tín dụng tại quầy luôn được chứ?' },
            { speaker: 'Staff', text: 'Yes, you can pay at the counter. Here is your boarding pass.', ipa: '/yes, juː kæn peɪ æt ðə ˈkaʊntə(r). hɪə(r) ɪz jɔː ˈbɔːdɪŋ pɑːs./', trans: 'Dạ được ạ, quý khách có thể quẹt thẻ tại quầy. Đây là thẻ lên máy bay của quý khách.' },
            { speaker: 'Passenger', text: 'Thank you. Which gate is my flight departing from?', ipa: '/θæŋk juː. wɪtʃ ɡeɪt ɪz maɪ flaɪt dɪˈpɑːtɪŋ frɒm?/', trans: 'Cảm ơn bạn. Chuyến bay của tôi sẽ khởi hành từ cổng nào thế?' },
            { speaker: 'Staff', text: 'Your flight departs from Gate 18. Boarding starts at 2:30 PM.', ipa: '/jɔː(r) flaɪt dɪˈpɑːts frɒm ɡeɪt ˌeɪˈtiːn. ˈbɔːdɪŋ stɑːts æt tuː ˈθɜːti piː em./', trans: 'Dạ chuyến bay của mình đi từ Cổng số 18. Máy bay bắt đầu đón khách lúc 2:30 chiều.' },
            { speaker: 'Passenger', text: 'Great. And where is the security check area?', ipa: '/ɡreɪt. ænd weə(r) ɪz ðə sɪˈkjuərɪti tʃek ˈeəriə?/', trans: 'Tuyệt quá. Còn khu vực kiểm tra an ninh đi lối nào nhỉ?' },
            { speaker: 'Staff', text: 'Go upstairs to the second floor. The security gate is right in front of the escalator.', ipa: '/ɡəʊ ˌʌpˈsteəz tu ðə ˈsekənd flɔː(r). ðə sɪˈkjuərɪti ɡeɪt ɪz raɪt ɪn frʌnt ɒv ðə ˈeskəleɪtə(r)./', trans: 'Dạ quý khách đi lên lầu 2 ạ. Cổng an ninh nằm ngay phía trước thang cuốn luôn.' }
        ],
        phrases: [
            { eng: 'Here is my passport and booking reference.', trans: 'Đây là hộ chiếu và mã đặt chỗ của tôi.' },
            { eng: 'I would like a window seat, please.', trans: 'Cho tôi xin ghế cạnh cửa sổ nhé.' },
            { eng: 'Is my baggage overweight?', trans: 'Hành lý của tôi có bị quá cân không?' },
            { eng: 'Where can I claim my luggage?', trans: 'Tôi có thể lấy hành lý ký gửi ở đâu?' }
        ]
    },
    {
        id: 'pharmacy',
        title: 'Mua thuốc & Bệnh tật (At the Pharmacy)',
        dialogue: [
            { speaker: 'Customer', text: 'Hello! I have a terrible headache and a sore throat.', ipa: '/həˈləʊ! aɪ hæv ə ˈterəbl ˈhedeɪk ænd ə sɔː(r) θrəʊt./', trans: 'Chào bạn! Tôi bị đau đầu kinh khủng và bị đau họng nữa.' },
            { speaker: 'Pharmacist', text: 'Do you have a fever or a cough as well?', ipa: '/duː juː hæv ə ˈfiːvə(r) ɔː(r) ə kɒf æz wel?/', trans: 'Bạn có bị sốt hay bị ho kèm theo không?' },
            { speaker: 'Customer', text: 'Yes, I feel a bit hot and I have a light cough.', ipa: '/jes, aɪ fiːl ə bɪt hɒt ænd aɪ hæv ə laɪt kɒf./', trans: 'Có, tôi cảm thấy hơi nóng trong người và bị ho nhẹ.' },
            { speaker: 'Pharmacist', text: 'How long have you had these symptoms?', ipa: '/haʊ lɒŋ hæv juː hæd ðiːz ˈsɪmptəmz?/', trans: 'Bạn đã bị các triệu chứng này bao lâu rồi?' },
            { speaker: 'Customer', text: 'Since yesterday morning. It is getting worse today.', ipa: '/sɪns ˈjestədeɪ ˈmɔːnɪŋ. ɪt ɪz ˈɡetɪŋ wɜːs təˈdeɪ./', trans: 'Từ sáng hôm qua rồi. Hôm nay nó đang trở nên tệ hơn.' },
            { speaker: 'Pharmacist', text: 'I see. It sounds like a common cold. I will give you some painkillers and cough medicine.', ipa: '/aɪ siː. ɪt saʊndz laɪk ə ˈkɒmən kəʊld. aɪ wɪl ɡɪv juː sʌm ˈpeɪnkɪləz ænd kɒf ˈmedsn./', trans: 'Tôi hiểu rồi. Nghe giống như bị cảm cúm thông thường thôi. Tôi sẽ kê cho bạn ít thuốc giảm đau và thuốc ho.' },
            { speaker: 'Customer', text: 'How often should I take this medicine?', ipa: '/haʊ ˈɒfn ʃʊd aɪ teɪk ðɪs ˈmedsn?/', trans: 'Tôi nên uống những thuốc này với liều lượng thế nào?' },
            { speaker: 'Pharmacist', text: 'Take the painkillers every six hours, and the cough syrup three times a day after meals.', ipa: '/teɪk ðə ˈpeɪnkɪləz ˈevri sɪks ˈaʊəz, ænd ðə kɒf ˈsɪrəp θriː taɪmz ə deɪ ˈɑːftə(r) miːlz./', trans: 'Uống thuốc giảm đau mỗi 6 tiếng một lần, và si-rô ho 3 lần một ngày sau khi ăn.' },
            { speaker: 'Customer', text: 'Okay. Does this medicine make me sleepy?', ipa: '/ˈəʊkeɪ. dʌz ðɪs ˈmedsn meɪk miː ˈsliːpi?/', trans: 'Được rồi. Thuốc này có gây buồn ngủ không bạn?' },
            { speaker: 'Pharmacist', text: 'Yes, the cough medicine might make you drowsy. Do not drive after taking it.', ipa: '/yes, ðə kɒf ˈmedsn maɪt meɪk juː ˈdraʊzi. duː nəʊt draɪv ˈɑːftə(r) ˈteɪkɪŋ ɪt./', trans: 'Có nhé, thuốc ho có thể khiến bạn buồn ngủ nhẹ đó. Đừng lái xe sau khi uống thuốc.' },
            { speaker: 'Customer', text: 'Thank you. I will make sure to rest. How much is it?', ipa: '/θæŋk juː. aɪ wɪl meɪk ʃɔː(r) tu rest. haʊ mʌtʃ ɪz ɪt?/', trans: 'Cảm ơn bạn. Tôi sẽ chú ý nghỉ ngơi. Hết bao nhiêu tiền thế?' },
            { speaker: 'Pharmacist', text: 'That will be eighty thousand Dong. Get well soon!', ipa: '/ðæt wɪl bi ˈeɪti ˈθaʊznd dɒŋ. ɡet wel suːn!/', trans: 'Dạ của bạn hết tám mươi nghìn Đồng. Chúc bạn mau khỏe lại nhé!' }
        ],
        phrases: [
            { eng: 'I need something for a cold.', trans: 'Tôi cần mua thuốc cảm cúm.' },
            { eng: 'How often should I take this medicine?', trans: 'Tôi nên uống thuốc này bao lâu một lần?' },
            { eng: 'Does this medicine have any side effects?', trans: 'Thuốc này có tác dụng phụ nào không?' },
            { eng: 'I feel dizzy and nauseous.', trans: 'Tôi cảm thấy chóng mặt và buồn nôn.' }
        ]
    },
    {
        id: 'exchange_money',
        title: 'Đổi tiền tệ (Exchanging Money)',
        dialogue: [
            { speaker: 'Customer', text: 'Hi! I would like to exchange some US dollars into Vietnamese Dong.', ipa: '/haɪ! aɪ wʊd laɪk tu ɪksˈtʃeɪndʒ sʌm juː es ˈdɒləz ˈɪntə ˌvjetnəˈmiːz dɒŋ./', trans: 'Chào bạn! Tôi muốn đổi một ít đô la Mỹ sang tiền Việt Nam Đồng.' },
            { speaker: 'Teller', text: 'Sure. How much would you like to exchange today?', ipa: '/ʃɔː(r). haʊ mʌtʃ wʊd juː laɪk tu ɪksˈtʃeɪndʒ təˈdeɪ?/', trans: 'Dạ được. Hôm nay quý khách muốn đổi bao nhiêu ạ?' },
            { speaker: 'Customer', text: 'Five hundred dollars, please. What is the exchange rate today?', ipa: '/faɪv ˈhʌndrəd ˈdɒləz, pliːz. wɒt ɪz ðə ɪksˈtʃeɪndʒ reɪt təˈdeɪ?/', trans: 'Năm trăm đô la nhé. Tỷ giá hôm nay là bao nhiêu vậy bạn?' },
            { speaker: 'Teller', text: 'Today it is twenty-five thousand Dong per dollar.', ipa: '/təˈdeɪ ɪt ɪz ˈtwenti faɪv ˈθaʊznd dɒŋ pɜː(r) ˈdɒlə(r)./', trans: 'Dạ hôm nay tỷ giá là 25.000 Đồng đổi lấy một đô la Mỹ.' },
            { speaker: 'Customer', text: 'Are there any service fees or commission?', ipa: '/ɑː(r) ðeə(r) ˈeni ˈsɜːvɪs fiːz ɔː(r) kəˈmɪʃn?/', trans: 'Có tốn thêm phí dịch vụ hay tiền hoa hồng nào không?' },
            { speaker: 'Teller', text: 'No, we do not charge any commission. The exchange is completely free.', ipa: '/nəʊ, wiː duː nɒt tʃɑːdʒ ˈeni kəˈmɪʃn. ðə ɪksˈtʃeɪndʒ ɪz kəmˈpliːtli friː./', trans: 'Dạ không ạ, chúng tôi không thu phí hoa hồng nào. Giao dịch đổi tiền là hoàn toàn miễn phí.' },
            { speaker: 'Customer', text: 'Great. Can I have some small notes like fifty thousand and one hundred thousand Dong?', ipa: '/ɡreɪt. kæn aɪ hæv sʌm smɔːl nəʊts laɪk ˈfɪfti ˈθaʊznd ænd wʌn ˈhʌndrəd ˈθaʊznd dɒŋ?/', trans: 'Tốt quá. Cho tôi xin một ít tờ tiền mệnh giá nhỏ như tờ 50 nghìn và 100 nghìn Đồng được chứ?' },
            { speaker: 'Teller', text: 'Yes, of course. Here is twelve million and five hundred thousand Dong. Please count it.', ipa: '/yes, ɒv kɔːs. hɪə(r) ɪz twelv ˈmɪljən ænd faɪv ˈhʌndrəd ˈθaʊznd dɒŋ. pliːz kaʊnt ɪt./', trans: 'Dạ tất nhiên rồi ạ. Đây là mười hai triệu năm trăm nghìn Đồng. Quý khách vui lòng đếm lại tiền giúp tôi.' },
            { speaker: 'Customer', text: 'Yes, it is all here. Thank you!', ipa: '/yes, ɪt ɪz ɔːl hɪə(r). θæŋk juː!/', trans: 'Vâng, đủ cả rồi. Cảm ơn bạn nhé!' },
            { speaker: 'Teller', text: 'You are welcome. Have a nice stay in Vietnam!', ipa: '/juː ɑː(r) ˈwelkəm. hæv ə naɪs steɪ ɪn ˌvjetˈnæm!/', trans: 'Dạ không có chi. Chúc quý khách có một kỳ nghỉ vui vẻ tại Việt Nam!' }
        ],
        phrases: [
            { eng: 'Where is the nearest money changer?', trans: 'Quầy đổi tiền gần nhất ở đâu vậy?' },
            { eng: 'Do you charge any commission?', trans: 'Bạn có tính phí dịch vụ đổi tiền không?' },
            { eng: 'What is the exchange rate for Euros?', trans: 'Tỷ giá đổi tiền Euro là bao nhiêu?' },
            { eng: 'I need some local currency.', trans: 'Tôi cần một ít tiền bản địa.' }
        ]
    },
    {
        id: 'emergency',
        title: 'Tình huống khẩn cấp (Emergencies & Help)',
        dialogue: [
            { speaker: 'Tourist', text: 'Excuse me! Help me, please! I just lost my wallet.', ipa: '/ɪkˈskjuːs miː! help miː, pliːz! aɪ dʒʌst lɒst maɪ ˈwɒlɪt./', trans: 'Xin lỗi! Làm ơn giúp tôi với! Tôi vừa bị mất ví tiền rồi.' },
            { speaker: 'Local', text: 'Oh no! Where did you lose it? Do you remember?', ipa: '/əʊ nəʊ! weə(r) dɪd juː luːz ɪt? duː juː rɪˈmembə(r)?/', trans: 'Ôi không! Bạn bị mất ở đâu vậy? Bạn có nhớ không?' },
            { speaker: 'Tourist', text: 'I think I left it on the bus or at the coffee shop. My passport was in it too.', ipa: '/aɪ θɪŋk aɪ left ɪt ɒn ðə bʌs ɔː(r) æt ðə ˈkɒfi ʃɒp. maɪ ˈpɑːspɔːt wɒz ɪn ɪt tuː./', trans: 'Tôi nghĩ tôi đã bỏ quên nó trên xe buýt hoặc ở quán cà phê. Hộ chiếu của tôi cũng để trong đó luôn.' },
            { speaker: 'Local', text: 'That is serious. We should go to the nearest police station to report it.', ipa: '/ðæt ɪz ˈsɪəriəs. wiː ʃʊd ɡəʊ tu ðə ˈnɪərɪst pəˈliːs ˈsteɪʃn tu rɪˈpɔːt ɪt./', trans: 'Sự việc này nghiêm trọng đó. Chúng ta nên đến đồn cảnh sát gần nhất để trình báo thôi.' },
            { speaker: 'Tourist', text: 'Can you show me where the police station is? I don\'t know the way.', ipa: '/kæn juː ʃəʊ miː weə(r) ðə pəˈliːs ˈsteɪʃn ɪz? aɪ dəʊnt nəʊ ðə weɪ./', trans: 'Bạn có thể chỉ cho tôi đồn cảnh sát ở đâu không? Tôi không biết đường đi.' },
            { speaker: 'Local', text: 'It is about three blocks away. I can walk there with you.', ipa: '/ɪt ɪz əˈbaʊt θriː blɒks əˈweɪ. aɪ kæn wɔːk ðeə(r) wɪð juː./', trans: 'Nó cách đây khoảng ba dãy nhà. Tôi có thể đi bộ tới đó cùng bạn.' },
            { speaker: 'Tourist', text: 'That is very kind of you. Thank you so much!', ipa: '/ðæt ɪz ˈveri kaɪnd ɒv juː. θæŋk juː səʊ mʌtʃ!/', trans: 'Bạn thật là tốt bụng quá. Cảm ơn bạn rất nhiều!' },
            { speaker: 'Local', text: 'Don\'t worry. We should also contact your embassy to report the lost passport.', ipa: '/dəʊnt ˈwʌri. wiː ʃʊd ˈɔːlsəʊ ˈkɒntækt jɔː(r) ˈembəsi tu rɪˈpɔːt ðə lɒst ˈpɑːspɔːt./', trans: 'Đừng lo lắng quá. Chúng ta cũng nên liên hệ với đại sứ quán của nước bạn để báo mất hộ chiếu.' },
            { speaker: 'Tourist', text: 'Good idea. I have my phone, so I can look up the embassy phone number.', ipa: '/ɡuːd aɪˈdɪə. aɪ hæv maɪ fəʊn, səʊ aɪ kæn lʊk ʌp ðə ˈembəsi fəʊn ˈnʌmbə(r)./', trans: 'Ý kiến hay đó. Tôi vẫn giữ điện thoại nên tôi có thể tra cứu số điện thoại đại sứ quán.' },
            { speaker: 'Local', text: 'Yes, do that while we walk. Let\'s go.', ipa: '/yes, duː ðæt waɪl wiː wɔːk. lets ɡəʊ./', trans: 'Đúng vậy, hãy làm việc đó trong lúc chúng ta đi bộ nhé. Đi thôi nào.' }
        ],
        phrases: [
            { eng: 'Help! Call the police/ambulance!', trans: 'Cứu với! Hãy gọi cảnh sát/xe cứu thương!' },
            { eng: 'I lost my passport. What should I do?', trans: 'Tôi bị mất hộ chiếu rồi. Tôi nên làm gì đây?' },
            { eng: 'I am lost. Can you help me find my hotel?', trans: 'Tôi bị lạc đường. Bạn chỉ giúp tôi đường về khách sạn được không?' },
            { eng: 'Is there a hospital near here?', trans: 'Có bệnh viện nào gần đây không?' }
        ]
    }
];

const WORD_CLASSES_DATA = [
    {
        id: 'nouns',
        title: 'Danh từ (Nouns - N)',
        desc: 'Danh từ là từ dùng để chỉ người, vật, địa điểm, khái niệm hoặc hiện tượng.',
        types: 'Danh từ đếm được (Countable) & Không đếm được (Uncountable); Danh từ số ít & Số nhiều.',
        rules: '• Đứng làm chủ ngữ (đầu câu) hoặc tân ngữ (sau động từ).\n• Đứng sau tính từ để bổ nghĩa (ví dụ: a beautiful girl).\n• Thêm "s/es" cho danh từ số nhiều (ví dụ: cat -> cats, bus -> buses).',
        examples: [
            { eng: 'The teacher is very friendly.', vi: 'Người giáo viên đó rất thân thiện.' },
            { eng: 'I bought three books yesterday.', vi: 'Tôi đã mua ba cuốn sách vào ngày hôm qua.' },
            { eng: 'Water is necessary for life.', vi: 'Nước rất cần thiết cho sự sống (Danh từ không đếm được).' }
        ]
    },
    {
        id: 'verbs',
        title: 'Động từ (Verbs - V)',
        desc: 'Động từ là từ chỉ hành động, trạng thái hoặc cảm xúc của chủ ngữ.',
        types: 'Động từ chỉ hành động (run, eat), Động từ chỉ trạng thái (feel, love), Trợ động từ (do, have, can).',
        rules: '• Đứng ngay sau chủ ngữ trong câu khẳng định.\n• Động từ thay đổi hình thức theo thì và chủ ngữ (ví dụ: play -> plays -> played).',
        examples: [
            { eng: 'She runs in the park every morning.', vi: 'Cô ấy chạy bộ trong công viên mỗi sáng.' },
            { eng: 'I feel very happy today.', vi: 'Hôm nay tôi cảm thấy rất hạnh phúc.' }
        ]
    },
    {
        id: 'adjectives',
        title: 'Tính từ (Adjectives - Adj)',
        desc: 'Tính từ là từ dùng để miêu tả đặc điểm, tính chất, màu sắc hoặc trạng thái của danh từ.',
        types: 'Tính từ miêu tả (beautiful, tall), Tính từ chỉ số lượng (many, few), Tính từ sở hữu (my, his).',
        rules: '• Luôn đứng TRƯỚC danh từ để bổ nghĩa cho danh từ đó (ví dụ: a red car).\n• Đứng sau động từ tobe hoặc động từ trạng thái (look, feel, seem...).',
        examples: [
            { eng: 'He is a handsome boy.', vi: 'Cậu ấy là một cậu bé đẹp trai (Tính từ đứng trước danh từ).' },
            { eng: 'This flower smells sweet.', vi: 'Bông hoa này có mùi thơm ngọt ngào (Tính từ sau động từ trạng thái).' }
        ]
    },
    {
        id: 'adverbs',
        title: 'Trạng từ (Adverbs - Adv)',
        desc: 'Trạng từ dùng để bổ nghĩa cho động từ, tính từ, hoặc một trạng từ khác, chỉ cách thức, thời gian, nơi chốn.',
        types: 'Trạng từ chỉ cách thức (slowly, well), Trạng từ chỉ tần suất (always, often), Trạng từ chỉ mức độ (very, extremely).',
        rules: '• Thường đứng sau động từ thường để tả cách hành động diễn ra.\n• Thường được tạo bằng cách thêm đuôi "-ly" vào tính từ: quick -> quickly.',
        examples: [
            { eng: 'He drives very carefully.', vi: 'Anh ấy lái xe rất cẩn thận.' },
            { eng: 'She speaks English fluently.', vi: 'Cô ấy nói tiếng Anh một cách trôi chảy.' }
        ]
    },
    {
        id: 'pronouns',
        title: 'Đại từ (Pronouns - Pro)',
        desc: 'Đại từ là từ dùng để thay thế cho danh từ nhằm tránh lặp từ trong câu.',
        types: 'Đại từ nhân xưng (I, you, he, she, they), Đại từ tân ngữ (me, him, them), Tính từ sở hữu (my, their), Đại từ sở hữu (mine, theirs).',
        rules: '• Đại từ nhân xưng đứng làm chủ ngữ (đầu câu).\n• Đại từ tân ngữ đứng sau động từ làm tân ngữ.\n• Đại từ sở hữu đứng một mình không cần danh từ đi kèm.',
        examples: [
            { eng: 'Mary is my friend. She is very kind.', vi: 'Mary là bạn tôi. Cô ấy rất tốt bụng ("She" thay thế cho "Mary").' },
            { eng: 'This book is mine, not yours.', vi: 'Cuốn sách này là của tôi, không phải của bạn.' }
        ]
    },
    {
        id: 'prepositions',
        title: 'Giới từ (Prepositions - Prep)',
        desc: 'Giới từ là từ chỉ mối quan hệ về vị trí, thời gian hoặc hướng đi giữa danh từ với các thành phần khác.',
        types: 'Giới từ chỉ nơi chốn (in, on, at, under), Giới từ chỉ thời gian (in, on, at, since, for), Giới từ chỉ chuyển động (to, into, onto).',
        rules: '• Luôn đứng TRƯỚC danh từ hoặc cụm danh từ để tạo thành cụm trạng từ chỉ nơi chốn/thời gian.',
        examples: [
            { eng: 'The cat is sleeping under the table.', vi: 'Con mèo đang ngủ ở dưới gầm bàn.' },
            { eng: 'Our class starts at 8 o\'clock.', vi: 'Lớp học của chúng tôi bắt đầu lúc 8 giờ đúng.' }
        ]
    },
    {
        id: 'articles',
        title: 'Mạo từ (Articles - A / An / The)',
        desc: 'Mạo từ là những từ đứng trước danh từ để cho biết danh từ đó đề cập đến một đối tượng xác định (đã biết) hay bất định (chưa biết).',
        types: 'Mạo từ bất định (A, An) - dùng cho danh từ số ít chưa xác định. Mạo từ xác định (The) - dùng cho danh từ cả người nói và nghe đều đã biết.',
        rules: '• Dùng "An" trước danh từ bắt đầu bằng một NGUYÊN ÂM (u, e, o, a, i - mẹo nhớ: "uể oải").\n• Dùng "A" trước danh từ bắt đầu bằng phụ âm.\n• Dùng "The" cho vật là duy nhất (the sun, the moon) hoặc đã nhắc đến trước đó.',
        examples: [
            { eng: 'I have a cat and an elephant.', vi: 'Tôi có một con mèo và một con voi ("An" đi với "elephant" vì bắt đầu bằng nguyên âm E).' },
            { eng: 'The sun shines brightly today.', vi: 'Mặt trời hôm nay tỏa sáng rực rỡ (Dùng "The" vì mặt trời là duy nhất).' }
        ]
    },
    {
        id: 'demonstratives',
        title: 'Chỉ định từ (Demonstratives - This / That / These / Those)',
        desc: 'Là các từ dùng để chỉ rõ một hoặc nhiều đối tượng cụ thể dựa trên khoảng cách (gần hay xa) đối với người nói.',
        types: 'This (cái này - số ít, gần), That (cái kia - số ít, xa), These (những cái này - số nhiều, gần), Those (những cái kia - số nhiều, xa).',
        rules: '• Đứng trước danh từ để bổ nghĩa cho danh từ đó (ví dụ: this book).\n• Có thể đứng một mình làm đại từ chủ ngữ/tân ngữ (ví dụ: This is a book).',
        examples: [
            { eng: 'This book is very interesting.', vi: 'Cuốn sách này rất thú vị (Số ít, ở gần).' },
            { eng: 'Those stars in the sky are beautiful.', vi: 'Những ngôi sao trên bầu trời kia thật đẹp (Số nhiều, ở xa).' }
        ]
    },
    {
        id: 'possessives',
        title: 'Sở hữu (Possessives - Tính từ sở hữu & Đại từ sở hữu)',
        desc: 'Dùng để chỉ quyền sở hữu đối với một người hoặc vật nào đó.',
        types: 'Tính từ sở hữu (Possessive Adjectives: My, Your, His, Her, Its, Our, Their). Đại từ sở hữu (Possessive Pronouns: Mine, Yours, His, Hers, Ours, Theirs).',
        rules: '• Tính từ sở hữu BẮT BUỘC phải đứng trước một danh từ (ví dụ: my car).\n• Đại từ sở hữu đứng một mình để thay thế cho cụm "Tính từ sở hữu + Danh từ" nhằm tránh lặp từ (ví dụ: my car -> mine).',
        examples: [
            { eng: 'This is my bag and that is her bag.', vi: 'Đây là cái túi của tôi và kia là cái túi của cô ấy.' },
            { eng: 'This bag is mine and that one is hers.', vi: 'Cái túi này là của tôi và cái kia là của cô ấy ("mine" = "my bag", "hers" = "her bag").' }
        ]
    },
    {
        id: 'countable_uncountable',
        title: 'Danh từ đếm được & không đếm được (Countable & Uncountable)',
        desc: 'Danh từ đếm được là danh từ ta có thể đếm bằng số (1, 2, 3...). Danh từ không đếm được là danh từ chỉ chất lỏng, chất khí, bột hoặc khái niệm trừu tượng không thể đếm trực tiếp.',
        types: 'Đếm được số ít (a cat) / số nhiều (three cats). Không đếm được (water, milk, money, advice, information).',
        rules: '• Danh từ đếm được số ít phải đi kèm "a/an" hoặc số đếm.\n• Danh từ không đếm được không đi kèm số đếm trực tiếp mà phải qua đơn vị đo lường (ví dụ: a glass of water) và luôn đi với động từ số ít.',
        examples: [
            { eng: 'I have two cats and three dogs.', vi: 'Tôi có hai con mèo và ba con chó (Đếm được số nhiều).' },
            { eng: 'Could you give me a glass of milk?', vi: 'Bạn có thể cho tôi một ly sữa được không? (Dùng đơn vị "a glass of" để đếm).' }
        ]
    },
    {
        id: 'comparisons',
        title: 'Cấp so sánh của tính từ (Adjective Comparisons)',
        desc: 'Dùng để so sánh tính chất, đặc điểm giữa hai hoặc nhiều người, vật với nhau.',
        types: 'So sánh bằng (As...as), So sánh hơn (Comparative), So sánh nhất (Superlative).',
        rules: '• So sánh hơn: Tính từ ngắn thêm đuôi "-er" + than (tall -> taller than); Tính từ dài dùng more + Tính từ + than.\n• So sánh nhất: Tính từ ngắn dùng the + Tính từ-est (the tallest); Tính từ dài dùng the most + Tính từ.',
        examples: [
            { eng: 'He is as tall as his father.', vi: 'Cậu ấy cao bằng bố mình (So sánh bằng).' },
            { eng: 'Lan is taller than Mai, but Hoa is the tallest.', vi: 'Lan cao hơn Mai, nhưng Hoa là người cao nhất.' }
        ]
    }
];

const ASKING_QUESTIONS_DATA = [
    {
        id: 'yes_no_to_be',
        title: '1. Câu hỏi Yes/No với động từ TO BE',
        desc: 'Dùng khi câu hỏi không chứa động từ hành động, chỉ hỏi về tên, tuổi, nghề nghiệp, tính chất, trạng thái hoặc vị trí.',
        formula: '[Am / Is / Are / Was / Were] + Chủ ngữ + (Danh từ / Tính từ / Giới từ chỉ nơi chốn)?',
        rules: '• Đưa động từ To Be lên trước chủ ngữ.\n• Trả lời bằng: Yes, S + To Be. hoặc No, S + To Be + not.',
        examples: [
            { eng: 'Are you a student?', vi: 'Bạn có phải là học sinh không? (Yes, I am. / No, I am not.)' },
            { eng: 'Is she tired today?', vi: 'Hôm nay cô ấy có mệt không?' }
        ]
    },
    {
        id: 'yes_no_action_verbs',
        title: '2. Câu hỏi Yes/No với ĐỘNG TỪ THƯỜNG',
        desc: 'Dùng khi trong câu hỏi chứa động từ chỉ hành động (như go, eat, play, study...).',
        formula: '[Do / Does / Did] + Chủ ngữ + Động từ nguyên mẫu (V_bare)?',
        rules: '• Mượn trợ động từ đưa lên trước chủ ngữ: dùng "Do/Does" ở hiện tại, "Did" ở quá khứ.\n• Động từ chính bắt buộc đưa về nguyên mẫu không chia.',
        examples: [
            { eng: 'Do you speak English?', vi: 'Bạn có nói tiếng Anh không? (Yes, I do. / No, I don\'t.)' },
            { eng: 'Did they watch the football match last night?', vi: 'Tối qua họ có xem trận bóng đá không?' }
        ]
    },
    {
        id: 'yes_no_modal_verbs',
        title: '3. Câu hỏi Yes/No với ĐỘNG TỪ KHUYẾT THIẾU',
        desc: 'Dùng để hỏi về khả năng, xin phép, đưa ra lời khuyên hoặc dự định tương lai.',
        formula: '[Can / Could / Will / Should / Must] + Chủ ngữ + Động từ nguyên mẫu (V_bare)?',
        rules: '• Đưa động từ khuyết thiếu lên trước chủ ngữ.\n• Động từ hành động phía sau giữ nguyên mẫu không chia.',
        examples: [
            { eng: 'Can you help me, please?', vi: 'Bạn có thể giúp tôi một tay được không?' },
            { eng: 'Should I buy this dress?', vi: 'Tôi có nên mua chiếc váy này không?' }
        ]
    },
    {
        id: 'wh_questions',
        title: '4. Câu hỏi lấy thông tin (Wh- Questions)',
        desc: 'Dùng khi muốn biết thông tin chi tiết về Người (Who), Vật (What), Nơi chốn (Where), Thời gian (When), Lý do (Why), hoặc Cách thức (How).',
        formula: '[Từ để hỏi Wh-] + [Trợ động từ / To Be / Động từ khuyết thiếu] + Chủ ngữ + Động từ?',
        rules: '• Bước 1: Đưa từ để hỏi (Who, What, Where, When, Why, How...) lên đầu tiên.\n• Bước 2: Đưa Trợ động từ hoặc động từ To Be lên trước chủ ngữ tương tự như câu hỏi Yes/No.',
        examples: [
            { eng: 'What is your name?', vi: 'Tên của bạn là gì?' },
            { eng: 'Where do you live?', vi: 'Bạn sống ở đâu?' }
        ]
    }
];

const SENTENCE_STRUCTURES_DATA = [
    {
        id: 'passive_voice',
        title: '1. Câu Bị Động (Passive Voice)',
        desc: 'Dùng khi muốn nhấn mạnh vào hành động hoặc đối tượng chịu tác động của hành động, thay vì người thực hiện hành động.',
        formula: 'Chủ ngữ chịu tác động (S) + Be (chia theo thì) + Động từ phân từ 2 (V3/ed) + (by + Tân ngữ thực hiện)',
        rules: '• Bước 1: Lấy tân ngữ của câu chủ động làm chủ ngữ câu bị động.\n• Bước 2: Chia động từ "To Be" theo đúng thì của câu chủ động và phù hợp với chủ ngữ mới.\n• Bước 3: Đưa động từ chính về dạng phân từ 2 (V3/ed).\n• Bước 4: Thêm "by + tác nhân" ở cuối câu (nếu cần thiết).',
        examples: [
            { eng: 'Active: The cat ate the fish. -> Passive: The fish was eaten by the cat.', vi: 'Chủ động: Con mèo đã ăn con cá. -> Bị động: Con cá đã bị ăn bởi con mèo (Quá khứ đơn).' },
            { eng: 'Active: My mother washes the dishes. -> Passive: The dishes are washed by my mother.', vi: 'Chủ động: Mẹ tôi rửa chén bát. -> Bị động: Chén bát được rửa bởi mẹ tôi (Hiện tại đơn).' }
        ]
    },
    {
        id: 'conditional_sentences',
        title: '2. Câu Điều Kiện (Conditional Sentences)',
        desc: 'Dùng để diễn tả một giả thuyết về một sự việc và kết quả của sự việc đó nếu giả thuyết xảy ra.',
        formula: 'Mệnh đề IF (Điều kiện) , Mệnh đề chính (Kết quả)',
        rules: '• Loại 0 (Sự thật hiển nhiên): If + S + V(s/es) , S + V(s/es)\n• Loại 1 (Có thể xảy ra ở hiện tại/tương lai): If + S + V(s/es) , S + will + V_bare\n• Loại 2 (Không có thật ở hiện tại): If + S + V2/ed (tobe dùng WERE) , S + would + V_bare\n• Loại 3 (Không có thật ở quá khứ): If + S + had + V3/ed , S + would + have + V3/ed',
        examples: [
            { eng: 'If it rains tomorrow, we will cancel the picnic.', vi: 'Nếu ngày mai trời mưa, chúng tôi sẽ hủy chuyến dã ngoại (Loại 1 - Có thể xảy ra).' },
            { eng: 'If I were you, I would buy that car.', vi: 'Nếu tôi là bạn, tôi sẽ mua chiếc xe đó (Loại 2 - Giả định không có thật ở hiện tại).' }
        ]
    },
    {
        id: 'relative_clauses',
        title: '3. Mệnh Đề Quan Hệ (Relative Clauses)',
        desc: 'Dùng để giải thích rõ hơn hoặc cung cấp thêm thông tin cho danh từ đứng trước nó.',
        formula: 'Danh từ + Đại từ quan hệ (Who / Whom / Which / That / Whose) + Mệnh đề bổ nghĩa',
        rules: '• Who: Thay cho danh từ chỉ Người làm chủ ngữ trong mệnh đề quan hệ.\n• Whom: Thay cho danh từ chỉ Người làm tân ngữ.\n• Which: Thay cho danh từ chỉ Vật làm chủ ngữ hoặc tân ngữ.\n• That: Thay thế cho Who, Whom, Which trong mệnh đề xác định.\n• Whose: Chỉ sự sở hữu của người hoặc vật đứng trước.',
        examples: [
            { eng: 'The man who is standing there is my teacher.', vi: 'Người ông đang đứng đằng kia là giáo viên của tôi ("Who" bổ nghĩa cho "The man" làm chủ ngữ).' },
            { eng: 'The book which I bought yesterday is very good.', vi: 'Cuốn sách mà tôi mua hôm qua rất hay ("Which" bổ nghĩa cho "The book" làm tân ngữ).' }
        ]
    },
    {
        id: 'reported_speech',
        title: '4. Câu Gián Tiếp (Reported Speech)',
        desc: 'Dùng để thuật lại lời nói của một người khác mà không cần lặp lại chính xác từng từ của họ.',
        formula: 'S + said (that) + S + V (lùi thì) | S + told + O (that) + S + V (lùi thì)',
        rules: 'Khi chuyển từ câu trực tiếp sang gián tiếp ta phải thực hiện 3 nguyên tắc lùi thì và đổi ngôi:\n• 1. Thay đổi đại từ nhân xưng, tính từ sở hữu cho phù hợp (ví dụ: I -> he/she, my -> his/her).\n• 2. Lùi thì của động từ (Hiện tại đơn -> Quá khứ đơn; Hiện tại tiếp diễn -> Quá khứ tiếp diễn; Will -> Would; Can -> Could...).\n• 3. Thay đổi trạng từ chỉ thời gian, nơi chốn (today -> that day; yesterday -> the day before; here -> there).',
        examples: [
            { eng: 'Direct: He said, "I am tired today." -> Reported: He said that he was tired that day.', vi: 'Trực tiếp: Anh ấy nói: "Hôm nay tôi mệt." -> Gián tiếp: Anh ấy nói rằng anh ấy mệt vào ngày hôm đó.' }
        ]
    },
    {
        id: 'modal_verbs',
        title: '5. Động Từ Khuyết Thiếu (Modal Verbs)',
        desc: 'Là các động từ dùng để diễn tả khả năng, sự cho phép, nghĩa vụ, lời khuyên hoặc dự đoán.',
        formula: 'S + Modal Verb (Can/Could/Must/Should/May/Might) + Động từ nguyên mẫu (V_bare)',
        rules: '• Cấu trúc chung: Không cần chia theo các ngôi (I, you, he, she đều dùng chung một dạng).\n• Động từ theo sau bắt buộc ở dạng nguyên mẫu không "to".\n• Can/Could (khả năng), Must (bắt buộc), Should (lời khuyên), May/Might (khả năng xảy ra không chắc chắn).',
        examples: [
            { eng: 'I can speak English fluently.', vi: 'Tôi có thể nói tiếng Anh trôi chảy (Khả năng).' },
            { eng: 'You should go to bed early.', vi: 'Bạn nên đi ngủ sớm (Lời khuyên).' }
        ]
    },
    {
        id: 'gerund_infinitive',
        title: '6. Danh động từ & Động từ nguyên mẫu (Gerund & Infinitive)',
        desc: 'Dùng khi hai động từ đứng liền nhau trong câu. Động từ thứ hai sẽ biến đổi thành dạng V-ing hoặc To V tùy thuộc vào động từ thứ nhất.',
        formula: 'S + V1 + V-ing | S + V1 + To V',
        rules: '• Các động từ theo sau bởi V-ing: avoid (tránh), enjoy (thích), mind (ngại), practice (luyện tập), suggest (gợi ý), spend time... (dành thời gian).\n• Các động từ theo sau bởi To V: want (muốn), decide (quyết định), hope (hy vọng), promise (hứa), refuse (từ chối), plan (lên kế hoạch).',
        examples: [
            { eng: 'I enjoy listening to music in my free time.', vi: 'Tôi thích nghe nhạc vào thời gian rảnh ("enjoy" đi với V-ing).' },
            { eng: 'She decided to study English abroad.', vi: 'Cô ấy đã quyết định đi du học tiếng Anh ("decide" đi với To V).' }
        ]
    },
    {
        id: 'tag_questions',
        title: '7. Câu Hỏi Đuôi (Tag Questions)',
        desc: 'Câu hỏi ngắn đứng ở cuối câu trần thuật, dùng để xác nhận lại thông tin hoặc tìm kiếm sự đồng tình.',
        formula: 'Mệnh đề khẳng định , Trợ động từ phủ định + Đại từ? | Mệnh đề phủ định , Trợ động từ khẳng định + Đại từ?',
        rules: '• Quy tắc đối lập: Mệnh đề trước khẳng định thì câu hỏi đuôi phủ định, và ngược lại.\n• Thì của câu hỏi đuôi phải cùng thì với mệnh đề chính.\n• Một số trường hợp đặc biệt: I am -> aren\'t I?; Let\'s -> shall we?; Everyone/Someone -> dùng đại từ "they"; V_bare (mệnh lệnh) -> will you?',
        examples: [
            { eng: "You are a student, aren't you?", vi: "Bạn là học sinh có phải không?" },
            { eng: "She doesn't like milk, does she?", vi: "Cô ấy không thích sữa đúng không?" },
            { eng: "Let's go to the cinema, shall we?", vi: "Chúng ta đi xem phim nhé?" }
        ]
    },
    {
        id: 'subjunctive_mood',
        title: '8. Câu Giả Định / Cầu Khiến (Subjunctive Mood)',
        desc: 'Dùng để diễn tả mong muốn, yêu cầu, đề nghị hoặc tính cấp bách của một sự việc (xuất hiện nhiều trong kỳ thi THPT & Đại học).',
        formula: 'S1 + [suggest / insist / recommend / require / demand / it is necessary] + THAT + S2 + V_bare (nguyên mẫu không chia)',
        rules: '• Động từ ở mệnh đề sau "that" luôn ở dạng nguyên mẫu không chia (V_bare) cho tất cả các ngôi (kể cả he/she/it).\n• Thể phủ định thêm "not" ngay trước động từ nguyên mẫu: S1 + V1 + that + S2 + NOT + V_bare.\n• Thường xuất hiện trong các bài thi đại học và chứng chỉ IELTS/TOEIC.',
        examples: [
            { eng: "The doctor recommended that he stop smoking.", vi: "Bác sĩ khuyên rằng anh ấy nên ngừng hút thuốc (Động từ 'stop' giữ nguyên mẫu)." },
            { eng: "It is necessary that she be here on time.", vi: "Việc cô ấy có mặt ở đây đúng giờ là rất cần thiết (Dùng 'be' nguyên mẫu)." }
        ]
    },
    {
        id: 'inversion',
        title: '9. Cấu Trúc Đảo Ngữ (Inversion)',
        desc: 'Đưa trợ động từ hoặc động từ To Be lên trước chủ ngữ nhằm mục đích nhấn mạnh ý nghĩa của câu (ngữ pháp nâng cao lớp 12 và Đại học).',
        formula: '[Từ phủ định / Cụm từ giới hạn] + Trợ động từ + Chủ ngữ + Động từ chính?',
        rules: '• Đảo ngữ với trạng từ phủ định: Never, Seldom, Hardly, Scarcely, Rarely (ví dụ: Never have I seen...).\n• Đảo ngữ với "Not only... but also": Not only + Trợ động từ + S1 + V1, but S2 + also + V2.\n• Đảo ngữ với "No sooner... than" và "Hardly... when": Vừa mới... thì đã (chỉ hai hành động liên tiếp trong quá khứ).\n• Đảo ngữ với "Only when / Only after / Only by".',
        examples: [
            { eng: "Never have I heard such a beautiful song.", vi: "Chưa bao giờ tôi được nghe một bài hát hay đến thế (Nhấn mạnh sự ngạc nhiên)." },
            { eng: "Not only is she beautiful, but she is also very intelligent.", vi: "Không những cô ấy xinh đẹp, mà cô ấy còn rất thông minh." },
            { eng: "No sooner had he arrived home than it started to rain.", vi: "Anh ấy vừa mới về đến nhà thì trời bắt đầu đổ mưa." }
        ]
    },
    {
        id: 'wishes_regrets',
        title: '10. Câu Ước & Tiếc Nuối (Wishes & Regrets)',
        desc: 'Dùng để diễn tả ước muốn về một sự việc không có thật ở hiện tại, quá khứ hoặc tương lai.',
        formula: 'Ao ước hiện tại: S + wish(es) + S + V2/ed (tobe dùng WERE) | Ao ước quá khứ: S + wish(es) + S + had + V3/ed | Ao ước tương lai: S + wish(es) + S + would/could + V_bare',
        rules: '• Ước ở hiện tại: Lùi về thì Quá khứ đơn (giống câu điều kiện loại 2).\n• Ước ở quá khứ (tiếc nuối): Lùi về thì Quá khứ hoàn thành (giống câu điều kiện loại 3).\n• Ước ở tương lai: Dùng would/could + V_bare.\n• Có thể thay thế "S + wish" bằng cụm "If only" (Giá mà) để tăng tính nhấn mạnh.',
        examples: [
            { eng: "I wish I were rich now.", vi: "Tôi ước gì bây giờ tôi giàu có (Thực tế hiện tại tôi không giàu)." },
            { eng: "She wishes she had studied harder for the exam yesterday.", vi: "Cô ấy ước gì hôm qua cô ấy đã học bài chăm chỉ hơn (Tiếc nuối việc trong quá khứ)." },
            { eng: "If only it would stop raining tomorrow.", vi: "Giá mà ngày mai trời sẽ ngừng mưa." }
        ]
    },
    {
        id: 'conjunctions_transitions',
        title: '11. Liên Từ & Từ Nối (Conjunctions & Transitions)',
        desc: 'Dùng để liên kết các từ, cụm từ, mệnh đề hoặc các câu lại với nhau, giúp đoạn văn mạch lạc và trôi chảy hơn.',
        formula: 'S1 + V1 + [although / because / so / but / and] + S2 + V2 | S1 + V1. [However / Therefore / In addition] , S2 + V2',
        rules: '• Liên từ phụ thuộc: because/since (bởi vì), although/even though (mặc dù), while (trong khi) -> theo sau là một mệnh đề (S + V).\n• Giới từ liên kết: because of / due to, in spite of / despite -> theo sau là Danh từ hoặc V-ing.\n• Trạng từ liên kết (Transitions): However (tuy nhiên), Therefore (vì vậy), Moreover / In addition (hơn nữa) -> thường đứng đầu câu sau dấu chấm và trước dấu phẩy.',
        examples: [
            { eng: "Although it was raining, they went out.", vi: "Mặc dù trời đang mưa, họ vẫn đi ra ngoài." },
            { eng: "Despite the heavy rain, they went out.", vi: "Bất chấp cơn mưa nặng hạt, họ vẫn đi ra ngoài (Sau 'Despite' là cụm danh từ)." },
            { eng: "He studied hard. Therefore, he passed the exam.", vi: "Anh ấy đã học tập chăm chỉ. Vì vậy, anh ấy đã đỗ kỳ thi." }
        ]
    }
];

const IDIOMS_PHRASAL_DATA = [
    {
        id: 'phrasal_verbs',
        title: '1. Cụm Động Từ Thông Dụng (Common Phrasal Verbs)',
        desc: 'Cụm động từ là sự kết hợp giữa một động từ và một giới từ hoặc trạng từ, tạo ra nghĩa hoàn toàn mới.',
        types: 'Ví dụ phổ biến: look up (tra cứu), give up (từ bỏ), take off (cất cánh/cởi đồ), run out of (hết sạch)...',
        rules: '• Cụm động từ có thể tách rời (ví dụ: turn the TV off / turn off the TV) hoặc không thể tách rời (ví dụ: look after my sister).\n• Tránh dịch nghĩa từng từ riêng lẻ vì nghĩa của cụm là một khối hoàn chỉnh.\n• Cần học theo ngữ cảnh câu thực tế để nhớ lâu hơn.',
        examples: [
            { eng: 'I need to look up this new word in the dictionary.', vi: 'Tôi cần tra cứu từ mới này ở trong từ điển.' },
            { eng: 'He decided to give up smoking for his health.', vi: 'Anh ấy đã quyết định từ bỏ hút thuốc vì sức khỏe của mình.' },
            { eng: 'We have run out of milk, I need to buy some.', vi: 'Chúng ta đã hết sạch sữa rồi, tôi cần phải đi mua thêm ít sữa.' }
        ]
    },
    {
        id: 'idioms',
        title: '2. Thành Ngữ Tiếng Anh Giao Tiếp (English Idioms)',
        desc: 'Thành ngữ là những cụm từ mang nghĩa bóng đặc trưng, được người bản xứ sử dụng thường xuyên trong giao tiếp hàng ngày.',
        types: 'Ví dụ phổ biến: a piece of cake (dễ như ăn bánh), break a leg (chúc may mắn), once in a blue moon (hiếm khi)...',
        rules: '• Sử dụng thành ngữ giúp cách nói chuyện của bạn tự nhiên và trôi chảy như người bản xứ.\n• Tránh lạm dụng thành ngữ trong các văn bản học thuật trang trọng (như viết thư công việc, bài viết khoa học).\n• Hãy liên tưởng hình ảnh ẩn dụ để hiểu sâu sắc nghĩa của thành ngữ.',
        examples: [
            { eng: 'Don\'t worry about the exam, it is a piece of cake!', vi: 'Đừng lo lắng về bài thi, nó dễ như ăn bánh ấy mà!' },
            { eng: 'I only see him once in a blue moon.', vi: 'Tôi cực kỳ hiếm khi gặp anh ấy (hầu như không bao giờ).' },
            { eng: 'You have a big performance tonight. Break a leg!', vi: 'Tối nay bạn có một buổi biểu diễn lớn. Chúc may mắn nhé!' }
        ]
    },
    {
        id: 'collocations',
        title: '3. Cụm Từ Cố Định (Collocations)',
        desc: 'Collocation là cách kết hợp các từ với nhau theo thói quen và quy ước sử dụng tự nhiên của người bản xứ.',
        types: 'Ví dụ phổ biến: make a decision (đưa ra quyết định), do homework (làm bài tập), take a shower (tắm)...',
        rules: '• Việc dùng sai collocation làm câu nói nghe rất ngượng ngịu (ví dụ nói "do a decision" hoặc "make homework" là sai).\n• Hãy học tiếng Anh theo cụm từ đi liền nhau để tăng phản xạ nói tự nhiên và trôi chảy.',
        examples: [
            { eng: 'I have to make a difficult decision today.', vi: 'Hôm nay tôi phải đưa ra một quyết định khó khăn.' },
            { eng: 'Remember to do your homework before going to bed.', vi: 'Hãy nhớ làm bài tập về nhà trước khi đi ngủ.' },
            { eng: 'She is taking a shower at the moment.', vi: 'Cô ấy đang tắm vào lúc này.' }
        ]
    }
];

// Export to window object for zero-setup HTML
window.ALPHABET_DATA = ALPHABET_DATA;
window.IPA_DATA = IPA_DATA;
window.GRAMMAR_DATA = GRAMMAR_DATA;
window.EXERCISE_DATA = EXERCISE_DATA;
window.SCENARIO_DATA = SCENARIO_DATA;
window.WORD_CLASSES_DATA = WORD_CLASSES_DATA;
window.ASKING_QUESTIONS_DATA = ASKING_QUESTIONS_DATA;
window.SENTENCE_STRUCTURES_DATA = SENTENCE_STRUCTURES_DATA;
window.IDIOMS_PHRASAL_DATA = IDIOMS_PHRASAL_DATA;
