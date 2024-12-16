const generateRandomImageUrl = (
  minWidth = 200,
  maxWidth = 500,
  minHeight = 200,
  maxHeight = 500
) => {
  // Random width and height within the specified range
  const width = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
  const height = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;

  return `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 1000)}`;
};

// Function to generate random status: 5% ISSUED, 95% AVAILABLE
const generateRandomStatus = () => {
  return Math.random() < 0.1 ? 'ISSUED' : 'AVAILABLE'; // 5% chance for "ISSUED"
};

const phones = [
  {
    id: 1,
    title: 'Wind 7i Blue',
    accession: 'LIB000210',
    category: 'Smart Phone',
    condition: 'Fresh',
    location: 'Location',
    serialNumber: 'RCKMPKB10008077',
    model: 'CK LS-5501',
    brand: 'LYF',
    releaseDate: 'JANUARY 2016',
    technology: 'GSM/HSPA',
    resolution: '1920x1080 pixels',
    osPlatform: 'ANDROID',
    chipset: 'Snapdragon 615 MSM8939',
    cpu: '1.5GHz Octa-Core',
    price: '23990/-',
    dimensions: '154x76.6x7.25 mm',
    simType: 'DUAL SIM',
    memory: '32GB, 3GB RAM',
    camera: '13MP/5MP',
    image: generateRandomImageUrl(300, 600, 200, 400), // Random image with dynamic resolution
    status: generateRandomStatus(), // Randomly assigned status with 5% "ISSUED"
  },
  {
    id: 2,
    title: 'Apple iPhone 13',
    accession: 'LIB000211',
    category: 'Smart Phone',
    condition: 'Used',
    location: 'Location',
    serialNumber: 'RCKMPKB10008078',
    model: 'IP13 Pro',
    brand: 'Apple',
    releaseDate: 'SEPTEMBER 2021',
    technology: '5G',
    resolution: '2532x1170 pixels',
    osPlatform: 'iOS',
    chipset: 'A15 Bionic',
    cpu: 'Hexa-core',
    price: '99999/-',
    dimensions: '146.7x71.5x7.65 mm',
    simType: 'DUAL SIM',
    memory: '128GB, 4GB RAM',
    camera: '12MP/12MP',
    image: generateRandomImageUrl(350, 700, 250, 500), // Random image with dynamic resolution
    status: generateRandomStatus(), // Randomly assigned status with 5% "ISSUED"
  },
  {
    id: 3,
    title: 'Samsung Galaxy S21',
    accession: 'LIB000212',
    category: 'Smart Phone',
    condition: 'Brand New',
    location: 'Location',
    serialNumber: 'RCKMPKB10008079',
    model: 'SM-G991B',
    brand: 'Samsung',
    releaseDate: 'JANUARY 2021',
    technology: '5G',
    resolution: '2400x1080 pixels',
    osPlatform: 'Android',
    chipset: 'Exynos 2100',
    cpu: 'Octa-core',
    price: '74999/-',
    dimensions: '151.7x71.2x7.9 mm',
    simType: 'DUAL SIM',
    memory: '128GB, 8GB RAM',
    camera: '12MP/64MP',
    image: generateRandomImageUrl(400, 800, 300, 600), // Random image with dynamic resolution
    status: generateRandomStatus(), // Randomly assigned status with 5% "ISSUED"
  },
  {
    id: 4,
    title: 'Nokia 6.1 Plus',
    accession: 'LIB000213',
    category: 'Smart Phone',
    condition: 'Used',
    location: 'Location',
    serialNumber: 'RCKMPKB10008080',
    model: 'Nokia 6.1',
    brand: 'Nokia',
    releaseDate: 'JULY 2018',
    technology: 'GSM/HSPA',
    resolution: '1920x1080 pixels',
    osPlatform: 'ANDROID',
    chipset: 'Snapdragon 636',
    cpu: 'Octa-core 1.8 GHz Kryo 260',
    price: '14990/-',
    dimensions: '151.1x71.4x8 mm',
    simType: 'DUAL SIM',
    memory: '32GB, 3GB RAM',
    camera: '16MP/8MP',
    image: generateRandomImageUrl(350, 700, 250, 500), // Random image with dynamic resolution
    status: generateRandomStatus(), // Randomly assigned status with 5% "ISSUED"
  },
  {
    id: 5,
    title: 'Xiaomi Redmi Note 10 Pro',
    accession: 'LIB000214',
    category: 'Smart Phone',
    condition: 'Brand New',
    location: 'Location',
    serialNumber: 'RCKMPKB10008081',
    model: 'Redmi Note 10 Pro',
    brand: 'Xiaomi',
    releaseDate: 'MARCH 2021',
    technology: '5G',
    resolution: '2400x1080 pixels',
    osPlatform: 'Android',
    chipset: 'Snapdragon 732G',
    cpu: 'Octa-core',
    price: '17999/-',
    dimensions: '164x76.8x8.1 mm',
    simType: 'DUAL SIM',
    memory: '64GB, 6GB RAM',
    camera: '108MP/16MP',
    image: generateRandomImageUrl(400, 800, 300, 600), // Random image with dynamic resolution
    status: generateRandomStatus(), // Randomly assigned status with 5% "ISSUED"
  },
  {
    id: 1,
    title: 'Wind 7i Blue',
    accession: 'LIB000210',
    category: 'Smart Phone',
    condition: 'Fresh',
    location: 'Location',
    serialNumber: 'RCKMPKB10008077',
    model: 'CK LS-5501',
    brand: 'LYF',
    releaseDate: 'JANUARY 2016',
    technology: 'GSM/HSPA',
    resolution: '1920x1080 pixels',
    osPlatform: 'ANDROID',
    chipset: 'Snapdragon 615 MSM8939',
    cpu: '1.5GHz Octa-Core',
    price: '23990/-',
    dimensions: '154x76.6x7.25 mm',
    simType: 'DUAL SIM',
    memory: '32GB, 3GB RAM',
    camera: '13MP/5MP',
    image: generateRandomImageUrl(300, 600, 200, 400), // Random image with dynamic resolution
    status: generateRandomStatus(), // Randomly assigned status with 5% "ISSUED"
  },
  {
    id: 2,
    title: 'Apple iPhone 13',
    accession: 'LIB000211',
    category: 'Smart Phone',
    condition: 'Used',
    location: 'Location',
    serialNumber: 'RCKMPKB10008078',
    model: 'IP13 Pro',
    brand: 'Apple',
    releaseDate: 'SEPTEMBER 2021',
    technology: '5G',
    resolution: '2532x1170 pixels',
    osPlatform: 'iOS',
    chipset: 'A15 Bionic',
    cpu: 'Hexa-core',
    price: '99999/-',
    dimensions: '146.7x71.5x7.65 mm',
    simType: 'DUAL SIM',
    memory: '128GB, 4GB RAM',
    camera: '12MP/12MP',
    image: generateRandomImageUrl(350, 700, 250, 500), // Random image with dynamic resolution
    status: generateRandomStatus(), // Randomly assigned status with 5% "ISSUED"
  },
  {
    id: 3,
    title: 'Samsung Galaxy S21',
    accession: 'LIB000212',
    category: 'Smart Phone',
    condition: 'Brand New',
    location: 'Location',
    serialNumber: 'RCKMPKB10008079',
    model: 'SM-G991B',
    brand: 'Samsung',
    releaseDate: 'JANUARY 2021',
    technology: '5G',
    resolution: '2400x1080 pixels',
    osPlatform: 'Android',
    chipset: 'Exynos 2100',
    cpu: 'Octa-core',
    price: '74999/-',
    dimensions: '151.7x71.2x7.9 mm',
    simType: 'DUAL SIM',
    memory: '128GB, 8GB RAM',
    camera: '12MP/64MP',
    image: generateRandomImageUrl(400, 800, 300, 600), // Random image with dynamic resolution
    status: generateRandomStatus(), // Randomly assigned status with 5% "ISSUED"
  },
  {
    id: 4,
    title: 'Nokia 6.1 Plus',
    accession: 'LIB000213',
    category: 'Smart Phone',
    condition: 'Used',
    location: 'Location',
    serialNumber: 'RCKMPKB10008080',
    model: 'Nokia 6.1',
    brand: 'Nokia',
    releaseDate: 'JULY 2018',
    technology: 'GSM/HSPA',
    resolution: '1920x1080 pixels',
    osPlatform: 'ANDROID',
    chipset: 'Snapdragon 636',
    cpu: 'Octa-core 1.8 GHz Kryo 260',
    price: '14990/-',
    dimensions: '151.1x71.4x8 mm',
    simType: 'DUAL SIM',
    memory: '32GB, 3GB RAM',
    camera: '16MP/8MP',
    image: generateRandomImageUrl(350, 700, 250, 500), // Random image with dynamic resolution
    status: generateRandomStatus(), // Randomly assigned status with 5% "ISSUED"
  },
  {
    id: 5,
    title: 'Xiaomi Redmi Note 10 Pro',
    accession: 'LIB000214',
    category: 'Smart Phone',
    condition: 'Brand New',
    location: 'Location',
    serialNumber: 'RCKMPKB10008081',
    model: 'Redmi Note 10 Pro',
    brand: 'Xiaomi',
    releaseDate: 'MARCH 2021',
    technology: '5G',
    resolution: '2400x1080 pixels',
    osPlatform: 'Android',
    chipset: 'Snapdragon 732G',
    cpu: 'Octa-core',
    price: '17999/-',
    dimensions: '164x76.8x8.1 mm',
    simType: 'DUAL SIM',
    memory: '64GB, 6GB RAM',
    camera: '108MP/16MP',
    image: generateRandomImageUrl(400, 800, 300, 600), // Random image with dynamic resolution
    status: generateRandomStatus(), // Randomly assigned status with 5% "ISSUED"
  },
];

export default phones;
