Ext.define('Inventori.store.Lisnotif', {
    extend: 'Ext.data.Store',
    storeId: 'lisnotif',
    alias: 'store.lisnotif',
    fields: [
        'nomor', 'id_notif', 'jenis', 'isi', 'admin', 'status'
    ],
    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apinotif.php?action=1"
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
