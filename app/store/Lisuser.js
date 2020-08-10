Ext.define('Inventori.store.Lisuser', {
    extend: 'Ext.data.Store',
    storeId: 'lisuser',
    alias: 'store.lisuser',
    autoLoad: true,
    autoSync: true,
    fields: [
        'nomor', 'id_user', 'uname', 'pwd', 'nama_user', 'akses', 'kontak', 'tgl_buat'
    ],


    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apiuser.php?action=1",
            create: "http://localhost/inventaris/apiuser.php?action=2",
            destroy: "http://localhost/inventaris/apiuser.php?action=3",
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
