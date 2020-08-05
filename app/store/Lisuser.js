Ext.define('Inventori.store.Lisuser', {
    extend: 'Ext.data.Store',
    alias: 'store.lisuser',
    autoLoad: true,
    autoSync: true,
    fields: [
        'nomor', 'id_user', 'uname', 'pwd', 'nama_user', 'akses', 'kontak', 'tgl_buat'
    ],


    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apiuser.php"
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
