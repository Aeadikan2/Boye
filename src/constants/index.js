import projectA from '../assets/Projects/projectA.jpg';
import projectC from '../assets/Projects/projectC.jpg';
import projectE from '../assets/Projects/projectE.jpg';

export const HERO_CONTENT = `I am a passionate software engineer with a focus on building scalable and efficient web applications and mobile applications. I have a strong background in JavaScript, React, and Node.js, and I love tackling complex problems with elegant solutions.
I am always eager to learn new technologies and improve my skills. I believe in the power of collaboration and enjoy working in teams to create innovative products that make a difference. and with 4 years experience in the industry, I have honed my skills in full-stack development, cloud computing, and DevOps practices.`;

export const ABOUT_TEXT = `I am a dedicated and versatile software engineer with a passion for creating innovative solutions. With a strong foundation in computer science and extensive experience in full-stack development, I thrive on tackling complex challenges and delivering high-quality software products.
My expertise lies in designing and implementing scalable web applications, leveraging modern technologies such as React, Node.js, and cloud platforms. I am committed to continuous learning and staying up-to-date with industry trends to ensure that I can provide the best solutions for my clients`;

export const EXPERIENCES = [
    {
        year: "2023 - Present",
        role: 'Software Engineer',
        company: 'Freelancer',
        description: 'Developing web applications using React and Node.js, focusing on performance optimization and user experience. Collaborating with clients to understand their requirements and deliver high-quality solutions.',
        technologies: ['React', 'Node.js', 'JavaScript', 'CSS', 'HTML']
    },
    {
        year: '2022 - 2023',
        role: 'Software Engineer',
        company: 'Bingham University',
        description: 'Created a Network Load Balancing System using Round-Robin Algorithm, which improved the performance and reliability of the university\'s network infrastructure. Developed a web application for managing student records, enhancing data accessibility and user experience.',
        technologies: ['Networking', 'Load Balancing', 'JavaScript', 'React', 'Node.js']
    },
    {
        year: '2020 - 2022',
        role: 'Front-End Engineer',
        company: 'HIRE',
        description: 'Develop mobile applications using Flutter and Dart, focusing on creating intuitive user interfaces and seamless user experiences. Collaborated with cross-functional teams to deliver high-quality mobile applications on time, ensuring adherence to best practices in mobile development, including performance optimization and responsive design.',
        technologies: ['Flutter', 'Dart', 'Firebase', 'Mobile Development', 'UI/UX Design']
    },
];

export const PROJECTS = [
    {
        title: 'Portfolio',
        image: projectC,
        description: 
        'A personal portfolio website showcasing projects, skills and contact information.',
        technologies: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
    },
    {
        title: 'E-commerce Platform',
        image: projectA,
        description: 
        'A full-stack e-commerce application with shopping cart like product listing, user authentication, product management, and payment integration.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    },
    {
        title: 'Netflix Clone App',
        image: projectE,
        description: 
        'A Netflix clone app built with React and Node.js, featuring user authentication, and watching movies and movie data retrieval from the TMDB API.',
        technologies: ['React', 'Firebase', 'JavaScript', 'TMDB API', 'Tailwind CSS'],
    },  
];

export const CONTACT = {
    address: 'Abuja, Nigeria',
    phoneNo: '+234 7054255572',
    email: 'Boyebello@gmail.com'
};

