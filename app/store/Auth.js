Ext.define('Inventori.store.Auth', {
    extend: 'Ext.data.Store',
    storeId: 'auth',
    alias: 'store.auth',
    autoLoad: true,
    autoSync: true,
    fields: [
        'id_user', 'uname', 'pwd', 'nama_user', 'akses', 'kontak', 'tgl_buat'
    ],
    proxy: {
        type: 'jsonp',
        api: {
            read: "/auth.php",
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
