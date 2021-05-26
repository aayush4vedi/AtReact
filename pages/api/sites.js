import db from '@/lib/firebase-admin';

export default async (_, res) => {    // `_` in place of `req` because we're not using 'req' values
  const snapshot = await db.collection('sites').get();
  const sites = [];

  snapshot.forEach((doc) => {
    sites.push({ id: doc.id, ...doc.data() });
  });

  res.status(200).json({ sites });
};