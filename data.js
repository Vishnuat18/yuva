const monumentImages = [
    { name: 'RPSIT - YUVA 2025-images-0.jpg', category: 'Cheif Guest Actress Mirnalini Ravi' },
    { name: 'RPSIT - YUVA 2025-images-1.jpg', category: 'Chief Guest Actor Abishek Raja' },
    { name: 'RPSIT - YUVA 2025-images-2.jpg', category: 'Our Management' },
    { name: 'RPSIT - YUVA 2025-images-3.jpg', category: 'YUVA Student Coordinators' },
    { name: 'RPSIT - YUVA 2025-images-4.jpg', category: 'Glimpses of Dance Performance' },
    { name: 'RPSIT - YUVA 2025-images-5.jpg', category: 'Glimpses of Dance Performance' },
    { name: 'RPSIT - YUVA 2025-images-6.jpg', category: 'Glimpses of Dance Performance' },
    { name: 'RPSIT - YUVA 2025-images-7.jpg', category: 'Glimpses of Dance Performance' },
    { name: 'RPSIT - YUVA 2025-images-8.jpg', category: 'Glimpses of Dance Performance' },
    { name: 'RPSIT - YUVA 2025-images-9.jpg', category: 'Glimpses of Dance Performance' },
    { name: 'RPSIT - YUVA 2025-images-10.jpg', category: 'Glimpses of Dance Performance' },
    { name: 'RPSIT - YUVA 2025-images-11.jpg', category: 'Glimpses of Dance Performance' },
    { name: 'RPSIT - YUVA 2025-images-12.jpg', category: 'Glimpses of Dance Performance' },
    { name: 'RPSIT - YUVA 2025-images-13.jpg', category: 'Glimpses of Face Painting' },
    { name: 'RPSIT - YUVA 2025-images-14.jpg', category: 'Glimpses of Fashion Parade' },
    { name: 'RPSIT - YUVA 2025-images-15.jpg', category: 'Glimpses of Fashion Parade' },
    { name: 'RPSIT - YUVA 2025-images-16.jpg', category: 'Glimpses of Fashion Parade' },
    { name: 'RPSIT - YUVA 2025-images-17.jpg', category: 'Glimpses of Fashion Parade' },
    { name: 'RPSIT - YUVA 2025-images-18.jpg', category: 'Glimpses of Singing Performance' },
    { name: 'RPSIT - YUVA 2025-images-19.jpg', category: 'Glimpses of Singing Performance' },
    { name: 'RPSIT - YUVA 2025-images-20.jpg', category: 'Glimpses of Singing Performance' },
    { name: 'RPSIT - YUVA 2025-images-21.jpg', category: 'Glimpses of Singing Performance' },
    { name: 'RPSIT - YUVA 2025-images-22.jpg', category: 'Management with Chief Guest' },
    { name: 'RPSIT - YUVA 2025-images-23.jpg', category: '2nd Runner-Up Celebration' },
    { name: 'RPSIT - YUVA 2025-images-24.jpg', category: '1st Runner-Up Celebration' },
    { name: 'RPSIT - YUVA 2025-images-25.jpg', category: 'Champions Celebration' }
];

