/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ed.biodare2.backend.repo.isa_dom.dataimport;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.json.JsonTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.test.context.junit4.SpringRunner;

/**
 *
 * @author Tomasz Zielinski <tomasz.zielinski@ed.ac.uk>
 */
@RunWith(SpringRunner.class)
@JsonTest
public class DataTableImportParametersTest {
    
    @Autowired
    JacksonTester<DataTableImportParameters> jsonParser;    
    
    @Autowired
    ObjectMapper mapper;        
    
    public DataTableImportParametersTest() {
    }
    
    @Before
    public void setUp() {
    }

    @Test
    public void testCanDeserializeAngularJSON() throws Exception {
        
        String json = "{ \"inRows\": true, \"timeOffset\": 0, \"importLabels\": true, \"_class_name\": \".DataTableImportParameters\", \"timeType\": \"TIME_IN_HOURS\", \"firstTimeCell\": { \"col\": 1, \"row\": 0 }, \"fileId\": \"_upload541534594694376721\", \"fileName\": \"wt_prr_simpl_inRows.csv\", \"importFormat\": \"COMA_SEP\", \"labelsSelection\": { \"col\": 0, \"row\": 0 } }";
        
        DataTableImportParameters res = mapper.readValue(json, DataTableImportParameters.class);
        
        assertEquals("_upload541534594694376721",res.fileId);
        assertEquals(ImportFormat.COMA_SEP, res.importFormat);
        
        CellCoordinates cell = new CellCoordinates(1, 0);
        assertEquals(cell, res.firstTimeCell);
        
    }
    
}