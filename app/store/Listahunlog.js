Ext.define('Inventori.store.Listahunlog', {
    extend: 'Ext.data.Store',
    storeId: 'listahunlog',
    alias: 'store.listahunlog',
    autoLoad: true,
    autoSync: true,
    fields: [
        'tahun'
    ],
    proxy: {
        type: 'jsonp',
        api: {
            read: "http://localhost/inventaris/apilog.php?action=2",
        },
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
