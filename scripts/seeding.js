// node -r dotenv/config ./scripts/seeding.js
const {db} = require('@vercel/postgres');
const students = [
    {
      id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
      name: 'Delba de Oliveira',
      email: 'delba@oliveira.com',
      image_url: '/customers/delba-de-oliveira.png',
    },
    {
      id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
      name: 'Lee Robinson',
      email: 'lee@robinson.com',
      image_url: '/customers/lee-robinson.png',
    }, 
    {
      id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
      name: 'Balazs Orban',
      email: 'balazs@orban.com',
      image_url: '/customers/balazs-orban.png',
    },
  ];

  async function seedStudents(client) {
    try {
      await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  
      // Create the "students" table if it doesn't exist
      const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS students (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email VARCHAR(255) NOT NULL,
          image_url VARCHAR(255) NOT NULL
        );
      `;
  
      console.log(`Created "students" table`);
  
      // Insert data into the "students" table
      const insertedstudents = await Promise.all(
        students.map(
          (student) => client.sql`
          INSERT INTO students (id, name, email, image_url)
          VALUES (${student.id}, ${student.name}, ${student.email}, ${student.image_url})
          ON CONFLICT (id) DO NOTHING;
        `,
        ),
      );
  
      console.log(`Seeded ${insertedstudents.length} students`);
  
      return {
        createTable,
        students: insertedstudents,
      };
    } catch (error) {
      console.error('Error seeding students:', error);
      throw error;
    }
  }

  async function main(){
    console.log("main function is run")
    const client = await db.connect();

    await seedStudents(client);

  }

  main()
  .catch(
    (err)=>{
        console.error("err occurs", err)
    }
  )