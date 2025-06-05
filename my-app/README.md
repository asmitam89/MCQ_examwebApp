For Backend
Node.js , express js
For Frontend
Next js with shadcn


## 🔧 Prerequisites

- [XAMPP](https://www.apachefriends.org/index.html)
- Node.js and npm installed
## 🧑‍💻 Installation Steps

### 1. Install XAMPP

Download and install **XAMPP** on your machine from [https://www.apachefriends.org](https://www.apachefriends.org).

### 2. Start Apache and MySQL

- Open the **XAMPP Control Panel**
- Click **Start** on both **Apache** and **MySQL**

### 3. Create the Database

1. Open **phpMyAdmin** (visit [http://localhost/phpmyadmin](http://localhost/phpmyadmin))
2.create new database with name mcq_exam import sql file shared in repo

3. Import the `.sql` file shared in the repository into the `mcq_exam` database.

---

## 🖥️ Backend Setup

Open a terminal and run:

```bash
cd backend
npm install
node index.js
```
          ## 🚀 Running the Frontend (Next.js)

### Step 4: Start the Next.js Project

In your terminal, navigate to the frontend directory "cd my-app" and run:

```bash
npm run dev
```
### step5.Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
### step6.Click on Take a test button you will get login window
### step7.Enter Username= student1@gmail.com and password = student1 click on login button
### step8.You will get Dashboard in that click on any subject to give test
### step9.After clicking that any subject you will see question and 4 option with 10min timer

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel


Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
