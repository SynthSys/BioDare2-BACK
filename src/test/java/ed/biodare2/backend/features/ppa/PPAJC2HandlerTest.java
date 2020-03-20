/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ed.biodare2.backend.features.ppa;

import ed.biodare2.backend.features.tsdata.datahandling.TSDataHandler;
import ed.biodare2.backend.handlers.ExperimentHandler;
import ed.biodare2.backend.repo.dao.PPAArtifactsRep;
import ed.biodare2.backend.repo.isa_dom.DomRepoTestBuilder;
import static ed.biodare2.backend.repo.isa_dom.DomRepoTestBuilder.makeDataTraces;
import ed.biodare2.backend.repo.isa_dom.dataimport.DataTrace;
import ed.biodare2.backend.repo.isa_dom.ppa.PPARequest;
import ed.biodare2.backend.repo.system_dom.AssayPack;
import ed.biodare2.backend.repo.system_dom.MockExperimentPack;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;
import static org.mockito.Mockito.*;
/**
 *
 * @author tzielins
 */
public class PPAJC2HandlerTest {
    
    ExperimentHandler experimentHandler;
    PPAArtifactsRep ppaRep;
    TSDataHandler dataHandler;
    PPAAnalysisService ppaService;
    PPAResultsHandler ppaResultsHandler;
    
    PPAJC2Handler instance;
    
    public PPAJC2HandlerTest() {
    }
    
    @Before
    public void setUp() {
        
        experimentHandler = mock(ExperimentHandler.class);
        ppaRep = mock(PPAArtifactsRep.class);
        dataHandler = mock(TSDataHandler.class);
        ppaService = mock(PPAAnalysisService.class);
        ppaResultsHandler = mock(PPAResultsHandler.class);
        
        instance = new PPAJC2Handler(experimentHandler, ppaRep, ppaService, dataHandler, ppaResultsHandler);
    }

    @Test
    public void newRhythmicitySubmitsJob() throws Exception {
        
        long expId = 123;
        AssayPack exp = new MockExperimentPack(expId);    
        
        PPARequest req = DomRepoTestBuilder.makePPARequest();        
        
        List<DataTrace> dataSet = makeDataTraces(1, 1);    
        when(dataHandler.getDataSet(exp, req.detrending)).thenReturn(Optional.of(dataSet));     
        
        UUID uid = UUID.randomUUID();
        //when(ppaService.submitJob(any())).thenReturn(uid);
        
        UUID res = instance.newPPA(exp, req);
        
        assertEquals(uid, res);
        verify(ppaRep).saveJobSummary(any(), any());
        verify(experimentHandler).updateHasRhythmicityJobs(exp,true);
        
    }    
}
