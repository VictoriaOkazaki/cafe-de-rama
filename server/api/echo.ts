export default defineEventHandler((event) => {
    console.log('/api/echo')
    return 'pong';
});
