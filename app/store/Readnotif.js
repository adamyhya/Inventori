Ext.define('Inventori.store.Readnotif', {
    extend: 'Ext.data.Store',
    storeId: 'readnotif',
    alias: 'store.readnotif',
    fields: [
        'nomor', 'id_notif', 'jenis', 'isi', 'admin', 'status'
    ],
    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apinotif.php"
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
