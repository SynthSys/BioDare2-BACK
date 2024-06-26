/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package ed.biodare2.backend.features.tsdata.datahandling;

import ed.robust.dom.data.DetrendingType;
import ed.robust.dom.data.NormalizationType;
import ed.robust.dom.data.TimeSeries;
import java.util.Collection;

/**
 *
 * @author tzielins
 */
interface TimeSeriesTransformer {
    
    public TimeSeries standardise(TimeSeries org);
    
    public TimeSeries detrend(TimeSeries org, DetrendingType detrending);
    
    public TimeSeries normalise(TimeSeries org, NormalizationType normalization);
    
    public TimeSeries average(Collection<? extends TimeSeries> series);
    
    //public TimeSeries average(Iterable<? extends TimeSeries> series);
    
}