const eventData = {
    'solo-singing': {
        title: 'Solo Singing',
        description: 'A showcase of individual vocal talent, where participants will perform a song of their choice, demonstrating vocal skill, stage presence, and emotion.',
        icon: '🎤',
        image: 'assests/event_logos/solo_singing.png',
        gradient: 'linear-gradient(135deg, #FF007A 0%, #7000FF 100%)',
        color: '#FF007A',
        rules: [
            'Participants may sing a song of their choice.',
            'Performance time limit: Maximum of 6 minutes.',
            'No backing vocals or pre-recorded vocals allowed.',
            'Props and instruments are allowed but should be kept minimal.',
            'Participants will be judged on voice quality, originality, and stage presence.',
            'No offensive language or inappropriate content.',
            'Registration Fee per participant: Rs. 200/-'
        ],
        prizes: {
            first: 'Rs. 3000/-',
            second: 'Rs. 2000/-',
            third: 'Rs. 1000/-'
        },
        prizeImage: 'assests/prizes/3.png'
    },
    'group-singing': {
        title: 'Group Singing',
        description: 'A collective performance where groups come together to sing a song of their choice, focusing on harmony, synchronization, and unity in performance.',
        icon: '🎶',
        image: 'assests/event_logos/group_singing.png',
        gradient: 'linear-gradient(135deg, #00D1FF 0%, #0075FF 100%)',
        color: '#00D1FF',
        rules: [
            'Group size: 3 and above members.',
            'Performance time limit: Maximum of 8 minutes.',
            'No backing vocals or pre-recorded vocals allowed.',
            'Group members must sing in harmony, and instruments are allowed.',
            'Judges will evaluate harmony, synchronization, and overall performance.',
            'Content should be appropriate for all ages.',
            'Registration Fee per participant: Rs. 200/-'
        ],
        prizes: {
            first: 'Rs. 10,000/-',
            second: 'Rs. 6,000/-',
            third: 'Rs. 4,000/-'
        },
        prizeImage: 'assests/prizes/15.png'
    },
    'solo-dance': {
        title: 'Solo Dance',
        description: 'A platform for solo dancers to showcase their skill in any dance form, highlighting creativity, technique, and expression.',
        icon: '💃',
        image: 'assests/event_logos/solo_dance.png',
        gradient: 'linear-gradient(135deg, #FFD600 0%, #FF8A00 100%)',
        color: '#FFD600',
        rules: [
            'Performance time limit: Maximum of 8 minutes.',
            'Participants can choose any dance style (classical, hip-hop, etc.).',
            'Participants must perform solo.',
            'No inappropriate content or offensive gestures.',
            'Props are allowed but should be minimal and easy to manage.',
            'Participants will be judged on technique, creativity, and expression.',
            'Registration Fee per participant: Rs. 200/-'
        ],
        prizes: {
            first: 'Rs. 3,000/-',
            second: 'Rs. 2,000/-',
            third: 'Rs. 1,000/-'
        },
        prizeImage: 'assests/prizes/3.png'
    },
    'group-dance': {
        title: 'Group Dance',
        description: 'A vibrant performance where groups of dancers come together to showcase unity, choreography, and coordination in any dance style.',
        icon: '🕺',
        image: 'assests/event_logos/group_dance.png',
        gradient: 'linear-gradient(135deg, #FF00FF 0%, #7000FF 100%)',
        color: '#FF00FF',
        rules: [
            'Group size: Minimum of 3 members.',
            'Performance time limit: 8 minutes.',
            'The dance must be choreographed by the participants.',
            'No offensive or inappropriate gestures or content.',
            'Judges will evaluate synchronization, creativity, and energy.',
            'Props and costumes are allowed.',
            'Registration Fee per participant: Rs. 200/-'
        ],
        prizes: {
            first: 'Rs. 15,000/-',
            second: 'Rs. 9,000/-',
            third: 'Rs. 4,000/-'
        },
        prizeImage: 'assests/prizes/15.png'
    },
    'fashion-parade': {
        title: 'Fashion Parade',
        description: 'A display of creativity and style, where participants showcase their fashion sense through a runway walk, highlighting innovative and unique outfits.',
        icon: '✨',
        image: 'assests/event_logos/fashion.png',
        gradient: 'linear-gradient(135deg, #FFFFFF 0%, #A0A0A0 100%)',
        color: '#FFFFFF',
        rules: [
            'Participants must walk the runway in a self-chosen outfit.',
            'No offensive or inappropriate clothing.',
            'Time limit for the runway walk: Maximum of 4 minutes.',
            'Participants will be judged on creativity, confidence, and style.',
            'Registration Fee per participant: Rs. 200/-'
        ],
        prizes: {
            first: 'Rs. 15,000/-',
            second: 'Rs. 9,000/-',
            third: 'Rs. 4,000/-'
        }
    },
    'face-painting': {
        title: 'Face Painting',
        description: 'A creative competition where participants paint faces, transforming them into unique artworks using their skills and imagination.',
        icon: '🎨',
        image: 'assests/event_logos/face_painting.png',
        gradient: 'linear-gradient(135deg, #FF8A00 0%, #FF0000 100%)',
        color: '#FF8A00',
        rules: [
            'Participants must create a face painting on themselves or another individual.',
            'The use of non-toxic, professional-grade face paints is required.',
            'No pre-painted designs allowed; all face paint must be done during the event.',
            'Participants will be judged on creativity, technique, and overall design.',
            'Time limit for painting: 90 minutes.',
            'Registration Fee per participant: Rs. 200/-'
        ],
        prizes: {
            first: 'Rs. 3,000/-',
            second: 'Rs. 2,000/-',
            third: 'Rs. 1,000/-'
        },
        prizeImage: 'assests/prizes/3.png'
    },
    'short-film': {
        title: 'Short Film',
        description: 'A platform for filmmakers to showcase their storytelling skills, creativity, and cinematography in a short film format.',
        icon: '🎬',
        image: 'assests/event_logos/short_film.png',
        gradient: 'linear-gradient(135deg, #00FFB2 0%, #00A3FF 100%)',
        color: '#00FFB2',
        rules: [
            'Film duration: Maximum of 12 minutes.',
            'Films must be original and created by the participants.',
            'No offensive language, violence, or inappropriate content.',
            'Participants must submit the film in a specified format (e.g., MP4).',
            'Judging criteria will include creativity, storytelling, cinematography, and editing.',
            'Registration Fee per participant: Rs. 200/-'
        ],
        prizes: {
            first: 'Rs. 3,000/-',
            second: 'Rs. 2,000/-',
            third: 'Rs. 1,000/-'
        }
    },
    'overall-champions': {
        title: 'Overall Champions',
        description: 'The Overall Champion will be awarded to the individual or team that accumulates the most points across all events, showcasing the highest level of talent, creativity, and performance.',
        isChampion: true,
        icon: '🏆',
        image: 'assests/event_logos/champions.png',
        gradient: 'linear-gradient(135deg, #FFD600 0%, #fda085)',
        color: '#FFD600',
        rules: [
            'Points will be awarded based on performance in each event.',
            'First Place in any event will be awarded 3 points, Second Place in any event will be awarded 2 points and third place in any event will be awarded 1 point.',
            'The participant or team with the most points will be crowned Overall Champion.',
            'Tiebreakers will be decided based on judges\' discretion in categories such as creativity, execution, and performance quality.',
            'Grouping of Colleges or Group of Colleges will not be considered. All points will be registered only in the name of the participants\' college.'
        ],
        prizes: {
            first: 'Overall Champions: Rs. 25,000/-',
            second: 'First Runner Up: Rs. 15,000/-',
            third: 'Second Runner Up: Rs. 10,000/-'
        },
        prizeImage: 'assests/prizes/25.png'
    }
};
